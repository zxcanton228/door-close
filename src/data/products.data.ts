export type TProduct = {
	id: number
	name: string
	price: number
	sale: number
	isHas: boolean
	img: string
}
export const products: TProduct[] = [{
	id: 1,
	name: "Дверной Замок Golden Soft для отеля",
	price: 37000,
	sale: 4000,
	isHas: true,
	img: "6.png"
},{
	id: 2,
	name: "Вариативный замок Golden Soft для отеля",
	price: 8000,
	sale: 1000,
	isHas: false,
	img: "7.png"
},{
	id: 3,
	name: "Дверной Замок Golden Soft для офиса",
	price: 39000,
	sale: 33000,
	isHas: true,
	img: "1.png"
},{
	id: 4,
	name: "Дверной Замок Golden Soft для офиса",
	price: 12000,
	sale: 9000,
	isHas: true,
	img: "8.png"
},]