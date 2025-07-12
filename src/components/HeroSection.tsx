import { Download, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 text-center gap-8 bg-gradient-to-b from-mainblue/5 to-white dark:from-mainblue/20 dark:to-stone-950">
      {/* Animated gradient blob */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-mainblue via-blue-400 to-cyan-300 opacity-30 blur-3xl rounded-full animate-pulse" />
      {/* Headshot photo */}
      <img
        src="/faith.jpg"
        alt="Faith Muthoni headshot"
        className="w-32 h-32 md:w-40 md:h-40 object-cover object-top rounded-full border-4 border-mainblue shadow-lg bg-white dark:bg-stone-800 mt-12 md:mt-16"
        loading="lazy"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-mainblue mb-2 drop-shadow-sm tracking-tight">
        Faith Muthoni
      </h1>
      <p className="text-lg md:text-2xl text-stone-700 dark:text-stone-200 max-w-2xl mx-auto font-medium">
        Aspiring IT professional with a strong foundation in IT support, software development, and leadership through diverse projects and technical roles.
      </p>
      <div className="flex gap-4 justify-center mt-4">
        <a href="/Faith_Muthoni_CV.pdf" download className="inline-flex items-center px-6 py-3 rounded-lg bg-mainblue text-white font-semibold shadow hover:bg-mainblue/90 transition">
          <Download className="mr-2 w-5 h-5" /> Download CV
        </a>
        <a href="https://www.linkedin.com/in/faithkimani415" target="_blank" rel="noopener" aria-label="LinkedIn" className="inline-flex items-center px-4 py-3 rounded-lg border border-mainblue text-mainblue hover:bg-mainblue hover:text-white transition">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com/faithkimani415" target="_blank" rel="noopener" aria-label="GitHub" className="inline-flex items-center px-4 py-3 rounded-lg border border-mainblue text-mainblue hover:bg-mainblue hover:text-white transition">
          <Github className="w-5 h-5" />
        </a>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-stone-500 dark:text-stone-400">
        <span>BSc IT (KCA University, Jan 2024 – Nov 2025)</span>
        <span>•</span>
        <span>Diploma ICT</span>
        <span>•</span>
        <span>Web Dev Certification</span>
      </div>
    </section>
  );
}
