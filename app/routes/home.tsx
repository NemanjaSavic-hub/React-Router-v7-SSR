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
import { UsageSection } from "~/components/UsageSection/UsageSection";
import type { Testimonial } from "~/models/Testimonial";

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
  programmingTabs: TabType[],
  testimonials: Testimonial[]
};

export async function loader({ params }: Route.LoaderArgs) : Promise<LoaderData> {
  const [headerCards, latestNewsFromKotlin, whyKotlinSections, programmingTabs, testimonials ] = await Promise.all([
    fakeDB.getHeaderCards(),
    fakeDB.getLatestNewsFromKotlin(),
    fakeDB.getWhyKotlinSections(),
    fakeDB.getProgrammingTabs(),
    fakeDB.getTestimonials()
  ]);
  return {headerCards, latestNewsFromKotlin, whyKotlinSections, programmingTabs, testimonials };
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
      <UsageSection testimonials={loaderData.testimonials}/>
    </div>
  </ThemeProvider>
  )
}
