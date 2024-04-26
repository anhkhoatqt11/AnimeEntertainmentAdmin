import prisma from "@/lib/prisma";
import AdvertisementModel from "../../../../model/advertisements";
export async function POST(req: Request) {
  const body = await req.json();
  var ad = await AdvertisementModel.findById(body._id);
  if (!ad) {
    return new Response(JSON.stringify(""), { status: 400 });
  }

  ad.usedCount = ad.usedCount + body.value;
  await ad?.save();
  if (ad) {
    return new Response(JSON.stringify(ad), { status: 200 });
  }
}
