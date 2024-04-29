"use client";

import React, { useEffect, useState } from "react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
// import { OurFileRouter } from "@/app/api/uploadthing/core";
import { FileDialog } from "@/components/ui/FileDialog";
import { Button } from "@/components/ui/button";
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
import { ChapterItemCard } from "./ChapterItemCard";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { VideoUploader } from "@/components/videoUpload/VideoUploader";
import { useAnimeEpisodes } from "@/hooks/useAnimeEpisodes";
import { postRequest } from "@/lib/fetch";
import { ImageList } from "@/components/ui/ImageList";
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

function ComicChapterInformation({ props }) {
  const [defaultImage, setDefaultImage] = useState("");
  const [coverImage, setCoverImage] = React.useState([]);
  const [chapterName, setChapterName] = useState("");
  const [editMode, setEditMode] = useState(-1);
  const [contentImageFiles, setContentImagesFile] = useState([]);
  let [content, setContent] = useState<string[]>([]);
  const [unlockPrice, setUnlockPrice] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const { startUpload } = useUploadThing("imageUploader");

  const addChapter = async () => {
    console.log(props.detailChapterList);
    if (coverImage.length <= 0) {
      toast.error("Tập truyện phải có 1 hình bìa");
      return;
    }
    if (!chapterName) {
      toast.error("Vui lòng nhập tên tập truyện");
      return;
    }
    if (contentImageFiles.length < 2 && content.length < 2) {
      toast.error("Nội dung tập truyện phải có tối thiểu 10 ảnh");
      return;
    }

    processData();
  };

  const processImageFiles = (files) => {
    setContent([]);
    files?.map((item) => {
      if (item !== null) {
        content.push(item?.url);
        setContent(content);
      }
    });
  };

  const processData = async () => {
    setIsProcessing(true);
    const [posterImage, contentImage] = await Promise.all([
      startUpload([...coverImage]).then((res) => {
        const formattedImages = res?.map((image) => ({
          id: image.key,
          name: image.key.split("_")[1] ?? image.key,
          url: image.url,
        }));
        return formattedImages ?? null;
      }),
      startUpload([...contentImageFiles]).then((res) => {
        const formattedImages = res?.map((image) => ({
          id: image.key,
          name: image.key.split("_")[1] ?? image.key,
          url: image.url,
        }));
        return formattedImages ?? null;
      }),
    ]);
    processImageFiles(contentImage);
    props.setDetailChapterList([
      ...props.detailChapterList,
      {
        chapterName: chapterName,
        coverImage: posterImage ? posterImage[0]?.url : "",
        content: content,
        unlockPrice: unlockPrice,
        views: 0,
        isNew: true,
        isEditing: false,
        isDeleting: false,
      },
    ]);
    console.log(props.detailChapterList);
    setCoverImage([]);
    setChapterName("");
    setContent([]);
    setContentImagesFile([]);
    setDefaultImage("");
    setUnlockPrice(0);
    toast.success("Đã thêm tập mới");
    setIsProcessing(false);
    return;
  };

  const editChapter = async () => {
    if (!chapterName) {
      toast.error("Vui lòng nhập tên tập truyện");
      return;
    }
    if (contentImageFiles.length < 2 && content.length < 2) {
      toast.error("Nội dung tập truyện phải có tối thiểu 10 ảnh");
      return;
    }
    processEditData();
  };

  const processEditData = async () => {
    setIsProcessing(true);
    if (contentImageFiles.length > 0) {
      content?.map(async (url) => {
        const parts = url?.split("/");
        const keyPart = parts?.[parts.length - 1];
        const imageKey = keyPart?.split("?")[0];
        await postRequest({
          endPoint: "/api/uploadthing/deleteImage",
          formData: { imageKey },
          isFormData: false,
        });
      });
      const [contentImage] = await Promise.all([
        startUpload([...contentImageFiles]).then((res) => {
          const formattedImages = res?.map((image) => ({
            id: image.key,
            name: image.key.split("_")[1] ?? image.key,
            url: image.url,
          }));
          return formattedImages ?? null;
        }),
      ]);
      processImageFiles(contentImage);
    }
    if (coverImage.length > 0) {
      const [posterImage] = await Promise.all([
        startUpload([...coverImage]).then((res) => {
          const formattedImages = res?.map((image) => ({
            id: image.key,
            name: image.key.split("_")[1] ?? image.key,
            url: image.url,
          }));
          return formattedImages ?? null;
        }),
      ]);
      const parts = defaultImage?.split("/");
      const keyPart = parts?.[parts.length - 1];
      const imageKey = keyPart?.split("?")[0];
      await postRequest({
        endPoint: "/api/uploadthing/deleteImage",
        formData: { imageKey },
        isFormData: false,
      });
      props.setDetailChapterList(
        props.detailChapterList.map((item, index) =>
          index === editMode
            ? {
                ...item,
                chapterName: chapterName,
                coverImage: posterImage ? posterImage[0]?.url : "",
                content: content,
                views: item.views,
                unlockPrice: unlockPrice,
                isNew: !item.isEditing,
                isEditing: item.isEditing,
                isDeleting: false,
              }
            : item
        )
      );
    } else {
      props.setDetailChapterList(
        props.detailChapterList.map((item, index) =>
          index === editMode
            ? {
                ...item,
                chapterName: chapterName,
                coverImage: defaultImage,
                content: content,
                views: item.views,
                unlockPrice: unlockPrice,
                isNew: !item.isEditing,
                isEditing: item.isEditing,
                isDeleting: false,
              }
            : item
        )
      );
    }
    setCoverImage([]);
    setChapterName("");
    setContent([]);
    setContentImagesFile([]);
    setDefaultImage("");
    setUnlockPrice(0);
    setEditMode(-1);
    toast.success("Đã sửa tập truyện");
    console.log(props.detailChapterList);
    setIsProcessing(false);
  };

  const removeChapter = async () => {
    setIsProcessing(true);
    content?.map(async (item) => {
      const parts = item?.split("/");
      const keyPart = parts?.[parts.length - 1];
      const imageKey = keyPart?.split("?")[0];
      await postRequest({
        endPoint: "/api/uploadthing/deleteImage",
        formData: { imageKey },
        isFormData: false,
      });
    });
    if (defaultImage !== "") {
      const parts = defaultImage?.split("/");
      const keyPart = parts?.[parts.length - 1];
      const imageKey = keyPart?.split("?")[0];
      await postRequest({
        endPoint: "/api/uploadthing/deleteImage",
        formData: { imageKey },
        isFormData: false,
      });
    }
    props.setDetailChapterList(
      props.detailChapterList.map((item, index) =>
        index === editMode
          ? {
              ...item,
              isDeleting: true,
            }
          : item
      )
    );
    setCoverImage([]);
    setChapterName("");
    setContent([]);
    setDefaultImage("");
    setUnlockPrice(0);
    setEditMode(-1);
    toast.success("Đã xóa tập truyện");
    setIsProcessing(false);
  };

  return (
    <div className="grid-cols-1 grid gap-4 mb-6 mt-5">
      <Toaster />
      <h1 className="font-semibold text-xl">Danh sách tập truyện</h1>
      <div className="flex flex-col gap-3 w-full rounded bg-white p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col gap-3 w-full lg:w-[70%]">
            <div className=" w-full h-41 border-1 rounded">
              <img
                src={
                  coverImage[0]?.preview || coverImage[0]?.url || defaultImage
                }
                alt={coverImage[0]?.name || defaultImage}
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
                  Tên tập truyện: <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="w-full"
                  radius="sm"
                  variant="bordered"
                  size="md"
                  value={chapterName}
                  placeholder="Nhập tên tập truyện"
                  onChange={(e) => {
                    setChapterName(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* mo ta */}
            <div className="gap-6">
              {/* ten phim */}
              <div className="flex flex-col gap-3 w-full">
                <Label className="font-bold text-sm">
                  {`Nội dung (Tối thiểu 10 hình - Tối đa 20 hình):`}{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="flex flex-col gap-y-3 w-full">
                  <div className="border-1 border-gray-400 w-full h-64 overflow-hidden rounded-md">
                    {contentImageFiles?.length || content.length ? (
                      <ImageList
                        className={"w-full h-64"}
                        files={contentImageFiles}
                        defaultFiles={content}
                        height={20}
                        width={20}
                      />
                    ) : null}
                  </div>
                  <FileDialog
                    name="images"
                    maxFiles={20}
                    maxSize={1024 * 1024 * 4}
                    files={contentImageFiles}
                    setFiles={setContentImagesFile}
                    disabled={false}
                  />
                </div>
              </div>
            </div>

            {editMode === -1 ? (
              <Button
                disabled={isProcessing}
                className={`w-full bg-blue-500  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                onClick={() => {
                  addChapter();
                }}
              >
                Thêm tập truyện
              </Button>
            ) : (
              <div className="space-y-3">
                <Button
                  disabled={isProcessing}
                  className={`w-full bg-emerald-500  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                  onClick={() => {
                    editChapter();
                  }}
                >
                  Sửa tập truyện
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className={`w-full bg-red-400  hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                    onClick={() => {
                      removeChapter();
                    }}
                  >
                    Xóa tập
                  </Button>
                  <Button
                    className={`w-full bg-[#dedede] text-black hover:text-white hover:scale-[1.01] transition ease-in-out duration-500 font-semibold py-6 text-base`}
                    onClick={() => {
                      setCoverImage([]);
                      setChapterName("");
                      setContent([]);
                      setUnlockPrice(0);
                      setDefaultImage("");
                      setEditMode(-1);
                      setCoverImage([]);
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
              {props.detailChapterList.map((item, index) =>
                !item.isDeleting ? (
                  <ChapterItemCard
                    id={index}
                    item={item}
                    setChapterName={setChapterName}
                    setDefaultImage={setDefaultImage}
                    setContent={setContent}
                    setEditMode={setEditMode}
                    setUnlockPrice={setUnlockPrice}
                  />
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicChapterInformation;
