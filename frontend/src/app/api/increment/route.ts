import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { uid, pid, ptype } = await request.json();
        // console.log(uid, pid, ptype)
        const user: any = await UserModel.findById(
            { _id: uid },
        );
        console.log("api called ___")
        if (!pid) {
            user.totalattempted = user.totalattempted + 1
            // console.log(user)
            await user.save()
            return Response.json(user)
        }

        user.questionsolved.push(pid)
        user.totalattempted = user.totalattempted + 1
        user.totalsolved = user.totalsolved + 1
        user.totalunsolved = user.totalunsolved - 1

        //@ts-ignore
        if (ptype === 'Easy') {
            user.eprobsolved = user.eprobsolved + 1
        }
        //@ts-ignore
        else if (ptype === 'Medium') {
            user.mprobsolved = user.mprobsolved + 1
        }
        //@ts-ignore
        else if (ptype === 'Hard') {
            user.hprobsolved = user.hprobsolved + 1
        }


        // console.log(user)
        await user.save();
        return Response.json(user)
    }
    catch (error) {
        // console.log(error)
        return Response.json({});
    };

};
