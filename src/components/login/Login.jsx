import React from 'react';
import './Login.css';

const Login = ({ onSubmit, inputHandlers }) => {
	return (
		<div className='wrapper'>
			<form className='form' onSubmit={onSubmit}>
				<input
					className='form__input'
					onChange={inputHandlers.emailHandler}
					placeholder='email...'
					type='email'
				/>
				<input
					className='form__input'
					onChange={inputHandlers.passwordHandler}
					placeholder='password...'
					type='password'
				/>
				<button className='form__button'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
