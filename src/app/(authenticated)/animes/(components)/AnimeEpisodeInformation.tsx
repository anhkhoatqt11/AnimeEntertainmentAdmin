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

function AnimeEpisodeInformation({}) {
  const ageList = [
    "10+",
    "11+",
    "12+",
    "13+",
    "14+",
    "15+",
    "16+",
    "17+",
    "18+",
  ];
  const [age, setAge] = React.useState(new Set([]));
  return (
    <div className="grid-cols-1 grid gap-4 mb-6 mt-5">
      <h1 className="font-semibold text-xl">Danh sách tập phim</h1>
      <div className="flex flex-col gap-3 w-full rounded bg-white p-4">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-3 w-[70%]">
            <div className=" w-full h-41 border-1 rounded">
              <img
                src={""}
                alt={"props.eventPosterFile[0]?.name"}
                className={`h-[360px] w-full rounded-md object-cover object-center`}
              />
            </div>
            <FileDialog
              name="images"
              maxFiles={1}
              maxSize={1024 * 1024 * 4}
              //   files={props.eventPosterFile}
              //   setFiles={props.setEventPosterFile}
              disabled={false}
              className={`p-0 px-6`}
              files={null}
              setFiles={function (
                value: React.SetStateAction<
                  (FileWithPath & { preview: string })[] | null
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            {/* thong tin khac */}
            <div className="gap-6 mt-6">
              {/* ten phim */}
              <div className="flex flex-col gap-3 w-full">
                <Label className="font-bold text-sm">
                  Tên tập phim: <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="w-full"
                  radius="sm"
                  variant="bordered"
                  size="md"
                  //   value={props.eventName}
                  placeholder="Nhập tên tập phim"
                  onChange={(e) => {
                    // props.setEventName(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* mo ta */}
            <div className="gap-6">
              {/* ten phim */}
              <div className="flex flex-col gap-3 w-full">
                <Label className="font-bold text-sm">
                  Nội dung: <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  className="w-full"
                  radius="sm"
                  variant="bordered"
                  size="md"
                  //   value={props.eventName}
                  placeholder="Nhập nội dụng"
                  onChange={(e) => {
                    // props.setEventName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[30%]">
            <div className=" w-full h-full border-1 rounded">
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeEpisodeInformation;
