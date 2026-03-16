import { HeaderSection } from "~/components/HeaderSection/HeaderSection";
import type { Route } from "./+types/home";
import fakeDB from "fakeDB";
import { LatestFromKotlinSection } from "~/components/LatestFromKotlinSection/LatestFromKotlinSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const headerCards = await fakeDB.getHeaderCards();
  const latestNewsFromKotlin = await fakeDB.getLatestNewsFromKotlin();
  return {headerCards, latestNewsFromKotlin};
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
  <>
    <HeaderSection cardsData={loaderData.headerCards} />;
    <LatestFromKotlinSection newsData={loaderData.latestNewsFromKotlin}/>
  </> 
  )
}
