"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "@/app/components/layouts/navbar";
import HomePage from "@/app/home";
import Footer from "@/app/components/layouts/footer";
import Particlesbackground from "./components/tools/particles";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <>
      <Particlesbackground />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
