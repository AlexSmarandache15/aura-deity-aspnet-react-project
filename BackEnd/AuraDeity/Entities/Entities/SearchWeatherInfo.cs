using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class SearchWeatherInfo
    {
        public int Id { get; set; }

        public String City { get; set; }

        public String Username { get; set; }

        public DateTime? QuerydateTime { get; set; }
    }
}
