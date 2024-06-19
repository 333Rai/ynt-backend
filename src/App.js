import axios from 'axios';
import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Review from './components/review/Review';

const App = () => {
	const API_URI = 'http://13.53.171.221';
	// Review
	const [comment, setComment] = React.useState('');
	const [rating, setRating] = React.useState('');
	const [user, setUser] = React.useState('');

	// Login
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const commentHandler = ({ target }) => setComment(target.value);
	const ratingHandler = ({ target }) => setRating(target.value);
	const userHandler = ({ target }) => setUser(target.value);
	const submitHandler = async (event) => {
		event.preventDefault();
		const accessToken =
			JSON.parse(localStorage.getItem('accessToken')) || '';
		try {
			const { res } = await axios.post(
				`${API_URI}/review/`,
				{
					comment,
					rating,
					user,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};
	// Review
	// Login
	const emailHandler = ({ target }) => setEmail(target.value);
	const passwordHandler = ({ target }) => setPassword(target.value);
	const loginHandler = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axios.post(`${API_URI}/api/auth/login/`, {
				email,
				password,
			});
			localStorage.setItem('accessToken', JSON.stringify(data.access));
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	// Login
	return (
		<div>
			<Login
				onSubmit={loginHandler}
				inputHandlers={{ emailHandler, passwordHandler }}
			/>
			<Review
				onSubmit={submitHandler}
				inputHandlers={{ commentHandler, ratingHandler, userHandler }}
			/>
		</div>
	);
};

export default App;
