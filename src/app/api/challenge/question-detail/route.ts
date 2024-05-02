import QuestionsModel from "@/model/questions";
import mongoose from "mongoose";




export async function GET(request: Request){
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    const questionId = searchParams.get("questionId");
    const question = await QuestionsModel.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(questionId || "") },
        }
    ]);

    return new Response(JSON.stringify(question), { status: 200 });
}