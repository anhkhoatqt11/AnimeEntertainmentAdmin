import prisma from "@/lib/prisma";
import AdvertisementModel from "../../../../model/advertisements";
export async function POST(req: Request) {
  const body = await req.json();
  const ad = await AdvertisementModel.create({
    ...body,
  });
  if (ad) {
    return new Response(JSON.stringify(ad), { status: 200 });
  }
}
