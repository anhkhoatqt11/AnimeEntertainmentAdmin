import prisma from "@/lib/prisma";
import Animes from "../../../../../model/animes";
import AnimeEpisodes from "../../../../../model/animeepisodes";
export async function POST(req: Request) {
  const body = await req.json();
  const animeId = body.animeId;
  await Animes.findByIdAndDelete(animeId);
  return new Response(JSON.stringify({ message: "Success" }), {
    status: 200,
  });
}