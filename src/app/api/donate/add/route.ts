import prisma from "@/lib/prisma";
import DonatePackage from "@/model/donatepackages";
import mongoose from "mongoose";

export async function POST(req: Request) {
    const body = await req.json();

    const donates = DonatePackage.create({
        title: body.title,
        subTitle: body.subtitle,
        coin: body.coin,
        coverImage: body.coverImage,
        donateRecords: new mongoose.Types.Array(),
    })

    if (donates) {
        return new Response(JSON.stringify(donates), { status: 200 });
    }
}
