import prisma from "@/lib/prisma";
import AnimeEpisodesModel from "../../../../../model/animeepisodes";
export async function POST(req: Request) {
  const body = await req.json();
  var episode = await AnimeEpisodesModel.findById(body._id);
  if (!episode) {
    return new Response(JSON.stringify(""), { status: 400 });
  }
  episode.coverImage = body.coverImage;
  episode.episodeName = body.episodeName;
  episode.totalTime = body.totalTime;
  episode.content = body.content;
  episode.advertisements = body.advertisement;
  await episode?.save();
  if (episode) {
    return new Response(JSON.stringify(episode), { status: 200 });
  }
}
