using Models.Weather;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.Queries
{
    public interface IWeatherAPI
    {
        Task<Weather> GetWeatherDataByCity(string city);

        Task<string> SaveWeatherSearch(string city, string username);

        string GetLastCitySearchedByUser(string username);
    }
}
