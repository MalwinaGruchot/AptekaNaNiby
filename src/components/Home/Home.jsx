import SectionBanner from "./SectionBanner";
import SectionForYou from "./SectionForYou";
import SectionWeeksProdukts from "./SectionWeeksProdukts";
import SectionCare from "./SectionCare";
import SectionArticles from "./SectionArticles";

export default function Home() {
  return (
    <>
      <SectionBanner />
      <SectionForYou />
      <SectionWeeksProdukts />
      <SectionCare />
      <SectionArticles />
    </>
  );
}
