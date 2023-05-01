import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment/moment';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
	const { _id, title, details, image_url, author, total_view, rating } = news;
	return (
		<Card className='mb-3'>
			<Card.Header className='d-flex gap-3 align-items-center'>
				<div>
					<Image style={{ width: '40px' }} src={author?.img} roundedCircle></Image>
				</div>
				<div className='flex-grow-1'>
					<h5>{author?.name}</h5>
					<small>{moment(author?.published_date).format('yyyy-mm-d')}</small>
				</div>
				<div className='d-flex'>
					<FaRegBookmark /> <FaShareAlt />
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Img variant='top' src={image_url} />
				<Card.Text>
					{details.length < 250 ? (
						<> details</>
					) : (
						<>
							{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link>
						</>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className='text-muted d-flex align-items-center'>
				<div className='flex-grow-1'>
					<Rating
						className='me-2'
						readonly
						placeholderRating={rating.number}
						emptySymbol={<FaRegStar />}
						placeholderSymbol={<FaStar className='text-warning' />}
						fullSymbol={<FaStar />}
					/>

					<span>{rating?.number}</span>
				</div>
				<div>
					<FaEye className='me-1' />
					{total_view}
				</div>
			</Card.Footer>
		</Card>
	);
};

export default NewsCard;
