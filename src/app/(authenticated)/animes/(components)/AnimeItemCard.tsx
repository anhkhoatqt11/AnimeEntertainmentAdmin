import React from 'react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function AnimeItemCard({ item }) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden group hover:scale-105 shadow-lg bg-transparent border border-gray-50">
            <Link href={`animes/${item?.id}`}>
                <img
                    alt="Cover"
                    className="aspect-video object-cover w-full"
                    src={item.landspaceImage}
                    width={500}
                    height={560}
                />
                <span className="sr-only">View</span>
            </Link>
            <div className="flex-1 border-t p-4 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-semibold text-lg truncate">{item.movieName}</h3>
                    <Badge>{item.ageFor}</Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-5">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400">Genre: {item.genres}</p> */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">Publisher: {item.publisher}</p>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400">Episodes: {item.episodes}</p> */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">Publish Time: {item.publishTime}</p>
                </div>
            </div>
        </div>
    )
}
