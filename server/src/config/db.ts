import mongoose from 'mongoose';
import {Application} from 'express';
import keys from './keys';
const db = keys.mongoUrl;

const connectDB = async function (app: Application) {
    try {
        await mongoose.connect(
            db
        );

        console.log('MongoDB is connected');
    }
    catch (err: any) {
        console.log(`Could not connect to database: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;