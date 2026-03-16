import { HeaderSection } from "~/components/HeaderSection/HeaderSection";
import type { Route } from "./+types/home";
import fakeDB from "fakeDB";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const headerCards = await fakeDB.getHeaderCards()
  return headerCards;
}

export default function Home({loaderData }: Route.ComponentProps) {
  return <HeaderSection cardsData={loaderData} />;
}
