"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  Avatar,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import { BiBookAdd } from "react-icons/bi";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { AlbumCheckbox } from "@/components/ui/AlbumCheckbox";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { MdHistory } from "react-icons/md";
import { Label } from "@/components/ui/label";

function AnimeEpisodeListComponent({
  animeEpisodeList,
  setAnimeEpisodeList,
  groupSelected,
  setGroupSelected,
  setSearchKey,
  searchSubmit,
  videoUrl,
  setVideoUrl,
  linkUrl,
  setLinkUrl,
}) {
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
    <>
      <div className="grid-cols-1 grid gap-4">
        <Toaster />
        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center p-4 pb-0">
          <h1 className="font-semibold text-xl">Đặt quảng cáo</h1>
          <div className="flex flex-row items-center">
            <Button
              className={`h-[50px] w-full md:w-[200px] rounded-md m-0 p-0 font-medium shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 transition ease-in-out hover:scale-105 text-sm text-white`}
              onClick={() => {}}
            >
              <MdHistory className="mr-2" />
              Xem lịch sử đặt
            </Button>
          </div>
        </div>
        <div className="rounded bg-white m-4 p-4 mt-0">
          <div className="gap-6 mb-4">
            <div className="flex flex-col gap-3 w-full">
              <Label className="font-bold text-sm">
                Url video quảng cáo: <span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full"
                radius="sm"
                variant="bordered"
                size="md"
                value={videoUrl}
                placeholder="Nhập url video"
                onChange={(e) => {
                  setVideoUrl(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="gap-6 mb-4">
            <div className="flex flex-col gap-3 w-full">
              <Label className="font-bold text-sm">
                Url trang chuyển tiếp: <span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full"
                radius="sm"
                variant="bordered"
                size="md"
                value={linkUrl}
                placeholder="Nhập url trang chuyển tiếp"
                onChange={(e) => {
                  setLinkUrl(e.target.value);
                }}
              />
            </div>
          </div>
          <Label className="font-bold text-sm">
            Chọn tập phim: <span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-row items-center mb-4 mt-3">
            <Input
              className="h-[52px] w-full bg-white"
              variant="bordered"
              radius="sm"
              label="Nhập tên anime ..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button
              className="h-[40px] w-[0px] rounded-md m-0 p-0 -ml-[50px] min-w-unit-12 bg-white z-10 hover:bg-white"
              onClick={searchSubmit}
            >
              <MagnifyingGlassIcon className={`h-6 w-6 text-[#3BE1AA]`} />
            </Button>
          </div>
          <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            variant="shadow"
            selectionMode="multiple"
            itemClasses={itemClasses}
          >
            {animeEpisodeList.map((item, index) => (
              <AccordionItem
                key={index}
                startContent={
                  <Avatar
                    isBordered
                    color="success"
                    radius="sm"
                    src={item.landspaceImage}
                  />
                }
                subtitle={item.episodeList.length + " tập"}
                aria-label={item.movieName}
                title={item.movieName}
                isCompact
              >
                <div>
                  <div className="flex flex-col gap-1 w-full">
                    <CheckboxGroup
                      value={groupSelected}
                      onChange={setGroupSelected}
                      classNames={{
                        base: "w-full",
                      }}
                      orientation="horizontal"
                    >
                      {item?.episodeList.map((item) => (
                        <AlbumCheckbox
                          value={item?._id}
                          info={{
                            name: `${item?.episodeName}`,
                            image: `${item?.coverImage}`,
                            type: `anime`,
                          }}
                          statusColor="secondary"
                        />
                      ))}
                    </CheckboxGroup>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex flex-row justify-between mt-6">
            <Label className="font-semibold text-xl">Tổng tiền:</Label>
            <Label className="font-semibold text-xl text-emerald-400">
              600.000 VND
            </Label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeEpisodeListComponent;