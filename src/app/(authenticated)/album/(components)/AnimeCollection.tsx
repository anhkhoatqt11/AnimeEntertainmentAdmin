"use client";

import React, { useEffect, useState } from "react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
// import { OurFileRouter } from "@/app/api/uploadthing/core";
import { FileDialog } from "@/components/ui/FileDialog";
import { ImageList } from "@/components/ui/ImageList";
import { Button } from "@/components/ui/button";
import DialogCustom from "@/components/ui/dialogCustom";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import {
  CheckboxGroup,
  Input,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { url } from "inspector";
import { Zoom } from "@/components/ui/zoom-image";
import { DatePicker } from "@/components/ui/date-picker";
import { FileWithPath } from "react-dropzone";
import { useGenres } from "@/hooks/useGenres";
import { CustomCheckbox } from "@/components/ui/CustomCheckBox";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AnimeItem from "./AnimeItem";
import { BiBookAdd } from "react-icons/bi";
import { useRouter } from "next/navigation";

function AnimeCollection({ animeAlbumList }) {
  //   const ageList = [
  //     "10+",
  //     "11+",
  //     "12+",
  //     "13+",
  //     "14+",
  //     "15+",
  //     "16+",
  //     "17+",
  //     "18+",
  //   ];
  //   const [genreList, setGenreList] = useState([]);
  //   const { fetchAllGenres } = useGenres();
  //   useEffect(() => {
  //     const getAllGenres = async () => {
  //       props.setIsLoading(true);
  //       await fetchAllGenres().then((res) => {
  //         setGenreList(res);
  //         props.setIsLoading(false);
  //       });
  //     };
  //     getAllGenres();
  //   }, []);
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };
  const router = useRouter();
  return (
    <div className="grid-cols-1 grid gap-4 mb-6">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between items-end p-4 pb-0">
        <h1 className="font-semibold text-xl">Bộ sưu tập phim anime</h1>
        <Button
          className={`h-[50px] w-full md:w-[200px] rounded-md m-0 p-0 font-medium shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 transition ease-in-out hover:scale-105 text-sm text-white`}
          onClick={() => {
            router.push("/animes/addNewAnime");
          }}
        >
          <BiBookAdd className="mr-2" />
          Tạo album mới
        </Button>
      </div>
      <div className="rounded bg-white m-4 p-4 mt-0">
        <Accordion
          showDivider={false}
          className="p-2 flex flex-col gap-1 w-full"
          variant="shadow"
          itemClasses={itemClasses}
        >
          {animeAlbumList.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.albumName}
              title={item.albumName}
              isCompact
            >
              <div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {item?.list.map((item) => (
                    <AnimeItem item={item} key={`anime-${item.id}`} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Button
                    className={`w-full bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white  transition ease-in-out duration-500 font-medium py-6 text-sm`}
                    onClick={() => {}}
                  >
                    Sửa album
                  </Button>
                  <Button
                    className={`w-full bg-red-400 border-2 border-red-400 text-white hover:scale-[1.01] hover:border-black transition ease-in-out duration-500 font-medium py-6 text-sm`}
                    onClick={() => {}}
                  >
                    Xóa album
                  </Button>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default AnimeCollection;
