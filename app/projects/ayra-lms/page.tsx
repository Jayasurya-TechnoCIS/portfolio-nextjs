import Link from "next/link";
import { ArrowLeft, Server, Database, Code2, Cloud, CheckCircle } from "lucide-react";

export default function AyraLMS() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-[1000px] mx-auto text-[var(--color-brand-text)] font-sans">
      <Link href="/#works" className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity font-bold uppercase tracking-wider text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <div className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-[2.5rem] p-8 md:p-16 shadow-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4 text-purple-500">AYRA – LMS</h1>
          <p className="text-xl md:text-2xl text-[var(--color-brand-text-muted)] font-medium">Learning Management System delivered at TechnoCIS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 relative z-10">
          <div className="bg-[var(--color-brand-bg)] p-6 rounded-2xl border border-[var(--color-brand-border)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-text-muted)] mb-4 flex items-center gap-2 border-b border-[var(--color-brand-border)] pb-2"><Code2 className="w-4 h-4 text-purple-500" /> Tech Stack</h3>
            <ul className="space-y-3 font-bold">
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">Frontend</span> <span>Angular</span></li>
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">Backend</span> <span>NestJS</span></li>
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">Database</span> <span>PostgreSQL</span></li>
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">ORM</span> <span>MikroORM</span></li>
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">Object Storage</span> <span>AWS S3</span></li>
              <li className="flex justify-between items-center"><span className="text-[var(--color-brand-text-muted)] font-medium">Video Streaming</span> <span>Vimeo</span></li>
            </ul>
          </div>
          <div className="bg-[var(--color-brand-bg)] p-6 rounded-2xl border border-[var(--color-brand-border)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-text-muted)] mb-4 flex items-center gap-2 border-b border-[var(--color-brand-border)] pb-2"><Cloud className="w-4 h-4 text-purple-500" /> DevOps & Deployment</h3>
            <ul className="space-y-3 font-bold">
              <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Docker for containerization</li>
              <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> GitHub Actions for CI/CD automation</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 relative z-10 bg-[var(--color-brand-bg)] p-6 rounded-2xl border border-[var(--color-brand-border)]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-text-muted)] mb-4 flex items-center gap-2 border-b border-[var(--color-brand-border)] pb-2"><Server className="w-4 h-4 text-purple-500" /> Architecture Pattern</h3>
          <ul className="space-y-3 font-bold">
            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> Monolithic Architecture</li>
            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> Layered Architecture (3-Tier Architecture)</li>
            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> Controller → Service → Repository Pattern</li>
          </ul>
        </div>

        <div className="relative z-10 bg-[var(--color-brand-bg)] p-6 rounded-2xl border border-[var(--color-brand-border)]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-text-muted)] mb-4 flex items-center gap-2 border-b border-[var(--color-brand-border)] pb-2"><Database className="w-4 h-4 text-purple-500" /> Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Course creation and management</div>
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Student enrollment and progress tracking</div>
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Instructor and admin management</div>
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Assessments and quizzes</div>
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Certificate generation</div>
            <div className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-[var(--color-brand-text-muted)] shrink-0" /> Secure video delivery using Vimeo integration</div>
          </div>
        </div>
      </div>
    </main>
  );
}
