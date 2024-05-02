import prisma from "@/lib/prisma";
import QuestionsModel from "@/model/questions";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = parseInt(searchParams?.get("page"));
    const limit = parseInt(searchParams?.get("limit"));
    const searchWord = searchParams.get("name");
    const sort = parseInt(searchParams?.get("sort"));
    const questions = await QuestionsModel.aggregate([
        {
            $addFields: {
                result: {
                    $regexMatch: {
                        input: "$questionName",
                        regex: searchWord,
                        options: "i",
                    },
                },
            },
        },
        { $match: { result: true } },
        { $sort: { _id: sort } },
        { $skip: (page - 1) * limit },
        { $limit: limit },
    ])

    const countItem = await QuestionsModel.aggregate([
        {
            $addFields: {
                result: {
                    $regexMatch: {
                        input: "$questions",
                        regex: searchWord,
                        options: "i",
                    },
                },
            },
        },
        { $match: { result: true } },
        {
            $count: "total",
        },
    ]);

    const data = {
        data: questions,
        total: Math.ceil(countItem.length / limit),
        totalItems: questions.length,
    }

    return new Response(JSON.stringify(data), { status: 200 });
}