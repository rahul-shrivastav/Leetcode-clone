import dbConnect from '@/utils/dbConnect';
import UserModel from '@/model/user';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, fullName, password } = await request.json();

        const existingVerifiedUserByUsername: any = await UserModel.findOne({ username });

        if (existingVerifiedUserByUsername) {
            return Response.json(
                {
                    success: false,
                    message: "Username is already taken",
                },
                { status: 400 }
            );
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new UserModel({
                username,
                fullName,
                password: hashedPassword
            });

            await newUser.save();
        };
    }
    catch (error) {
        console.error('Error registering user:', error);
        return Response.json(
            {
                "success": false,
                "message": 'Error registering user',
            },
            { status: 500 }
        );
    };

    return Response.json(
        {
            success: true,
            message: 'User registered successfully.Start Coding.',
        },
        { status: 201 }

    );
};
