import DonatePackage from "@/model/donatepackages";


export async function POST(req: Request) {
    const body = await req.json();

    var donate = await DonatePackage.findById(body.packageId);

    if (!donate) {
        return new Response(JSON.stringify(""), { status: 400 });
    }

    donate.title = body.title;
    donate.subTitle = body.subtitle;
    donate.coverImage = body.coverImage,

    await donate?.save();

    return new Response(JSON.stringify(donate), { status: 200 });
}