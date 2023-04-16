import { readable } from 'svelte/store';

const movies = readable([
{
	id: 1,
	name: 'OG',
	price: 299,
	portrait: '/assets/images/OG/portrait.jpg',
	landscape: '/assets/images/OG/landscape.jpg'
},
{
	id: 2,
	name: 'Pushpa 2',
	price: 249,
	portrait: '/assets/images/Pushpa 2/portrait.png',
	landscape: '/assets/images/Pushpa 2/landscape.jpg'
},
{
	id: 3,
	name: 'KGF 3',
	price: 579,
	portrait: '/assets/images/KGF 3/portrait.jpg',
	landscape: '/assets/images/KGF 3/landscape.webp'
},
{
	id: 4,
	name: 'Salaar',
	price: 199,
	portrait: '/assets/images/Salaar/portrait.jpg',
	landscape: '/assets/images/Salaar/landscape.jpg'
},
{
	id: 5,
	name: 'Project K',
	price: 239,	
	portrait: '/assets/images/Project K/portrait.jpg',
	landscape: '/assets/images/Project K/landscape.jpg'
},
{
	id: 6,
	name: 'NTR-31',
	price: 334,
	portrait: '/assets/images/NTR-31/portrait.jpg',
	landscape: '/assets/images/NTR-31/landscape.jpg'
},
{
	id: 7,
	name: 'Game Changer',
	price: 459,
	portrait: '/assets/images/Game Changer/portrait.jpg',
	landscape: '/assets/images/Game Changer/landscape.jpg'
},
{
	id: 8,
	name: 'Orange',
	price: 630,
	portrait: '/assets/images/Orange/portrait.jpg',
	landscape: '/assets/images/Orange/landscape.jpg'
}
])

export { movies };
