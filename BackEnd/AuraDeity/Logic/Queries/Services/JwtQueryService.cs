using Interfaces.Queries.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Queries.Services
{
    public class JwtQueryService : IJwtQueryService
    {
        private readonly IConfiguration _configuration;

        public JwtQueryService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetJwtToken(string email, long id)
        {
            try
            {
                Claim[] claims = new[] {
                    new Claim(ClaimTypes.NameIdentifier, id.ToString()),
                    new Claim(ClaimTypes.Name, email),
                };

               
                var config = _configuration.GetSection("AppSettings:Token");
                if(config.Value == null)
                {

                }
                var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.Value));
                var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);

                var securityTokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = signingCredentials,
                };

                var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
                var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);

                return jwtSecurityTokenHandler.WriteToken(securityToken);
            }
            catch (Exception)
            {
                throw;
            }
        }
            
    }
}
