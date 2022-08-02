using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class AuraDeityContext : DbContext
    {
        public AuraDeityContext(DbContextOptions<AuraDeityContext> dbContextOptions) 
            : base(dbContextOptions) { 
        }

        public DbSet<UserAuthEntity> UserAuths { get; set; }

        public DbSet<WeatherDataEntity> WeatherDatas { get; set; }
    }
}
