import prisma from "@/lib/prisma";
import AnimeEpisodesModel from "../../../../../model/animeepisodes";
export async function POST(req: Request) {
  const body = await req.json();
  const episode = await AnimeEpisodesModel.create({
    ...body,
  });
  if (episode) {
    return new Response(JSON.stringify(episode), { status: 200 });
  }
}
