import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Aboutsection from "./components/Aboutsection";
import Projectsections from "./components/Projectsections";
import Emailsection from "./components/Emailsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1b1b1b] container mx-auto px-12 py-4">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4 ">
        <Herosection />
        <Aboutsection />
        <Projectsections />
        <Emailsection />
      </div>
    </main>
  );
}
