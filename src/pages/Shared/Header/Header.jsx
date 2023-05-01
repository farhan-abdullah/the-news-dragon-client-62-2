// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<Container>
			<div className='text-center'>
				<img src={logo} alt='' />
				<p className='text-secondary'>
					<small>Journalism Without Fear or Favour</small>
				</p>
				<small>{moment().format('dddd, MMMM D YYYY')}</small>
			</div>
			<div className='d-flex'>
				<Button variant='danger'>Latest</Button>

				<Marquee className='text-danger' speed={100}>
					I can be a React component, multiple React components, or just some text.
				</Marquee>
			</div>

			<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mx-auto'>
							<Nav.Link href='#features'>
								<Link to={'/'}>Home</Link>
							</Nav.Link>
							<Nav.Link href='#pricing'>
								<Link to={'/'}>About</Link>
							</Nav.Link>
							<Nav.Link href='#pricing'>
								<Link to={'/'}>Carer</Link>
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='#deets'>Profile</Nav.Link>
							<Nav.Link eventKey={2} href='#memes'>
								{user ? (
									<Button variant='secondary'>Logout</Button>
								) : (
									<Link to='/login'>
										<Button variant='secondary'>Login</Button>
									</Link>
								)}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
