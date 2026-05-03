import SearchHero from "../components/Testpage/TestHero";
import TestsLayout from "../components/Testpage/TestLayout";
import Navbar from "../components/Navbar";
import { testData } from "../data/testData";

export default function TestPage() {
  return (
    <>
    <Navbar/>
      <SearchHero />
      <TestsLayout tests={testData} />
    </>
  );
}