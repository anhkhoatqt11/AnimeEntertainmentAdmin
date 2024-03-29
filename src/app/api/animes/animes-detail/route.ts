import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get('id');

    const event = await prisma.animes.findMany({
        where: {
            id: {
                equals: id
            }
        },
    })
    if (!event)
        return new Response(JSON.stringify({ message: 'Không tìm thấy dữ liệu' }), {
            status: 404,
        });
    return new Response(JSON.stringify(event), { status: 200 });
}