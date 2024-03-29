"use client";

import React from 'react'
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';
import { useAnimes } from '@/hooks/useAnimes';
import Loader from '@/components/Loader';

export function AnimeDetail({ id }) {

    const [isLoading, setIsLoading] = React.useState(false);
    const { fetchAnimeById } = useAnimes();

    const { data: AnimeDetail } = useQuery({
        queryKey: ['AnimeDetail', id],
        queryFn: async () => {
            const res = await fetchAnimeById(id);
            setIsLoading(true);
            console.log(res?.[0]);
            return res?.[0];
        }
    })

    return (
        <div>
            <div>
                {!isLoading ? (
                    <div className="flex h-screen items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-6">
                            <div className="grid gap-2 sm:gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Cover"
                                        className="aspect-[3/4] rounded-lg object-cover border w-48"
                                        height={600}
                                        src={AnimeDetail?.coverImage}
                                        width={500}
                                    />
                                    <div className="grid gap-1.5">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="grid gap-0.5">
                                                <Label className="text-sm" htmlFor="name">
                                                    Name
                                                </Label>
                                                <div>{AnimeDetail?.movieName}</div>
                                            </div>
                                            <div className="grid gap-0.5">
                                                <Label className="text-sm" htmlFor="age">
                                                    Age rating
                                                </Label>
                                                <div>{AnimeDetail?.ageFor}</div>
                                            </div>
                                        </div>
                                        <div className="grid gap-0.5">
                                            <Label className="text-sm" htmlFor="description">
                                                Description
                                            </Label>
                                            <div>
                                                {AnimeDetail?.description}
                                            </div>
                                        </div>
                                        <div className="grid gap-0.5">
                                            <Label className="text-sm" htmlFor="genres">
                                                Genres
                                            </Label>
                                            <div></div>
                                        </div>
                                        <div className="grid gap-0.5">
                                            <Label className="text-sm" htmlFor="publisher">
                                                Publisher
                                            </Label>
                                            <div>{AnimeDetail.publisher}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-0.5">
                                    <Label className="text-sm" htmlFor="episodes">
                                        Episodes
                                    </Label>
                                    <div className="border rounded-lg overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b bg-gray-50 dark:bg-gray-800">
                                                    <th className="p-2 text-left">Episode</th>
                                                    <th className="p-2 text-left">Title</th>
                                                    <th className="p-2 text-left">Duration</th>
                                                    <th className="p-2 text-left">Publish Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b dark:bg-gray-900">
                                                    <td className="p-2">1</td>
                                                    <td className="p-2">Welcome to the Matrix</td>
                                                    <td className="p-2">60m</td>
                                                    <td className="p-2">2022-08-01 20:00</td>
                                                </tr>
                                                <tr className="border-b dark:bg-gray-900">
                                                    <td className="p-2">2</td>
                                                    <td className="p-2">Red Pill, Blue Pill</td>
                                                    <td className="p-2">45m</td>
                                                    <td className="p-2">2022-08-08 20:00</td>
                                                </tr>
                                                <tr className="border-b dark:bg-gray-900">
                                                    <td className="p-2">3</td>
                                                    <td className="p-2">Agent Smith</td>
                                                    <td className="p-2">50m</td>
                                                    <td className="p-2">2022-08-15 20:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
