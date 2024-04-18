import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
export const EpisodeItemCard = ({
  item,
  setCoverImage,
  setEpisodeName,
  setVideoUrl,
}) => {
  return (
    <div className="relative">
      <div className="flex flex-row p-3">
        <div className="overflow-hidden rounded w-[120px]">
          <AspectRatio ratio={16 / 9}>
            <img
              src={item.coverImage}
              alt={item.episodeName}
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col ml-2 justify-between">
          <p
            className="font-medium w-[120px] h-[38px] text-[14px] text-gray-800 overflow-hidden text-ellipsis"
            style={{ maxLines: 2, textOverflow: "ellipsis" }}
          >
            {item.episodeName}
          </p>
          <p className="text-fuchsia-500 text-[12px]">{item.views} lượt xem</p>
        </div>
      </div>
      <div className="z-10 w-full h-full bg-[#141414]/5 opacity-0 hover:opacity-100 top-0 left-0 absolute rounded flex justify-end pr-2 pt-2 gap-2">
        <div
          className="border-2 hover:scale-110 transition ease-in-out duration-500 border-white bg-transparent hover:bg-white w-10 h-10 rounded-full flex justify-center items-center"
          onClick={() => {
            setVideoUrl(item.videoUrl);
            setEpisodeName(item.episodeName);
            setCoverImage([
              {
                preview: item.coverImage,
                url: item.coverImage,
                name: item.episodeName,
              },
            ]);
          }}
        >
          <FiEdit2 className="w-4 h-4 text-blue-500" />
        </div>
        <div className="border-2 hover:scale-110 transition ease-in-out duration-500 border-white bg-transparent hover:bg-white w-10 h-10 rounded-full flex justify-center items-center">
          <MdDeleteOutline className="w-4 h-4 text-red-500" />
        </div>
      </div>
    </div>
  );
};
