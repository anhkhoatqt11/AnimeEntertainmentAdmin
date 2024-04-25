"use client";
import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AnimeInformation from "../(components)/AnimeInformation";
import AnimeEpisodeInformation from "../(components)/AnimeEpisodeInformation";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useAnimeEpisodes } from "@/hooks/useAnimeEpisodes";
import { useAnimes } from "@/hooks/useAnimes";
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

type AnimeEp = {
  episodeName: string;
  coverImage: string;
  content: string;
  adLink: string;
  advertisement: string;
  views: number;
};

export function AddNewAnime() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [landspaceImage, setLandspaceImage] = React.useState([]);
  const [coverImage, setCoverImage] = React.useState([]);
  const [movieName, setMovieName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [genreSelected, setGenreSelected] = React.useState([]);
  const [publisher, setPublisher] = React.useState("");
  const [weeklyTime, setWeeklyTime] = React.useState("");
  const [ageFor, setAgeFor] = React.useState(new Set(["10+"]));
  const [episodeList, setEpisodeList] = useState<AnimeEp[]>([]);
  const [episodeIdList, setEpisodeIdList] = useState([]);
  const { startUpload } = useUploadThing("imageUploader");
  const { createNewEpisode } = useAnimeEpisodes();
  const { createNewAnime } = useAnimes();
  const route = useRouter();

  const onSubmit = async () => {
    console.log(episodeList);
    // if (landspaceImage.length <= 0 || coverImage.length <= 0) {
    //   toast.error("Phim bắt buộc phải có một ảnh bìa ngang và một ảnh bìa dọc");
    //   return;
    // }
    // if (!movieName || !description || !publisher || !weeklyTime) {
    //   toast.error("Vui lòng nhập tất cả thông tin");
    //   return;
    // }
    // if (genreSelected.length <= 0 || genreSelected.length > 3) {
    //   toast.error("Phải có tối thiểu 1 thể loại phim và tối đa 3 thể loại");
    //   return;
    // }
    // episodeList.map((item, index) => {
    //   const data = {
    //     coverImage: "{ type: String }",
    //     episodeName: "{ type: String }",
    //     totalTime: 0,
    //     publicTime: new Date(),
    //     // *
    //     content: "{ type: String }",
    //     comments: [],
    //     likes: [], // list of user liked
    //     views: 0,
    //     advertising: "{ type: String }",
    //     adLink: "{ type: String }",
    //   };
    //   createNewEpisode(data).then((res) => {
    //     episodeIdList.push(res?._id);
    //     if (index === episodeList.length - 1) {
    //       const data = {
    //         coverImage: "{ type: String }",
    //         landspaceImage: "{ type: String }",
    //         movieName: "{ type: String }",
    //         genres: genreSelected,
    //         publishTime: "{ type: String }",
    //         ageFor: "{ type: String }",
    //         publisher: "{ type: String }",
    //         description: "{ type: String }",
    //         episodes: episodeIdList,
    //       };
    //       createNewAnime(data).then((res) => {
    //         toast.success("da xong");
    //       });
    //     }
    //   });
    // });
  };

  //   const processCreationEvent = async () => {
  //     setIsLoading(true);
  //     const [posterImage] = await Promise.all([
  //       startUpload([...eventPosterFile]).then((res) => {
  //         const formattedImages = res?.map((image) => ({
  //           id: image.key,
  //           name: image.key.split("_")[1] ?? image.key,
  //           url: image.url,
  //         }));
  //         return formattedImages ?? null;
  //       }),
  //     ]);
  //     const data = {
  //       name: eventName,
  //       moTa: contentValue,
  //       diaChi: addressValue,
  //       hinhAnhSuKien: posterImage ? posterImage[0]?.url : null,
  //       ngayBatDau: startDate,
  //       ngayKetThuc: endDate,
  //       userId: userId,
  //       ChuDeId: parseInt(typeEventSelected),
  //       trangThai: "Đã duyệt",
  //     };
  //     await createNewEvent(data).then((res) => {
  //       processingTicket(res?.id).then(() => {
  //         setIsLoading(false);
  //         toast.success("Sự kiện được tạo thành công");
  //         setTimeout(() => {
  //           route.push("/organizer/event");
  //         }, 1000);
  //       });
  //     });
  //   };

  //   const processingTicket = async (id) => {
  //     ticketEvent.map(async (item) => {
  //       const data = {
  //         name: item.name,
  //         moTa: item.moTa,
  //         gia: item.gia,
  //         mau: item.mau,
  //         soLuong: item.soLuong,
  //         soLuongToiThieu: item.soLuongToiThieu,
  //         soLuongToiDa: item.soLuongToiDa,
  //         ngayBan: item.ngayBan,
  //         ngayKetThuc: item.ngayKetThuc,
  //         SuKienId: id,
  //       };
  //       await createNewTicket(data);
  //     });
  //   };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Xác nhận
              </ModalHeader>
              <ModalBody>
                <p>
                  Sự kiện đã tạo sẽ không thể xóa. Bạn có chắc chắn muốn tạo sự
                  kiện này
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  variant="light"
                  onPress={() => {
                    onClose();
                    onSubmit();
                  }}
                >
                  Tạo sự kiện
                </Button>
                <Button color="primary" onPress={onClose}>
                  Hủy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="relative min-h-[1032px]">
        <AnimeInformation
          props={{
            landspaceImage,
            setLandspaceImage,
            coverImage,
            setCoverImage,
            movieName,
            setMovieName,
            description,
            setDescription,
            genreSelected,
            setGenreSelected,
            publisher,
            setPublisher,
            weeklyTime,
            setWeeklyTime,
            ageFor,
            setAgeFor,
            setIsLoading,
          }}
        />
        <AnimeEpisodeInformation
          props={{
            episodeList,
            setEpisodeList,
          }}
        />
        <Button
          className={`w-full rounded-md m-0 p-0 font-semibold text-base shadow-md bg-gradient-to-r from-[#A958FE] to-[#DA5EF0] transition ease-in-out hover:scale-[1.01] text-white py-6`}
          radius="sm"
          onClick={onOpen}
        >
          Tạo sự kiện
        </Button>
        {isLoading ? (
          <div className="w-full h-full flex justify-center bg-gray-200 z-10 absolute top-0">
            <CircularProgress
              color="success"
              aria-label="Loading..."
              classNames={{
                svg: "w-20 h-20 text-gray-600",
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
