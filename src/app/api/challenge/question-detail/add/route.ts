import prisma from '@/lib/prisma';
import QuestionModel from '@/model/questions';
import mongoose from 'mongoose';
export async function POST(req: Request){
    const body = await req.json();

    const question = await QuestionModel.create({
        questionName: body.questionName,
        answers: body.answers,
        correctAnswerID: body.correctAnswerID,
        mediaUrl: body.mediaUrl,
    });

    if (question) {
        return new Response(JSON.stringify(question), { status: 200 });
    }
}