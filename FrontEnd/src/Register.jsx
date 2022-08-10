import {useState} from "react";
import RegisterForm from "./components/views/auth/register";

function Register() {
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
        tryToRegister();
    }

    async function tryToRegister() {
        const url = "https://localhost:7191/api/auth/signup";
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
                localStorage.setItem('token', token);
                console.log("Ok");
            }  else {
                console.log("Error");
            }
        });
    }

    return (
        <RegisterForm
            onUsernameChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Register;