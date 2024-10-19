import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { email } = await request.json();

        const existingVerifiedUserByUsername: any = await UserModel.findOne({ email });
        if (existingVerifiedUserByUsername) {
            return Response.json(existingVerifiedUserByUsername)
        }
        else {
            return Response.json(
                {
                    success: false,
                    message: "Username is already taken",
                },
                { status: 400 }
            );
        }

    }
    catch (error) {
        console.error('Error registering user:', error);
    };

};
