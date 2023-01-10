const Contenedor = require('./Contenedor.js');

const products = new Contenedor('products.txt');

const test = async () => {
	const getall = await products.getAll();
	console.log({ getall });
	const save = await products.save({
	    title: 'product name',
		price: 'product price',
	 	thumbnail: 'url product photo',
        description: 'product description',
        code: Date.now(),
        stock: 'product stock'
	 });
	 console.log({ save });
	 const getProductById = await products.getById(1);
	 console.log({ getProductById });
	 const deleteProduct = await products.deleteProduct(1);
	 console.log({ deleteById });
	 const deleteAll = await products.deleteAll();
	 console.log({ deleteAll });
};

test();