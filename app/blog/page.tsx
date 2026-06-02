import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllBlogs, Blog } from "@/services/api";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Jayasurya Subramani",
  description: "Insights, guides, and technical tutorials on software development, DevOps, and UI/UX design.",
};

export default async function BlogListingPage() {
  const blogs: Blog[] = await getAllBlogs();

  // Filter only published blogs
  const publishedBlogs = blogs.filter((blog) => blog.status === "published");

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto text-[var(--color-brand-text)] font-sans">
      <div className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-6 md:p-12 relative shadow-sm border border-[var(--color-brand-border)] min-h-[85vh] flex flex-col">
        {/* Navbar */}
        <SiteHeader />

        {/* Blog Header Content */}
        <div className="my-10 text-center md:text-left max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4 text-blue-500">
            Insights & Guides
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-muted)] font-medium leading-relaxed">
            Deep dives into full-stack development, server architectures, deployment automations, and UI solutions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="flex-1 mt-6">
          {publishedBlogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-full mb-4">
                <BookOpen className="w-10 h-10 text-[var(--color-brand-text-muted)]" />
              </div>
              <h3 className="text-xl font-bold">No articles published yet</h3>
              <p className="text-[var(--color-brand-text-muted)] mt-2 font-medium">
                Check back soon for new content!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedBlogs.map((blog) => {
                const dateFormatted = new Date(blog.date_created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <article
                    key={blog.id}
                    className="group bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background light gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Meta Info */}
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand-text-muted)] mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={blog.date_created}>{dateFormatted}</time>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm font-medium text-[var(--color-brand-text-muted)] leading-relaxed mb-6 line-clamp-3">
                        {blog.Short_description}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-500 group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info inside container */}
        <footer className="mt-20 pt-8 border-t border-[var(--color-brand-border)] text-center text-xs font-bold text-[var(--color-brand-text-muted)] uppercase tracking-widest">
          © {new Date().getFullYear()} Jayasurya Subramani. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
