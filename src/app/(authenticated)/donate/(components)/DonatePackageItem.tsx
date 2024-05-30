import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from 'next/link';

const DonatePackageItem = ({ item }) => {
    return (
        <Link href={`donate/${item?._id}`}>
            <Card className="py-4 max-w-sm m-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{item.title}</h4>
                    <p className="text-tiny uppercase font-semibold">{item.subTitle}</p>
                    <p className="text-tiny uppercase font-semibold">COIN: {item.coin}</p>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <img
                        src={item.coverImage}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    ></img>
                </CardBody>
            </Card>
        </Link>
    )
}

export default DonatePackageItem