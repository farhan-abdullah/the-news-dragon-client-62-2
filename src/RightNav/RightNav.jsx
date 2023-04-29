import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../pages/QZone/QZone';
import bg from '../assets/bg.png';
const RightNav = () => {
	return (
		<div>
			<h4>Login with</h4>
			<Button className='mb2' variant='outline-primary'>
				<FaGoogle />
				Login with Google
			</Button>

			<Button variant='outline-secondary'>
				<FaGithub />
				Login with Github
			</Button>
			<div>
				<h4>Find us on</h4>
				<ListGroup>
					<ListGroup.Item>
						<FaFacebook className='me-2' />
						Facebook
					</ListGroup.Item>
					<ListGroup.Item>
						<FaTwitter className='me-2' />
						Twitter
					</ListGroup.Item>
					<ListGroup.Item>
						<FaInstagram className='me-2' />
						Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone></QZone>
			<div>
				<img src={bg} alt='' />
			</div>
		</div>
	);
};

export default RightNav;
