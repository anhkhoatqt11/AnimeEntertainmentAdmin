import prisma from "@/lib/prisma";
import AnimesModel from "../../../../model/animes";
import AnimeEpisodesModel from "../../../../model/animeepisodes";
import mongoose from "mongoose";

export async function GET(request: Request) {
  const url = new URL(request.url);
  //   const searchParams = new URLSearchParams(url.search);

  //   const animeId = searchParams.get("animeId");
  //   const anime = await AnimesModel.aggregate([
  //     {
  //       $match: { _id: new mongoose.Types.ObjectId(animeId || "") },
  //     },
  //     {
  //       $lookup: {
  //         from: "animeepisodes",
  //         localField: "episodes",
  //         foreignField: "_id",
  //         as: "episodeList",
  //       },
  //     },
  //   ]);
  const episodes = await AnimesModel.aggregate([
    {
      $lookup: {
        from: "animeepisodes",
        localField: "episodes",
        foreignField: "_id",
        as: "episodeList",
      },
    },
    {
      $lookup: {
        from: "genres",
        localField: "genres",
        foreignField: "_id",
        as: "genreList",
      },
    },
    {
      $project: {
        _id: 1,
        coverImage: 1,
        landspaceImage: 1,
        movieName: 1,
        description: 1,
        genreList: 1,
        "episodeList._id": 1,
        "episodeList.coverImage": 1,
        "episodeList.episodeName": 1,
        "episodeList.advertisement": 1,
      },
    },
  ]);

  return new Response(JSON.stringify(episodes), { status: 200 });
}
