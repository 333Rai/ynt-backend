import React from 'react';
import './Review.css';

const Review = ({ inputHandlers, onSubmit }) => {
	return (
		<div className='wrapper'>
			<form className='form' onSubmit={onSubmit}>
				<input
					className='form__input'
					placeholder='comment'
					type='text'
					onChange={inputHandlers.commentHandler}
				/>
				<input
					className='form__input'
					placeholder='rating'
					type='text'
					onChange={inputHandlers.ratingHandler}
				/>
				<input
					className='form__input form__input_user'
					placeholder='user'
					type='text'
					onChange={inputHandlers.userHandler}
				/>
				<button className='form__button'>Click</button>
			</form>
		</div>
	);
};

export default Review;
