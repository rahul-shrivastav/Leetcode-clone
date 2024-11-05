import mongoose, { Schema, Document } from 'mongoose';



export interface User extends Document {
    fullName: string;
    email: string;
    battlewon: string,
    eprobsolved: string,
    hprobsolved: string,
    mprobsolved: string,
    totalattempted: string,
    totalsolved: string,
    totalunsolved: string,
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    battlewon: {
        type: String,
        default: '0'
    },
    eprobsolved: {
        type: String,
        default: '0'

    },
    hprobsolved: {
        type: String,
        default: '0'

    },
    mprobsolved: {
        type: String,
        default: '0'

    },
    totalattempted: {
        type: String,
        default: '0'

    },
    totalsolved: {
        type: String,
        default: '0'

    },
    totalunsolved: {
        type: String,
        default: '0'

    },


});

const UserModel = (mongoose.models?.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;