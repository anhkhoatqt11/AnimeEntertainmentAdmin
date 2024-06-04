import AdvertisementsPortalHistory from "@/model/advertisementsportalhistories";

export async function POST(req: Request) {
    const body = await req.json();

    console.log(body);

    const data = await AdvertisementsPortalHistory.create({
        userId: body.userId,
        orderDate: body.orderDate,
        paymentMethod: body.paymentMethod,
        status: body.status,
        price: body.price,
        videoUrl: body.videoUrl,
        linkUrl: body.linkUrl,
        episodeList: body.episodeList,
    });

    if (data) {
        return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
    }
}