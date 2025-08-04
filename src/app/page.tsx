import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutSection from "./pages/AboutSection/page";
import HeroSection from "./pages/HeroSection/page";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
