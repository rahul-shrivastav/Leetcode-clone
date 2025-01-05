import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { email } = await request.json();

        const existingVerifiedUserByUsername: any = await UserModel.findOneAndUpdate({ email }, { $inc: { hprobsolved: 1, totalattempted: 1, totalsolved: 1, totalunsolved: -1 }, }, { new: true });

        return Response.json(existingVerifiedUserByUsername)

    }
    catch (error) {
        return Response.json({});
    };

};
