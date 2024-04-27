import prisma from "@/lib/prisma";
import AnimeEpisodesModel from "../../../../../model/animeepisodes";
import AdvertisementModel from "../../../../../model/advertisements";
export async function POST(req: Request) {
  const body = await req.json();
  const episodeId = body.episodeId;
  const advertisementId = body.advertisementId;
  var ad = await AdvertisementModel.findById(advertisementId);
  if (!ad) {
    return new Response(JSON.stringify(""), { status: 400 });
  }
  ad.usedCount = ad.usedCount + 1;
  await ad?.save();
  await AnimeEpisodesModel.findByIdAndDelete(episodeId);
  return new Response(JSON.stringify({ message: "Success" }), {
    status: 200,
  });
}
