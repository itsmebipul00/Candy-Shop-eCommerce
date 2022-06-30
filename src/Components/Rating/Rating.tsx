import './Rating.css'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'

const fillColor = 'goldenrod'

const BsStarFilled = () => <BsStarFill fill={fillColor} />
const BsStarHalfed = () => <BsStarHalf fill={fillColor} />
const BsStared = () => <BsStar />

export const Rating = (props:{value?:number}) => {
	const {value}= props
	return (
		<div className='rating'>
			{value && (value >= 1 ? (
				<BsStarFilled />
			) : value >= 0.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			))}
			{value && (value >= 2 ? (
				<BsStarFilled />
			) : value >= 1.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			))}
			{value && (value >= 3 ? (
				<BsStarFilled />
			) : value >= 2.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			))}
			{value && (value >= 4 ? (
				<BsStarFilled />
			) : value >= 3.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			))}
			{value && (value >= 5 ? (
				<BsStarFilled />
			) : value >= 4.5 ? (
				<BsStarHalfed />
			) : (
				<BsStared />
			))}
		</div>
	)
}
