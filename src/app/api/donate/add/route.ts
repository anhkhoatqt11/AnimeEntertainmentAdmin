import prisma from "@/lib/prisma";
import DonatePackage from "@/model/donatepackages";
import mongoose from "mongoose";

export async function POST(req: Request) {
    const body = await req.json();

    const donates = await DonatePackage.updateMany(
        {},
        {
            $push: {
                donatepackagesCollection: {
                    donatepackagesId: new mongoose.Types.ObjectId(),
                    title: body.title,
                    subtitle: body.subtitle,
                    coin: body.coin,
                    mediaUrl: body.mediaUrl,
                    donateRecords: new mongoose.Types.Array(),
                },
            },
        },
        {
            //options
            returnNewDocument: true,
            new: true,
            strict: false,
        }
    );
    if (donates) {
        return new Response(JSON.stringify(donates), { status: 200 });
    }
}
