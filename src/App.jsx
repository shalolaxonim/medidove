import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import PartOne from "./components/partOne";
// import { ShowCase } from "./components/showcase";
import Show from "./components/showcase1";
import Showcase2 from "./components/showcase2";

function App() {
  return (
    <div>
      <PartOne />
      <Navbar />
      <Showcase2/>
      <About/>
    </div>
  );
}

export default App;
