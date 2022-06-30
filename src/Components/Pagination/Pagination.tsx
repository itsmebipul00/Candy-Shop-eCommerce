import './Pagination.css'
import { usePaginate } from '../../Hooks/usePaginate'

export const Pagination = () => {
	const [pageNumbers, setthisPage] = usePaginate()

	return (
		<nav className='pagination'>
			<ul className='pagination-nos d-flex'>
				{pageNumbers?.map(number => (
					<li key={number} className='page-item'>
						<button
							onClick={() => setthisPage(number)}
							className='page-link text-dark fs-500'>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
