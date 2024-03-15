import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Main() {
  return (
    <main className="pt-[100px]">
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
