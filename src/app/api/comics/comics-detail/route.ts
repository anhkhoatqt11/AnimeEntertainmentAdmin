import prisma from "@/lib/prisma";
import ComicsModel from "../../../../model/comics";
import { removeVietnameseTones } from "@/lib/utils";
import mongoose from "mongoose";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const comicId = searchParams.get("comicId");
  const comic = await ComicsModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(comicId || "") },
    },
    {
      $lookup: {
        from: "comicchapters",
        localField: "chapterList",
        foreignField: "_id",
        as: "detailChapterList",
      },
    },
  ]);

  return new Response(JSON.stringify(comic), { status: 200 });
}
