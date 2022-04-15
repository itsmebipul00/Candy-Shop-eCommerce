import './Rating.css'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'

const fillColor = 'goldenrod'

const BsStarFilled = () => <BsStarFill fill={fillColor} />
const BsStarHalfed = () => <BsStarHalf fill={fillColor} />
const BsStared = () => <BsStar />

export const Rating = ({ value }) => {
	console.log(value)
	return (
		<span className='rating'>
			{value >= 1 ? (
				<BsStarFilled />
			) : value >= 0.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			)}
			{value >= 2 ? (
				<BsStarFilled />
			) : value >= 1.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			)}
			{value >= 3 ? (
				<BsStarFilled />
			) : value >= 2.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			)}
			{value >= 4 ? (
				<BsStarFilled />
			) : value >= 3.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			)}
			{value >= 5 ? (
				<BsStarFilled />
			) : value >= 4.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			)}
		</span>
	)
}
