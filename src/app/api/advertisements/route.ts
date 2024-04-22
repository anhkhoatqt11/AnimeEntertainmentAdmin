import prisma from "@/lib/prisma";
import AdvertisementModel from "../../../model/advertisements";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const genres = await AdvertisementModel.find();

  return new Response(JSON.stringify(genres), { status: 200 });
}
