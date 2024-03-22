import prisma from '@/lib/prisma';


export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = parseInt(searchParams?.get('page')); // Retrieves the value of the 'skip' parameter
  const limit = parseInt(searchParams?.get('limit')); // Retrieves the value of the 'limit' parameter
  const searchWord = searchParams.get('name');



  const users = await prisma.animes.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      movieName: {
        contains: searchWord || '',
      },
    },
  });
  const countItem = await prisma.animes.count({
    where: {
      movieName: {
        contains: searchWord || '',
      },
    },
  });
  const data = {
    data: users,
    totalPages: Math.ceil(countItem / limit),
    totalItems: users.length,
  }

  return new Response(JSON.stringify(data), { status: 200 });
}