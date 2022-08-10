import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const WeatherForm = ({
	onSubmit, onCityChange, weatherInfo, logout, initialCity, extractWeatherDetails
}) => {
    
	
	const navigateTo = useNavigate(); 

	useEffect(() => {
		extractWeatherDetails();
	  }, []);

	return (<Fragment>
		<div className="weather-app">		
		<div className="form-box-s">
			<div className="header-text-s">
			<h3>WeatherApp</h3>
			<input placeholder="Enter city"  className="form-control" type="text" id="CitySearch" value={initialCity} onChange={onCityChange}></input>
			<button  onClick={onSubmit}>Search</button>
			<h6>Country Code: {weatherInfo.country}</h6>
			<h6>Description: {weatherInfo.description}</h6>
            <h6>Temperature(C): {weatherInfo.temperature} </h6>				
			</div>
			<button onClick={logout}>Logout</button>
		</div>
		</div>
		</Fragment>);
}

export default WeatherForm;