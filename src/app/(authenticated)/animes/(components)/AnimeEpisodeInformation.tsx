"use client";

import React, { useEffect, useState } from "react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
// import { OurFileRouter } from "@/app/api/uploadthing/core";
import { FileDialog } from "@/components/ui/FileDialog";
import { ImageList } from "@/components/ui/ImageList";
import { Button } from "@/components/ui/button";
import DialogCustom from "@/components/ui/dialogCustom";
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
import toast, { Toaster } from "react-hot-toast";
import { EpisodeItemCard } from "./EpisodeItemCard";

function AnimeEpisodeInformation({ props }) {
  const [coverImage, setCoverImage] = React.useState([]);
  const [episodeName, setEpisodeName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [editMode, setEditMode] = useState(-1);

  const addEpisode = () => {
    if (coverImage.length <= 0) {
      toast.error("Tập phim phải có 1 hình bìa");
      return;
    }
    if (!episodeName || !videoUrl) {
      toast.error("Vui lòng nhập tất cả thông tin");
      return;
    }
    props.setEpisodeList([
      ...props.episodeList,
      {
        episodeName: episodeName,
        coverImage: coverImage[0]?.preview,
        content: videoUrl,
        adLink: "undefined",
        advertisement: "undefined",
        views: 0,
      },
    ]);
    setCoverImage([]);
    setEpisodeName("");
    setVideoUrl("");
    toast.success("Đã thêm tập mới");
    return;
  };

  const removeEpisode = () => {
    props.setEpisodeList(props.episodeList.toSpliced(editMode, 1));
    setCoverImage([]);
    setEpisodeName("");
    setVideoUrl("");
    setEditMode(-1);
    toast.success("Đã xóa tập phim");
  };
  return (
    <div className="grid-cols-1 grid gap-4 mb-6 mt-5">
      <Toaster />
      <h1 className="font-semibold text-xl">Danh sách tập phim</h1>
      <div className="flex flex-col gap-3 w-full rounded bg-white p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col gap-3 w-full lg:w-[70%]">
            <div className=" w-full h-41 border-1 rounded">
              <img
                src={coverImage[0]?.preview || coverImage[0]?.url}
                alt={coverImage[0]?.name}
                className={`h-[360px] w-full rounded-md object-cover object-center`}
              />
            </div>
            <FileDialog
              name="images"
              maxFiles={1}
              maxSize={1024 * 1024 * 4}
              files={coverImage}
              setFiles={setCoverImage}
              disabled={false}
              className={`p-0 px-6`}
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
                  value={episodeName}
                  placeholder="Nhập tên tập phim"
                  onChange={(e) => {
                    setEpisodeName(e.target.value);
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
                  value={videoUrl}
                  placeholder="Nhập nội dụng"
                  onChange={(e) => {
                    setVideoUrl(e.target.value);
                  }}
                />
              </div>
            </div>
            <Label className="font-bold text-sm">
              Quảng cáo: <span className="text-red-500">*</span>
            </Label>
            {editMode === -1 ? (
              <Button
                className={`w-full bg-blue-500  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                onClick={() => {
                  addEpisode();
                }}
              >
                Thêm tập phim
              </Button>
            ) : (
              <div className="space-y-3">
                <Button
                  className={`w-full bg-blue-500  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                  onClick={() => {
                    addEpisode();
                  }}
                >
                  Thêm tập phim
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className={`w-full bg-red-400  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                    onClick={() => {
                      removeEpisode();
                    }}
                  >
                    Xóa tập
                  </Button>
                  <Button
                    className={`w-full bg-[#dedede] text-black hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                    onClick={() => {
                      setCoverImage([]);
                      setEpisodeName("");
                      setVideoUrl("");
                      setEditMode(-1);
                    }}
                  >
                    Hủy
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-[30%]">
            <div className=" w-full h-full border-1 rounded overflow-hidden">
              {props.episodeList.map((item, index) => (
                <EpisodeItemCard
                  id={index}
                  item={item}
                  setEpisodeName={setEpisodeName}
                  setCoverImage={setCoverImage}
                  setVideoUrl={setVideoUrl}
                  setEditMode={setEditMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeEpisodeInformation;
