import prisma from "@/lib/prisma";
import GenresModel from "../../../model/genres";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const genres = await GenresModel.find();

  return new Response(JSON.stringify(genres), { status: 200 });
}
