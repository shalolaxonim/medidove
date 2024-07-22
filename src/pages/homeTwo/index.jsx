import About2 from "../../components/about2";
import Consultation from "../../components/consultation";
import HomeShowcase from "../../components/homeShowcase";
import Mission from "../../components/mission";
import Navbar from "../../components/navbar";
import Services from "../../components/services";
import Testimonials from "../../components/testimonials";

export default function HomeTwo() {
  return (
    <div>
      <Navbar />
      <HomeShowcase />
      <About2 />
      <Mission />
      <Consultation />
      <Services />
      <Testimonials />
    </div>
  );
}
