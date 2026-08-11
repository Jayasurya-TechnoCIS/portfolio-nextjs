import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Code2, TerminalSquare, Palette, Layers, Box } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto text-[var(--color-brand-text)] font-sans">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-6 text-center md:text-left md:p-12 relative shadow-sm border border-[var(--color-brand-border)] min-h-[85vh] flex flex-col"
      >
        {/* Navbar */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          {/* Left Text */}
          <div className="md:col-span-8 z-20 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Hello, I&apos;m
            </h2>
            <h1 className="text-3xl md:text-4xl font-black font-display tracking-tighter uppercase mb-6 leading-none">
              JAYASURYA SUBRAMANI
            </h1>
            <p className="text-[var(--color-brand-text-muted)] leading-relaxed max-w-md mb-6 font-medium">
              Full Stack Web Developer experienced with blending design logic
              with robust code using React, Angular, NestJS, NextJS Frameworks.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold opacity-70">
              <span>sjayasurya2504@gmail.com</span>
            </div>
          </div>

          {/* Right Floating Badges */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center gap-6 z-20">
            <div className="flex items-center gap-4 bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-4 rounded-2xl shadow-lg w-64 hover:-translate-y-2 transition-transform cursor-default">
              <div className="bg-white dark:bg-black p-3 rounded-xl shadow-sm">
                <TerminalSquare className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-xs text-[var(--color-brand-text-muted)] font-bold">
                  EXPERT IN
                </div>
                <div className="text-sm font-bold">DevOps</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[var(--color-brand-card)] border-[1.5px] border-[var(--color-brand-border)] p-4 rounded-2xl shadow-xl w-72 md:translate-x-8 hover:-translate-y-2 transition-transform cursor-default z-30">
              <div className="bg-blue-500 text-white p-3 rounded-xl shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-blue-500 font-bold">SPECIALTY</div>
                <div className="text-sm font-bold">Angular & NestJS</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-4 rounded-2xl shadow-lg w-64 hover:-translate-y-2 transition-transform cursor-default">
              <div className="bg-white dark:bg-black p-3 rounded-xl shadow-sm">
                <Palette className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <div className="text-xs text-[var(--color-brand-text-muted)] font-bold">
                  VERSATILE IN
                </div>
                <div className="text-sm font-bold">UI / UX Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & BIO SECTION */}
      <section
        id="about"
        className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-8 md:p-20 shadow-sm border border-[var(--color-brand-border)] flex flex-col items-center"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-widest uppercase mb-16 opacity-10">
            + ABOUT ME +
          </h2>
          <h3 className="text-lg text-justify font-bold max-w-3xl mx-auto leading-relaxed mb-2">
            I am a Fullstack Developer, ex-startup founder, and technology
            enthusiast with a deep passion for bridging the gap between software
            and hardware. With over four and a half years of hands-on
            experience, my drive extends far beyond writing code—I am on a
            mission to contribute to the world by inventing, discovering, and
            sharing knowledge that pushes the boundaries of what technology can
            achieve.
          </h3>
          <h3 className="text-lg text-justify font-bold max-w-3xl mx-auto leading-relaxed mb-2">
            Throughout my career, I have architected and delivered complex,
            scalable solutions, ranging from Healthcare Electronic Medical
            Records (EMR) and Learning Management Systems (LMS) to secure
            internal platforms. My technical foundation spans modern frontend
            frameworks like Angular and React and seamless CI/CD cloud
            deployments across AWS and Azure. Because I also have a strong
            background in UI design and tools like Figma, I am able to oversee
            the entire lifecycle of a product—from the first pixel to the final
            deployment.
          </h3>
          <h3 className="text-lg text-justify font-bold max-w-3xl mx-auto leading-relaxed">
            My entrepreneurial background fundamentally shapes how I approach
            engineering. I don't just see a tech stack; I see the potential to
            build solutions that matter. Whether I am integrating cutting-edge
            AI tools into an application, exploring novel hardware-software
            interactions, or mastering new frameworks, my ultimate goal remains
            the same: to build innovative products that leave a lasting,
            positive impact and advance the way we interact with the world.
          </h3>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section
        id="skills"
        className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-8 md:p-20 shadow-sm border border-[var(--color-brand-border)] flex flex-col items-center"
      >
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-widest uppercase mb-4 opacity-10">
            + SKILLS +
          </h2>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm font-medium">
          {/* Frontend */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" /> Frontend
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>Angular</li>
              <li>NextJS</li>
              <li>Backbone.js (SPA)</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Bootstrap, Tailwind</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" /> Backend
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>NestJS</li>
              <li>NodeJS</li>
              <li>REST API Development</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Database
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MikroORM</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> DevOps
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>Docker, Kubernetes</li>
              <li>Terraform</li>
              <li>GitHub Actions</li>
              <li>Jenkins</li>
            </ul>
          </div>

          {/* Cloud & Storage */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <Box className="w-4 h-4" /> Cloud Platforms
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>AWS (S3, Route 53, EC2, SES)</li>
              <li>Azure Infrastructure</li>
              <li>Private VPC</li>
            </ul>
          </div>

          {/* Designing Tools */}
          <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
            <h4 className="text-[var(--color-brand-text-muted)] uppercase font-bold tracking-wider mb-4 border-b border-[var(--color-brand-border)] pb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" /> Designing Tools
            </h4>
            <ul className="text-left space-y-2 font-bold text-base">
              <li>Figma</li>
              <li>Canva</li>
              <li>Adobe tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section
        id="services"
        className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-8 md:p-20 shadow-sm border border-[var(--color-brand-border)] text-center"
      >
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-widest uppercase mb-4 opacity-10">
            + SERVICES +
          </h2>
          <p className="text-lg font-bold text-[var(--color-brand-text-muted)]">
            Services catered to helping you reach new heights in your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[var(--color-brand-bg)] rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mb-8">
              <Palette className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-2xl font-bold font-display uppercase tracking-wider mb-4">
              UX/UI Design
            </h4>
            <p className="text-[var(--color-brand-text-muted)] leading-relaxed font-medium">
              My designs grow with your business. Using Figma and Adobe tools, I
              gather insights to design interfaces that accomplish your goals
              and engage users seamlessly.
            </p>
          </div>

          <div className="p-8 bg-blue-500 text-white rounded-[2rem] shadow-xl md:-translate-y-8 hover:-translate-y-10 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-sm mb-8 backdrop-blur-md">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold font-display uppercase tracking-wider mb-4">
              Web Developer
            </h4>
            <p className="text-blue-50 leading-relaxed font-medium">
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on robust architectures using Node.js, NextJS,
              and Postgres.
            </p>
          </div>

          <div className="p-8 bg-[var(--color-brand-bg)] rounded-[2rem] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mb-8">
              <Layers className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-2xl font-bold font-display uppercase tracking-wider mb-4">
              DevOps & Cloud
            </h4>
            <p className="text-[var(--color-brand-text-muted)] leading-relaxed font-medium">
              I set up automated CI/CD pipelines, Docker environments, and
              Terraform scripts to deploy effectively to AWS and Azure securely.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORKS */}
      <section id="works" className="flex flex-col gap-8">
        <div className="text-center my-[46px]">
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-widest uppercase opacity-10">
            + PROJECTS +
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* E-Commerce Platform */}
          <Link
            href="/projects/e-commerce-platform"
            className="group relative block bg-[var(--color-brand-card)] rounded-[2.5rem] p-10 overflow-hidden border border-[var(--color-brand-border)] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[250px] flex flex-col justify-end cursor-pointer"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-2 group-hover:text-blue-500 transition-colors">
                E-Commerce Platform
              </h3>
              <p className="text-[var(--color-brand-text-muted)] font-bold mb-4">
                TechnoCIS
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] pt-2">
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Angular
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Bootstrap CSS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    NestJS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    MySQL
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    AWS S3
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* AYRA – Learning Management System */}
          <Link
            href="/projects/ayra-lms"
            className="group relative block bg-[var(--color-brand-card)] rounded-[2.5rem] p-10 overflow-hidden border border-[var(--color-brand-border)] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[250px] flex flex-col justify-end cursor-pointer"
          >
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-2 group-hover:text-purple-500 transition-colors">
                AYRA – LMS
              </h3>
              <p className="text-[var(--color-brand-text-muted)] font-bold mb-4">
                TechnoCIS
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] pt-2">
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Angular
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Tailwind CSS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    NestJS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    PostgreSQL
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Vimeo
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Opensource Services
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Assessment Platform */}
          <Link
            href="/projects/assessment-platform"
            className="group relative block bg-[var(--color-brand-card)] rounded-[2.5rem] p-10 overflow-hidden border border-[var(--color-brand-border)] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[250px] flex flex-col justify-end cursor-pointer"
          >
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-2 group-hover:text-green-500 transition-colors">
                Assessment Platform
              </h3>
              <p className="text-[var(--color-brand-text-muted)] font-bold mb-4">
                TechnoCIS
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] pt-2">
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Angular
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Tailwind CSS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    NestJS
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    PostgreSQL
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Opensource Services
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* EMR */}
          <Link
            href="/projects/emr"
            className="group relative block bg-[var(--color-brand-card)] rounded-[2.5rem] p-10 overflow-hidden border border-[var(--color-brand-border)] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[250px] flex flex-col justify-end cursor-pointer"
          >
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-2 group-hover:text-orange-500 transition-colors">
                EMR System
              </h3>
              <p className="text-[var(--color-brand-text-muted)] font-bold mb-4">
                Neurealm Private Limited
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] pt-2">
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    Backbone.js
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    .NET Web API
                  </span>
                  <span className="bg-[var(--color-brand-bg)] px-3 py-1 rounded-full border border-[var(--color-brand-border)]">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 text-center text-[var(--color-brand-text-muted)] font-semibold text-sm">
        <h2 className="text-3xl md:text-5xl font-black font-display tracking-widest uppercase mb-10 text-[var(--color-brand-text)] flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-[var(--color-brand-text)]"></span>
          LET&apos;S WORK
          <span className="w-8 h-[2px] bg-[var(--color-brand-text)]"></span>
        </h2>
        <p>
          © {new Date().getFullYear()} Jayasurya Subramani. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
