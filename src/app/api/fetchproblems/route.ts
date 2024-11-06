import dbConnect from '@/utils/dbConnect';
import ProblemModel from '@/model/problems';

export async function GET(request: Request) {
    try {
        await dbConnect();
        const allProb: any = await ProblemModel.find({});
        if (allProb) {
            return Response.json({ allProb })
        }
    }
    catch (error) {
        console.error('Error Getting Problems:', error);
    };

};
