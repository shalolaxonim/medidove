import "./App.css";
import About from "./components/about";
import AvailablePart from "./components/available";
import Departments from "./components/departments";
import Navbar from "./components/navbar";
import News from "./components/news";
import PartOne from "./components/partOne";
import Pricing from "./components/pricing";
// import { ShowCase } from "./components/showcase";
import Show from "./components/showcase1";
import Showcase2 from "./components/showcase2";
import Team from "./components/team";
import TrustPart from "./components/trust";

function App() {
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
    </div>
  );
}

export default App;
