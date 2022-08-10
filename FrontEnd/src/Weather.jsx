import {useState} from "react";
import LoginForm from "./components/views/auth/login";
import { useNavigate } from "react-router-dom";
import WeatherForm from "./components/views/auth/weather";

function Weather() {
    const navigateTo = useNavigate();
  
    const [city, setCity] = useState(localStorage.getItem("lastsearch"));
    const [weather, setWeather] = useState({});

	const handleCityChange = (value) => {
		setCity(value.target.value);
        console.log(value.target.value);
	};

    async function saveLastSearch() {
        
        const url = "https://localhost:7191/api/weather/searchsave";
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				username: localStorage.getItem("username"),
                city: city
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            });
    }  

	const logout = ({}) => {
        saveLastSearch();
        localStorage.clear();
        navigateTo("/login");
    }


    function onSubmit(data) {
        data.preventDefault();
        extractWeatherDetails();
    }

    async function extractWeatherDetails() {
        
        const url = "https://localhost:7191/api/weather/current";
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                city: city
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setWeather({
            country : data.country,
            temperature : data.temperature,
            description : data.description
        } )});
    }

    return (
        <div>
        <WeatherForm
            onCityChange={handleCityChange}
            onSubmit={onSubmit}
            weatherInfo = {weather}
            logout={logout}
            initialCity={city}
            extractWeatherDetails = {extractWeatherDetails}
        />
        </div>
    )
}

export default Weather;