//import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';

const connectDB = async ()=> {
    await mongoose.connect('mongodb://vekjs:p131471483@cluster0-shard-00-00.yzzb4.mongodb.net:27017,cluster0-shard-00-01.yzzb4.mongodb.net:27017,cluster0-shard-00-02.yzzb4.mongodb.net:27017/db_notes?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
    console.log('MongoDb Connected');   
}

connectDB();