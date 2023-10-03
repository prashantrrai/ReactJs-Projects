import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    // const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qgbxw3i.mongodb.net/?retryWrites=true&w=majority`

    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log("Heyy, its Error While connecting with the database",error.message);
    }
}

export default Connection;