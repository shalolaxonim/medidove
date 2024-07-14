import "./App.css";
import About from "./components/about";
import AvailablePart from "./components/available";
import Departments from "./components/departments";
import Navbar from "./components/navbar";
import PartOne from "./components/partOne";
// import { ShowCase } from "./components/showcase";
import Show from "./components/showcase1";
import Showcase2 from "./components/showcase2";
import Team from "./components/team";

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
    </div>
  );
}

export default App;
