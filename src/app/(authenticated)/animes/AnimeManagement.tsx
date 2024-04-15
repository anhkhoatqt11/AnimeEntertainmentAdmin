"use client";

import React, { useState } from "react";
import SearchAndCreateBar from "./(components)/SearchCreateBar";
import AnimeList from "./(components)/AnimeList";

export function AnimeManagement() {
  const [searchWord, setSearchWord] = useState("");
  const [sort, setSort] = useState(-1);

  return (
    <>
      <SearchAndCreateBar setSearchWord={setSearchWord} setSort={setSort} />
      <AnimeList props={searchWord} sort={sort} />
    </>
  );
}
