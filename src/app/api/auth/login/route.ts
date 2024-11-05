import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { email, fullName } = await request.json();

        const existingVerifiedUserByUsername: any = await UserModel.findOne({ email });
        if (existingVerifiedUserByUsername) {
            return Response.json(existingVerifiedUserByUsername)
        }
        else {
            const newUser = new UserModel({ email, fullName });

            await newUser.save();

            return Response.json(newUser);
        }

    }
    catch (error) {
        console.error('Error registering user:', error);
    };

};
