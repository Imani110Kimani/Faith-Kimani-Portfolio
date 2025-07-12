import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-mainblue mb-2">Faith Muthoni</h1>
      <p className="text-lg md:text-2xl text-stone-700 dark:text-stone-200 max-w-2xl mx-auto">
        Aspiring IT professional with a strong foundation in IT support, software development, and leadership through diverse projects and technical roles.
      </p>
      <div className="flex gap-4 justify-center mt-4">
        <a href="/Faith_Muthoni_CV.pdf" download>
          <Button size="lg" className="bg-mainblue text-white hover:bg-mainblue/90">
            <Download className="mr-2 w-5 h-5" /> Download CV
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/faithkimani415" target="_blank" rel="noopener" aria-label="LinkedIn">
          <Button variant="outline" size="lg"><Linkedin className="w-5 h-5" /></Button>
        </a>
        <a href="https://github.com/faithkimani415" target="_blank" rel="noopener" aria-label="GitHub">
          <Button variant="outline" size="lg"><Github className="w-5 h-5" /></Button>
        </a>
      </div>
    </section>
  );
}
