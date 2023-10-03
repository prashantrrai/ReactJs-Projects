import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";


const DefaultData = async() => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data is imported Successfully');
    }catch (error) {
        console.log('Error while inserting deafult data',error.message);
    }
}

export default DefaultData;