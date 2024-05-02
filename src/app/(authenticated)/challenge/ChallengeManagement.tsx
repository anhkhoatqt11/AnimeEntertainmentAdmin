"use client";

import { useState } from "react";
import ChallengeQuestionList from "./(components)/ChallengeQuestionList";
import {SearchAndActionBar} from "./(components)/SearchAndActionBar";
import React from "react";

export function ChallengeManagement() {

    const [searchWord, setSearchWord] = useState("");
    const [sort, setSort] = useState(1);
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <>
            <SearchAndActionBar setSearchWord={setSearchWord} setSort={setSort} setIsLoaded={setIsLoaded} />
            <ChallengeQuestionList
                props={searchWord}
                sort={sort}
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
            />
        </>
    )
}