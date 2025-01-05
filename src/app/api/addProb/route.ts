import dbConnect from '@/utils/dbConnect';
import ProblemModel from '@/model/problems';

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { name, difficulty, description, eoutputs, tcases } = await request.json();

        const newProb = new ProblemModel({
            name,
            difficulty,
            description,
            tcases,
            eoutputs
        });

        await newProb.save();

    }
    catch (error) {
        console.error('Error registering question:', error);
        return Response.json(
            {
                "success": false,   
                "message": 'Error registering Problem',
            },
            { status: 500 }
        );
    };

    return Response.json(
        {
            success: true,
            message: 'Problem registered successfully.Start Coding.',
        },
        { status: 201 }

    );
};
