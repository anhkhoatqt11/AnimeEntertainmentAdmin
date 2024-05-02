import React from "react";
import { Button } from "@/components/ui/button";
import { FileEditIcon } from "lucide-react";
import Link from "next/link";

export default function ChallengeItemCard({ item }) {
    return (
        <Link href={`/challenge/${item._id}`}>
        <div className="flex bg-white m-4 rounded-r-lg max-w-full">
                <div className="relative flex-1">
                    <img
                        alt="Question Image"
                        className="h-full rounded-l-lg object-cover transition-transform group-hover:scale-125 duration-300"
                        height="200"
                        src={item.mediaUrl}
                        style={{
                            aspectRatio: "400/200",
                            objectFit: "cover",
                        }}
                        width="1000"
                    />
                    {/* <Button className="absolute top-4 right-4 text-gray-900 dark:text-gray-50" variant="ghost">
                        <FileEditIcon className="h-5 w-5" />
                    </Button> */}
                </div>
                <div className="flex-1 space-y-4 p-6">
                    <h3 className="text-xl font-semibold">{item.questionName}</h3>
                    <div className="grid gap-2">
                        {item.answers.map((answer, index) => (
                            <Button
                                key={index}
                                className={`justify-start ${item.correctAnswerID === index ? 'bg-green-100' : ''
                                    }`}
                                variant="outline"
                            >
                                {answer.content}
                            </Button>
                        ))}
                    </div>
                </div>
        </div>
        </Link>
    );
}
