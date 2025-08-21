import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    fullName: string;
    email: string;
    battlewon: Number,
    eprobsolved: Number,
    hprobsolved: Number,
    mprobsolved: Number,
    totalattempted: Number,
    totalsolved: Number,
    totalunsolved: Number,
    questionsolved: Array<any>
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
        type: Number,
        default: 0
    },
    eprobsolved: {
        type: Number,
        default: 0

    },
    hprobsolved: {
        type: Number,
        default: 0

    },
    mprobsolved: {
        type: Number,
        default: 0

    },
    totalattempted: {
        type: Number,
        default: 0

    },
    totalsolved: {
        type: Number,
        default: 0

    },
    totalunsolved: {
        type: Number,
        default: 4

    },
    questionsolved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Problems',
            default: []
        }

    ]


});

const UserModel = (mongoose.models?.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;