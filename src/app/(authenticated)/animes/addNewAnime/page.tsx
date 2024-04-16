import AnimeEpisodeInformation from "../(components)/AnimeEpisodeInformation";
import AnimeInformation from "../(components)/AnimeInformation";

export default function page() {
  return (
    <div className="w-full h-full bg-slate-100 p-6">
      <AnimeInformation />
      <AnimeEpisodeInformation />
    </div>
  );
}
