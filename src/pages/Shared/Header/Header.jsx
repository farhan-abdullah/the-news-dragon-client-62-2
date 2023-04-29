import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
	return (
		<div>
			<div className='text-center'>
				<img src={logo} alt='' />
				<p className='text-secondary'>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<small>{moment().format('dddd, MMMM D YYYY')}</small>
			</div>
		</div>
	);
};

export default Header;
