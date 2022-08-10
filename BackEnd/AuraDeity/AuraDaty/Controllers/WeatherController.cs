﻿using Interfaces.Queries;
using Logic.Queries;
using Microsoft.AspNetCore.Mvc;
using Models.Authentification;
using Models.Weather;

namespace AuraDeity.Controllers
{
    [Route("api/weather")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        public WeatherController(IWeatherAPI weatherAPI)
        {
            WeatherAPI = weatherAPI;
        }

        private IWeatherAPI WeatherAPI { get; }

        /// <summary>
        /// Get the current weather data for the provided location.
        /// </summary>
        /// <param name="weatherSearchDto">The weatherSearchDto.</param>
        /// <returns>Returns the weather data response.</returns>
        [HttpPost("current")]
        public async Task<IActionResult> GetCurrentWeatherData(WeatherSearchDto weatherSearchDto)
        {
            var weather = await WeatherAPI.GetWeatherDataByCity(weatherSearchDto.City);

            return weather.Count > 0
                ? this.Ok(
                    new WeatherResponse()
                    {
                        City = weather.List?.FirstOrDefault()?.Name,
                        Country = weather.List?.FirstOrDefault()?.Sys?.Country,
                        Description = weather.List?.FirstOrDefault()?.Weather?.FirstOrDefault()?.Description,
                        Temperature = weather.List?.FirstOrDefault()?.Main?.Temp,
                    })
               : this.Ok(weather);
        }

        [HttpPost("searchsave")]
        public async Task<IActionResult> SaveWeatherSearch(WeatherSearchInfoDto info)
        {
            var processResult = await WeatherAPI.SaveWeatherSearch(info.City, info.Username);

            if (string.IsNullOrEmpty(processResult))
            {
                return BadRequest();
            }

            return Ok(processResult);
        }

        [HttpPost("lastsearch")]
        public async Task<IActionResult> GetLastSearch(UserSearchModel user)
        {
            var processResult = WeatherAPI.GetLastCitySearchedByUser(user.Username);

            if (string.IsNullOrEmpty(processResult))
            {
                return BadRequest();
            }

            return Ok(processResult);
        }
    }

}