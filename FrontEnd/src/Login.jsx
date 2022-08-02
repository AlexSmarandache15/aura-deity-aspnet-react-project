import {useState} from "react";
import LoginForm from "./components/views/auth/login";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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