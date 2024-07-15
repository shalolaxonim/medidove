import About from "../../components/about";
import AvailablePart from "../../components/available";
import Departments from "../../components/departments";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import News from "../../components/news";
import PartOne from "../../components/partOne";
import Pricing from "../../components/pricing";
import Showcase2 from "../../components/showcase2";
import Team from "../../components/team";
import TrustPart from "../../components/trust";

export default function Home() {
  return (
    <div>
      <PartOne />
      <Navbar />
      <Showcase2 />
      <About />
      <Departments />
      <Team />
      <AvailablePart />
      <Pricing />
      <TrustPart />
      <News />
      <Footer />
      <div className="bg-[#0D1B26] text-white text-center p-[30px]">
        Copyright by@ BasicTheme - 2022
      </div>
    </div>
  );
}
