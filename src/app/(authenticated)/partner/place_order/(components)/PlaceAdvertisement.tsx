"use client";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { useAdvertisement } from "@/hooks/useAdvertisement";
import AnimeEpisodeListComponent from "./AnimeEpisodeList";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { url } from "inspector";

export function PlaceAdvertisement() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { fetchEpisodeToShow, processingOrder } = useAdvertisement();
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [animeEpisodeList, setAnimeEpisodeList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [groupSelected, setGroupSelected] = React.useState([]);
  const [searchKey, setSearchKey] = useState("");
  try {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchSubmit();
    });
  } catch (except) {}
  const searchSubmit = () => {
    setCopyList(
      animeEpisodeList.filter((item) =>
        item?.movieName.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  };
  useEffect(() => {
    const fetchEpisode = async () => {
      await fetchEpisodeToShow().then((res) => {
        setAnimeEpisodeList(res);
        setCopyList(res);
      });
      setIsLoading(false);
    };
    fetchEpisode();
  }, []);
  const onSubmit = async () => {
    if (!videoUrl || !linkUrl) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (groupSelected.length < 3) {
      toast.error("Vui lòng chọn tối thiểu 3 tập phim");
      return;
    }
    const data = {
      episodeList: groupSelected,
      advertisementId: "662629237f8fce0bb6a8d3b4",
    };
    await processingOrder(data);
  };
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
                  Bạn có chắc chắn muốn đặt quảng cáo này. Vui lòng kiểm tra kỹ
                  các tập chèn quảng cáo
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
                  Đặt
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
        <AnimeEpisodeListComponent
          animeEpisodeList={copyList}
          setAnimeEpisodeList={setCopyList}
          groupSelected={groupSelected}
          setGroupSelected={setGroupSelected}
          setSearchKey={setSearchKey}
          searchSubmit={searchSubmit}
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          linkUrl={linkUrl}
          setLinkUrl={setLinkUrl}
        />
        <div className="p-4">
          <Button
            className={`w-full rounded-md m-0 p-0 font-medium text-sm shadow-md bg-gradient-to-r from-[#A958FE] to-[#DA5EF0] transition ease-in-out hover:scale-[1.01] text-white py-6`}
            radius="sm"
            onClick={onOpen}
          >
            Đặt quảng cáo
          </Button>
        </div>
        {isLoading ? (
          <div className="w-full h-full bg-gray-200 z-10 absolute top-0">
            <div className="w-full h-screen flex items-center justify-center ">
              <Loader />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
