import prisma from "@/lib/prisma";
import QuestionsModel from "@/model/questions";

export async function POST(req: Request) {
    const body = await req.json();
    const questionId = body.questionId;
    await QuestionsModel.findByIdAndDelete(questionId);
    return new Response(JSON.stringify({ message: "Success" }), {
        status: 200,
    });
}