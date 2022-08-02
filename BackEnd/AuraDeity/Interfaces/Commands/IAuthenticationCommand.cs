using Models.Authentification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.Commands
{
    public interface IAuthenticationCommand
    {
        Task<string> SignUpAsync(SignUpModel signUpModel);
    }
}
