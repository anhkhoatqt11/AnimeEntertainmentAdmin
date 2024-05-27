import prisma from "@/lib/prisma";
import QuestionsModel from "@/model/questions";
import mongoose from "mongoose";

export async function POST(req: Request) {
    const body = await req.json();
    var question = await QuestionsModel.findById(body.questionId);
    if (!question) {
        return new Response(JSON.stringify(""), { status: 400 });
    }
    question.questionName = body.questionName;
    question.answers = body.answers;
    question.correctAnswerID = body.correctAnswerID;
    question.mediaUrl = body.mediaUrl;
    await question?.save();
    if (question) {
        return new Response(JSON.stringify(question), { status: 200 });
    }
}