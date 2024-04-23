import prisma from "@/lib/prisma";
import AdvertisementsModel from "../../../model/animeepisodes";
import mongoose from "mongoose";

export async function POST(request: Request) {
  const url = new URL(request.url);

  const Advertisements = await AdvertisementsModel.updateMany(
    {},
    {
      $set: {
        advertisement: new mongoose.Types.ObjectId("6625e11ee7249f20295e5240"),
      },
    },
    {
      //options
      returnNewDocument: true,
      new: true,
      strict: false,
    }
  );

  return new Response(JSON.stringify(Advertisements), { status: 200 });
}
