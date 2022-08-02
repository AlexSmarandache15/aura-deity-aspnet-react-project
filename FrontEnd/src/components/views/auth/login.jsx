import "./site.css"
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const LoginForm = ({
    onUsernameChanged, onPasswordChanged, onSubmit
}) => {
    
	const navigateTo = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')

	const handleEmailChange = (value) => {
		setEmail(value);
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
	};

	const handleSave = () => {
		const data = {
			Email : email,
			Password : password,
			isActive : 1
		}
		const url  = '';
	};

	return (<Fragment>		
	<div className="form-box">
		<div className="header-text">
			Login Form
		</div>
		<input placeholder="Email Address"  className="form-control" type="text" id="emailAdr"  onChange={onUsernameChanged}></input>
		<input placeholder="Enter Password"  className="form-control" type="password" onChange={onPasswordChanged}></input>
		<input id="terms" type="checkbox"></input>
		<label htmlFor="terms"></label><span>Agree with <a href="#">Terms and Conditions</a></span> 
		<button  onClick={onSubmit}>Login</button>
		<span>Don't have an account? <button onClick={() => navigateTo("/signup")}><a href="#">SignUp</a></button></span> 
	</div>
	</Fragment>);
}

export default LoginForm;