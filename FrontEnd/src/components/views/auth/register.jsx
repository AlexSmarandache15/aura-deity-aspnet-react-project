import "./site.css"
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const RegisterForm = ({
    onUsernameChanged, onPasswordChanged, onSubmit
}) => {
    
	const navigateTo = useNavigate();

	return (<Fragment>	
	<div className="weather">	
	<div className="form-box">
		<div className="header-text">
			SignUp Form
		</div>
		<input placeholder="Email Address"  className="form-control" type="text" id="emailAdr"  onChange={onUsernameChanged}></input>
		<input placeholder="Enter Password"  className="form-control" type="password" onChange={onPasswordChanged}></input>
		<input id="terms" type="checkbox"></input>
		<label htmlFor="terms"></label><span>Agree with <a href="#">Terms and Conditions</a></span> 
		<button  onClick={onSubmit}>SignUp</button>
		<span>Aldready have an account? <button onClick={() => navigateTo("/login")}><a href="#">Login</a></button></span> 
	</div>
	</div>
	</Fragment>);
}

export default RegisterForm;