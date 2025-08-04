import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutSection from "./pages/AboutSection/page";
import HeroSection from "./pages/HeroSection/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        {/* <AboutSection /> */}
        <Footer />
      </div>
    </main>
  );
}
