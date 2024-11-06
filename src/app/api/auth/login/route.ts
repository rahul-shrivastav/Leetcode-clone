import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { email, fullName } = await request.json();

        const existingVerifiedUserByUsername: any = await UserModel.findOne({ email });
        console.log(existingVerifiedUserByUsername)
        if (existingVerifiedUserByUsername) {
            return Response.json(existingVerifiedUserByUsername)
        }
        else {
            const newUser = new UserModel({ email, fullName });
            console.log(newUser, "nuser")
            try {
                await newUser.save();         
            } catch (error) {
                console.log('Error signing in database')
            }

            return Response.json(newUser);
        }

    }
    catch (error) {
        console.error('Error registering user:', error);
    };

};
