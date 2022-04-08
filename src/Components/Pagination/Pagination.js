import './Pagination.css'

export const Pagination = ({
	productsLength,
	paginate,
	productsPerPage,
}) => {
	const pageNumbers = []

	for (
		let i = 1;
		i <= Math.ceil(productsLength / productsPerPage);
		i++
	) {
		pageNumbers.push(i)
	}

	console.log(pageNumbers)
	return (
		<nav className='pagination'>
			<ul className='pagination-nos d-flex'>
				{pageNumbers.map(number => (
					<li key={number} className='page-item'>
						<button
							onClick={() => paginate(number)}
							className='page-link text-dark fs-500'>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
