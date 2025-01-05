import mongoose, { Schema, Document } from 'mongoose';

export interface Problem extends Document {
    name: string;
    difficulty: string;
    description: string;
    eoutputs: string;
    tcases: string;
}

// Updated User schema
const ProblemSchema: Schema<Problem> = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of problem is required'],
        trim: true,
        unique: true,
    },
    difficulty: {
        type: String,
        required: true,

    },

    description: {
        type: String,
        required: true,
    },
    eoutputs: {
        type: String,
        required: true,
    },
    tcases: {
        type: String,
        required: true,
    }


});

const ProblemModel = (mongoose.models?.Problem as mongoose.Model<Problem>) || mongoose.model<Problem>('Problem', ProblemSchema);
export default ProblemModel;