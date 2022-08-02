using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class WeatherDataEntity : BaseModel
    {
        public String City { get; set; }

        public String Country { get; set; }

        public String Description { get; set; }

        public float Temperature { get; set; }

        public DateTime? QuerydateTime { get; set; }

        [ForeignKey("UserAuthEntityID")]
        public UserAuthEntity UserAuthEntity { get; set; }

    }
}
