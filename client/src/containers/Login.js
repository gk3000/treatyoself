import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../config';

const Login = (props) => {
	const [ form, setValues ] = useState({
		email: '',
		password: '',
	});
	const [ message, setMessage ] = useState('');
	const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${URL}/admin/login`, {
				email: form.email,
				password: form.password
			});

			setMessage(response.data.message);

			if (response.data.ok) {
				setTimeout(() => {
					props.login(response.data.token);
					props.history.push('/secret-page');
				}, 2000);
			}
		} catch (error) {
			// console.log(error);
		}
	};
	return (<>
	
		<form onSubmit={handleSubmit} onChange={handleChange} className="form_container shortComp">
			<h1>Login here:</h1>
			<label>Email</label>
			<input name="email" />
			<label>Password</label>
			<input name="password" type='password' />
			<button>login</button>
			<div className="message">
				<h4>{message}</h4>
			</div>
		</form>
		</>
	);
};

export default Login;
