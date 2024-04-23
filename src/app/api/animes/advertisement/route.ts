import prisma from "@/lib/prisma";
import AdvertisementsModel from "../../../../model/advertisements";

export async function GET(request: Request) {
  const ad = await AdvertisementsModel.aggregate([
    {
      $lookup: {
        from: "animeepisodes",
        localField: "_id",
        foreignField: "advertisement",
        as: "episodeOwner",
      },
    },
    {
      $addFields: {
        usedCount: { $size: "$episodeOwner" },
      },
    },
    {
      $project: {
        episodeOwner: 0,
      },
    },
  ]);

  return new Response(JSON.stringify(ad), { status: 200 });
}
