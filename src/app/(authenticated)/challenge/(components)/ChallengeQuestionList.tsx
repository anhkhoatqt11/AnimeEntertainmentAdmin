"use client";

import Loader from "@/components/Loader";
import { useChallenge } from "@/hooks/useChallenge";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ChallengeItemCard from "./ChallengeItemCard";
import { Pagination } from "@nextui-org/react";

function ChallengeQuestionList({ props, sort, isLoaded, setIsLoaded }) {

    const [currentPage, setCurrentPage] = useState(1);

    const { fetchAllQuestions } = useChallenge();

    const { data, refetch } = useQuery({
        queryKey: [
            ["questions", currentPage],
            ["name", props],
            ["sort", sort],
        ],
        queryFn: () => fetchAllQuestions(props, sort, currentPage),
        staleTime: 60 * 1000 * 1,
        keepPreviousData: true,
        onSuccess: () => {
            setIsLoaded(true);
        },
    });


    const onPageChange = (page) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setCurrentPage(page);
    }

    useEffect(() => {
        refetch();
    }, []);


    return (
        <div>
            {!isLoaded ? (
                <div className="flex h-screen items-center justify-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="w-full p-4 grid grid-cols-1 gap-2">
                        {data?.data.map((item) => (
                            <ChallengeItemCard item={item} key={`question-${item.id}`} />
                        ))}
                    </div>
                    <div className="flex justify-center pb-5">
                        <Pagination
                            color="primary"
                            showControls
                            total={data?.totalPages}
                            initialPage={1}
                            onChange={(page) => {
                                onPageChange(page);
                            }}
                            page={currentPage}
                        />
                    </div>
                </>
            )}
        </div>
    )

}

export default ChallengeQuestionList;