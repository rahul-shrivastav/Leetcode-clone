import dbConnect from '@/utils/dbConnect';
import ProblemModel from '@/model/problems';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { id } = await request.json();
        console.log(id)
        const Prob: any = await ProblemModel.find({ _id: id });
        setTimeout(() => {

        }, 5000);
        return Response.json(Prob)
    }
    catch (error) {
        return Response.json({})
    };
};
