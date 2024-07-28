import mongoose, { Schema, Document } from 'mongoose';



export interface User extends Document {
    username: string;
    fullName: string;
    password: string;

}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
    },


});

const UserModel = (mongoose.models?.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;