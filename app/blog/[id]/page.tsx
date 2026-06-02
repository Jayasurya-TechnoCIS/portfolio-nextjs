import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import { getBlogById } from "@/services/api";
import { marked } from "marked";

interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Jayasurya Subramani",
    };
  }

  return {
    title: `${blog.title} | Blog | Jayasurya Subramani`,
    description: blog.Short_description,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog || blog.status !== "published") {
    notFound();
  }

  const dateFormatted = new Date(blog.date_created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Parse markdown content safely to HTML
  const parsedContent = await marked.parse(blog.content);

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-[1000px] mx-auto text-[var(--color-brand-text)] font-sans">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity font-bold uppercase tracking-wider text-sm text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text)]"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <article className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-[2.5rem] p-4 sm:p-8 md:p-16 shadow-sm relative overflow-hidden">
        {/* Decorative background light elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Header Section */}
        <header className="relative z-10 mb-12 border-b border-[var(--color-brand-border)] pb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand-text-muted)] mb-4">
            <Calendar className="w-4 h-4" />
            <time dateTime={blog.date_created}>{dateFormatted}</time>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter mb-6 text-blue-500 leading-tight">
            {blog.title}
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-brand-text-muted)] font-medium leading-relaxed italic">
            {blog.Short_description}
          </p>
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
