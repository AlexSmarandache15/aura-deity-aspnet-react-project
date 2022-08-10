import {useState} from "react";
import LoginForm from "./components/views/auth/login";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigateTo = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loadLastSearchedCity() {
        
        const url = "https://localhost:7191/api/weather/lastsearch";
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				username: localStorage.getItem("username")
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("lastsearch", data);
            });
    }

    function onEmailChanged(data) {
        setEmail(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onSubmit(data) {
        data.preventDefault();
        tryToLogin();
    }

    async function tryToLogin() {
        
        const url = "https://localhost:7191/api/auth/login";
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response) => {
            if(response.ok === true) {
                var token = await response.json();
                localStorage.setItem("token", token);
                localStorage.setItem("username", email);
                await loadLastSearchedCity();
                navigateTo('/weather', {replace : true});
                console.log("Ok");
            }  else {
                console.log("Error");
            }
        });
    }

    return (
        <LoginForm
            onUsernameChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Login;