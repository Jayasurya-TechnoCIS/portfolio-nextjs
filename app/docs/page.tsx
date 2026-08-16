import { Metadata } from "next";
import Link from "next/link";
import { getAllDocs, Docs } from "@/services/api";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Docs | Internal",
};

export default async function DocsListingPage() {
  const docs: Docs[] = await getAllDocs();
  
  // Filter only published docs
  const publishedDocs = docs.filter((doc) => doc.status === "published");

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto text-[var(--color-brand-text)] font-sans">
      <div className="bg-[var(--color-brand-card)] rounded-[2.5rem] p-6 md:p-12 relative shadow-sm border border-[var(--color-brand-border)] min-h-[85vh] flex flex-col">
        {/* Docs Header Content */}
        <div className="my-10 text-center md:text-left max-w-4xl">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-black font-display uppercase tracking-tighter mb-4 text-blue-500">
            Internal Documentation
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-muted)] font-medium leading-relaxed">
            Private documentation and API response data.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="flex-1 mt-6">
          {publishedDocs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-6 rounded-full mb-4">
                <BookOpen className="w-10 h-10 text-[var(--color-brand-text-muted)]" />
              </div>
              <h3 className="text-xl font-bold">No documents available</h3>
              <p className="text-[var(--color-brand-text-muted)] mt-2 font-medium">
                Check back later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedDocs.map((doc) => {
                const dateFormatted = new Date(doc.date_created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <article
                    key={doc.id}
                    className="group bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background light gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Meta Info */}
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand-text-muted)] mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={doc.date_created}>{dateFormatted}</time>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors line-clamp-2">
                        {doc.title}
                      </h2>

                      {/* Type and Project tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {doc.project && (
                          <span className="text-xs font-bold bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full uppercase tracking-wider">
                            {doc.project}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Link */}
                    <Link
                      href={`/docs/${doc.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-500 group/link"
                    >
                      View Document
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
          © {new Date().getFullYear()} Jayasurya Subramani. Private Internal Document.
        </footer>
      </div>
    </main>
  );
}
