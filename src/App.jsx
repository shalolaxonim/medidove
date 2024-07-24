import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import AvailablePart from "./components/available";
import Departments from "./components/departments";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import News from "./components/news";
import PartOne from "./components/partOne";
import Pricing from "./components/pricing";
// import { ShowCase } from "./components/showcase";
import Show from "./components/showcase1";
import Showcase2 from "./components/showcase2";
import Team from "./components/team";
import TrustPart from "./components/trust";
import Home from "./pages/home";
import HomeTwo from "./pages/homeTwo";
import HomeThree from "./pages/homeThree";

function App() {
  return (
    <div>
      {/* <PartOne />
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
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/homeThree" element={<HomeThree />} />
      </Routes>
    </div>
  );
}

export default App;
