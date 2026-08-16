import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getDocsById } from "@/services/api";
import { marked } from "marked";

interface DocPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { id } = await params;
  const doc = await getDocsById(id);

  if (!doc) {
    return {
      title: "Document Not Found | Internal Docs",
    };
  }

  return {
    title: `${doc.title} | Internal Docs`,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { id } = await params;
  const doc = await getDocsById(id);

  if (!doc || doc.status !== "published") {
    notFound();
  }

  const dateFormatted = new Date(doc.date_created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Parse markdown content safely to HTML
  const parsedContent = await marked.parse(doc.content);

  return (
    <main suppressHydrationWarning className="min-h-screen p-4 md:p-8 max-w-[400px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1500px] mx-auto text-[var(--color-brand-text)] font-sans">
      <Link
        href="/docs"
        className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity font-bold uppercase tracking-wider text-sm text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text)]"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Docs
      </Link>

      <article className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-[2.5rem] p-4 sm:p-8 md:p-16 shadow-sm relative overflow-hidden">
        {/* Decorative background light elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Header Section */}
        <header className="relative z-10 mb-12 border-b border-[var(--color-brand-border)] pb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand-text-muted)] mb-4">
            <Calendar className="w-4 h-4" />
            <time dateTime={doc.date_created}>{dateFormatted}</time>
          </div>

          <h1 className="text-lg md:text-3xl lg:text-5xl font-black font-display uppercase tracking-tighter mb-6 text-blue-500 leading-tight">
            {doc.title}
          </h1>

          <div className="flex gap-3 mt-4">
            {doc.project && (
              <span className="text-sm font-bold bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full uppercase tracking-wider border border-blue-500/20">
                {doc.project}
              </span>
            )}
          </div>
        </header>

        {/* Rendered Markdown Body Content */}
        <section
          className="relative z-10 markdown-content"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      </article>
    </main>
  );
}
