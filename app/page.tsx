import About from "@/components/About";
import { Certs } from "@/components/Certs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/ui/Hero";
import { Myprojects } from "@/components/ui/Projects";

export default function Home() {
  return (
    <main className=" pb-10 relative flex justify-center flex-col overflow-hidden mx-auto sm:px-10 bg-slate-900">
      helloooo
      <Hero />
      <About />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Certifications
        </div>
      </div>
      <Certs />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Work Experience
        </div>
      </div>
      <Experience />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Projects
        </div>
      </div>
      <Myprojects />
      <Footer />
    </main>
  );
}
