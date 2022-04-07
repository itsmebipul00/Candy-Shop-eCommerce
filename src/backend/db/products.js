import { v4 as uuid } from 'uuid'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: 'beeb7943-ccbb-466d-b711-f56910a41cae',
		title: 'Marshmallows',
		image: '/images/Pink-White-Marshmallows.webp',
		price: '180',
		categoryName: 'marshmello',
		countInStock: 2,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'b2c3f463-b875-4f2e-92b0-88ee9001c52e',
		title: 'Marshmallows',
		image: '/images/Pink-White-Marshmallows.webp',
		price: '180',
		categoryName: 'marshmello',
		countInStock: 2,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '3a0cb883-566d-428e-82f7-aa8df2ff361f',
		title: 'Choco-Vanilla Fudge',
		image: '/images/CHOCOVANILLAFUDGE.webp',
		price: '120',
		categoryName: 'chocolates',
		countInStock: 8,
		rating: 4.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '2ab96b05-a8cb-4a68-9b7c-88af5afc08f3',
		title: 'Choco-Vanilla Fudge',
		image: '/images/CHOCOVANILLAFUDGE.webp',
		price: '120',
		categoryName: 'chocolates',
		countInStock: 8,
		rating: 4.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'f7e41c27-702c-40a0-9225-4a896c0467ae',
		title: 'Dark-Choco Almonds',
		image: '/images/Dark-Chocolate-Almonds.webp',
		price: '90',
		categoryName: 'darkChocolate',
		countInStock: 7,
		rating: 2.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '2f5fd373-baa2-4f49-adf9-2c48972f23dd',
		title: 'Dark-Choco Almonds',
		image: '/images/Dark-Chocolate-Almonds.webp',
		price: '90',
		categoryName: 'darkChocolate',
		countInStock: 7,
		rating: 2.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '60fff90d-c3f8-4de6-8189-4daae210744f',
		title: 'Fizzy-Cola Bottle',
		image: '/images/Fizzycolabottle.webp',
		price: '40',
		categoryName: 'fizzy',
		countInStock: 4,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '9b2473f8-daa3-4054-b549-d93959b5dfae',
		title: 'Fizzy-Cola Bottle',
		image: '/images/Fizzycolabottle.webp',
		price: '40',
		categoryName: 'fizzy',
		countInStock: 4,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '7bf9272d-b8da-4c05-b87a-d78a4d82fee5',
		title: 'Gummybears',
		image: '/images/Gummybears.webp',
		price: '100',
		categoryName: 'gummies',
		countInStock: 4,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '68f81544-96a3-45bf-81ed-aedd85da1dff',
		title: 'Gummybears',
		image: '/images/Gummybears.webp',
		price: '100',
		categoryName: 'gummies',
		countInStock: 4,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '44cd7dcb-3e86-498f-bf9e-50315058b78e',
		title: 'Jellysnakes',
		image: '/images/Jellysnakes.webp',
		price: '90',
		categoryName: 'jellies',
		countInStock: 7,
		rating: 4,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '9cf465a1-f131-4c81-a23f-44087b108314',
		title: 'Jellysnakes',
		image: '/images/Jellysnakes.webp',
		price: '90',
		categoryName: 'jellies',
		countInStock: 7,
		rating: 4,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'dcc0f7b9-158f-4025-9ef7-19ba2ae2911e',
		title: 'WaterMelon Lollipop',
		image: '/images/Whoa-ter-Melon-Lollipop.webp',
		price: '70',
		categoryName: 'lollipops',
		countInStock: 5,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '76ce46b0-8a55-4ee4-9ccd-8fc0b1839bcc',
		title: 'WaterMelon Lollipop',
		image: '/images/Whoa-ter-Melon-Lollipop.webp',
		price: '70',
		categoryName: 'lollipops',
		countInStock: 5,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'e527a784-fd40-4a6e-8643-3764b99916e3',
		title: 'Raspberry blast',
		image: '/images/Raspberry_blast.webp',
		price: '110',
		categoryName: 'rasberry',
		countInStock: 5,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'cb73bb42-db5a-40a5-9ec3-e9c7178f6996',
		title: 'Raspberry blast',
		image: '/images/Raspberry_blast.webp',
		price: '110',
		categoryName: 'rasberry',
		countInStock: 5,
		rating: 5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'cf1974a3-95ea-4ba5-8b31-acfa18fce96d',
		title: 'Rainbow Bites',
		image: '/images/RainbowBites.webp',
		price: '120',
		categoryName: 'fizzy',
		countInStock: 6,
		rating: 4.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: 'de0f54c9-29ac-478b-b540-5dd8603d8b30',
		title: 'Rainbow Bites',
		image: '/images/RainbowBites.webp',
		price: '120',
		categoryName: 'fizzy',
		countInStock: 6,
		rating: 4.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '3b5f4806-19fd-4e6c-ba49-d9d06072f738',
		title: 'Fizzy Peaches',
		image: '/images/FizzyPeaches.webp',
		price: '130',
		categoryName: 'fizzy',
		countInStock: 3,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
	{
		_id: '3b5f4806-19fd-4e6c-ba49-d9d06072f738',
		title: 'Fizzy Peaches',
		image: '/images/FizzyPeaches.webp',
		price: '130',
		categoryName: 'fizzy',
		countInStock: 3,
		rating: 3.5,
		description:
			'Fusce feugiat, tellus at tempus aliquam, arcu massa scelerisque justo, vel vulputate enim justo eget ante. Proin vestibulum vehicula rhoncus.',
	},
]
