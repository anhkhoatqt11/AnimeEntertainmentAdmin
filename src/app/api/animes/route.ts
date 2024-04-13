import prisma from "@/lib/prisma";
import AnimesModel from "../../../model/animes";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = parseInt(searchParams?.get("page")); // Retrieves the value of the 'skip' parameter
  const limit = parseInt(searchParams?.get("limit")); // Retrieves the value of the 'limit' parameter
  const searchWord = searchParams.get("name");

  const animes = await AnimesModel.aggregate([
    { $skip: (page - 1) * limit },
    { $limit: limit },
  ]);
  const countItem = await AnimesModel.countDocuments();

  const data = {
    data: animes,
    totalPages: Math.ceil(countItem / limit),
    totalItems: animes.length,
  };

  return new Response(JSON.stringify(data), { status: 200 });
}
