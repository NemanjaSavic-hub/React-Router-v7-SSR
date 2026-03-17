import { HeaderSection } from "~/components/HeaderSection/HeaderSection";
import type { Route } from "./+types/home";
import fakeDB from "fakeDB";
import { LatestFromKotlinSection } from "~/components/LatestFromKotlinSection/LatestFromKotlinSection";
import { ThemeProvider } from "@rescui/ui-contexts";
import "./index.scss";
import "../css/grid.scss";
import { WhyKotlinSection } from "~/components/WhyKotlinSection/WhyKotlinSection";
import { ProgrammingLanguage } from "~/components/WhyKotlinSection/ProgrammingLanguage/ProgrammingLanguage";
import type { TabType } from "~/models/Tab";
import type { WhyKotlinSectionType } from "~/models/WhyKotlinSectionType";
import type { HeaderCard } from "~/models/HeaderCard";
import type { LatestNewsFromKotlin } from "~/models/LatestNewsFromKotlin";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
type LoaderData = {
  headerCards : HeaderCard[],
  latestNewsFromKotlin: LatestNewsFromKotlin[],
  whyKotlinSections: WhyKotlinSectionType[],
  programmingTabs: TabType[]
};

export async function loader({ params }: Route.LoaderArgs) : Promise<LoaderData> {
  // const headerCards = await fakeDB.getHeaderCards();
  // const latestNewsFromKotlin = await fakeDB.getLatestNewsFromKotlin();
  // const whyKotlinSections = await fakeDB.getWhyKotlinSections();
  // const programmingTabs = await fakeDB.getProgrammingTabs()
  const [headerCards, latestNewsFromKotlin, whyKotlinSections, programmingTabs ] = await Promise.all([
    fakeDB.getHeaderCards(),
    fakeDB.getLatestNewsFromKotlin(),
    fakeDB.getWhyKotlinSections(),
    fakeDB.getProgrammingTabs()
  ]);
  return {headerCards, latestNewsFromKotlin, whyKotlinSections, programmingTabs};
}

export default function Home() {
  const loaderData = useLoaderData() as LoaderData
  return (
  <ThemeProvider theme="dark">
    <div className="overview-page">
      <HeaderSection cardsData={loaderData.headerCards} />;
      <LatestFromKotlinSection newsData={loaderData.latestNewsFromKotlin}/>
      <WhyKotlinSection sections={loaderData.whyKotlinSections} >
        <ProgrammingLanguage tabs={loaderData.programmingTabs} />
      </WhyKotlinSection>
    </div>
  </ThemeProvider>
  )
}
