import Navbar from "@/app/components/layouts/navbar";
import Home from "@/app/home";
import Footer from "@/app/components/layouts/footer";
import Particlesbackground from "./components/tools/particles";
export default function () {
  return (
    <>
      <Particlesbackground />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
