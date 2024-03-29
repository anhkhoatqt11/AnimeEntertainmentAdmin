import {AnimeDetail} from "./(components)/AnimeDetail";


export default function page({ params }) {
  return <AnimeDetail id={params.id} />;
}