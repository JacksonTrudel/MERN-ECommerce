// User model
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    joined_date: {
        type: Date,
        deault: Date.now
    }
});

const User = mongoose.model('user', UserSchema);


export default User;