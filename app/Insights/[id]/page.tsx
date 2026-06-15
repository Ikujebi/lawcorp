import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageProps, LegalInsight } from "@/types/types";

export default async function InsightPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const res = await fetch(
    `https://legal.lumminalaw.com/api/public/insights/${id}`,
    { cache: "no-store" }
  );

  console.log("Insight ID:", id);
console.log("Status:", res.status);

  if (!res.ok) {
    notFound();
  }

  const insight: LegalInsight = await res.json();

  const publishedDate = insight.date
    ? new Date(insight.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const hasImages = Array.isArray(insight.images) && insight.images.length > 0;
  const heroImage = hasImages ? (insight.images?.[0] ?? null) : null;

  return (
    <main className="bg-[#faf9f8] min-h-screen text-gray-900 antialiased selection:bg-[#F4C430]/30 selection:text-[#5F021F]">
      
      {/* 1. EDITORIAL HEADER (Text-first approach eliminates contrast and clipping bugs) */}
       <header
  className="relative border-b border-gray-100 pt-16 pb-12 md:pt-24 md:pb-16 bg-cover bg-center"
  
  
>

        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7E7CE]/50 shadow-xl px-3 py-1 text-xs font-semibold tracking-wider text-[#5F021F] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4C430]" />
            Lummina Law Insight
          </div>

          <h1 className="mt-6 text-2xl sm:text-2xl md:text-2xl lg:text-6xl font-serif font-black text-[#5F021F] tracking-tight leading-[1.15]">
            {insight.title}
          </h1>

          {/* AUTHOR & METADATA SECTION */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#5F021F] flex items-center justify-center text-xs font-bold text-[#F4C430] shadow-inner">
                LL
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Lummina Law Team</p>
                <p className="text-xs text-gray-500">Legal Analysis & Strategy</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <time dateTime={insight.date}>{publishedDate}</time>
              <span className="text-gray-300">•</span>
              <span className="font-medium text-[#5F021F] bg-[#5F021F]/5 px-2.5 py-0.5 rounded-md text-xs">5 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO IMAGE CANVAS */}
      {heroImage && (
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <div className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden rounded-3xl shadow-xl shadow-gray-200/40">
            <Image
              src={heroImage}
              alt={insight.title}
              fill
              priority
              className="object-cover"
              sizes="(max-w-1200px) 100vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* 3. CONTENT & SIDEBAR GRID */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16 items-start">
          
          {/* CORE CONTENT BLOCK */}
          <div className="min-w-0">
            

            {/* MAIN ARTICLE BODY */}
            <article 
              className="
                prose 
                prose-base 
                sm:prose-lg 
                max-w-none 
                prose-headings:font-serif 
                prose-headings:font-bold 
                prose-headings:text-[#5F021F] 
                prose-p:text-gray-800 
                prose-p:leading-relaxed 
                prose-strong:text-[#5F021F] 
                prose-strong:font-bold
                prose-a:text-[#5F021F] 
                prose-a:underline 
                hover:prose-a:text-[#4A0118]
              "
            >
              <div className="whitespace-pre-line tracking-normal">
                {insight.content}
              </div>
            </article>
            

            {/* CLEAN RELATED GALLERY */}
            {hasImages && insight.images && insight.images.length > 1 && (
              <section className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#5F021F] mb-6">
                  Supporting exhibits & files
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {insight.images.slice(1).map((image: string, index: number) => (
                    <div 
                      key={index} 
                      className="relative h-64 overflow-hidden rounded-xl bg-white border border-gray-200/60 shadow-xs group"
                    >
                      <Image
                        src={image}
                        alt={`${insight.title} illustrative gallery asset ${index}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                        sizes="(max-w-768px) 100vw, 400px"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* INTERACTIVE MOBILE FOOTER UTILITIES */}
            <div className="mt-12 block lg:hidden space-y-3">
              {insight.pdfUrl && (
                <a
                  href={insight.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full rounded-xl bg-[#5F021F] px-5 py-4 font-semibold text-white shadow-sm active:scale-98 transition duration-150"
                >
                  Download Briefing PDF
                </a>
              )}
              <Link
                href="/insights"
                className="flex items-center justify-center w-full rounded-xl border border-gray-300 bg-white px-5 py-4 font-semibold text-gray-700 active:bg-gray-50 transition duration-150"
              >
                ← Back to Insights List
              </Link>
            </div>

            {/* PREMIUM LEGAL DISCLAIMER BOX */}
            <footer className="mt-16 rounded-2xl bg-gray-900 p-6 md:p-8 text-white">
              <h3 className="font-serif font-bold text-lg mb-3 tracking-wide text-[#F4C430]">
                Legal Disclaimer
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                This material is constructed solely for generalized educational and reporting use. It does not create an attorney-client operational standing or represent formal custom litigation instructions. Always connect directly with counsel before acting on dynamic insights.
              </p>
            </footer>
          </div>

          {/* DESKTOP FIXED UTILITY SIDEBAR */}
          <aside className="hidden lg:block sticky top-8 space-y-6">
            
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
              
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Document Metadata
              </h3>
              
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-400 text-xs">Classification</dt>
                  <dd className="font-bold text-[#5F021F] mt-0.5">Corporate Intelligence</dd>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <dt className="text-gray-400 text-xs">Publication Date</dt>
                  <dd className="font-medium text-gray-800 mt-0.5">{publishedDate}</dd>
                </div>
              </dl>

              {insight.pdfUrl && (
                <a
                  href={insight.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-xl bg-[#5F021F] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4A0118] transition duration-200"
                >
                  Download Briefing PDF
                </a>
              )}
            </div>

            <Link
              href="/insights"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:border-gray-400 transition duration-200 shadow-2xs"
            >
              <span>←</span> Index Directory
            </Link>

            {/* DEEP INTRO CARD */}
            <div className="mb-12 rounded-2xl border border-gray-200/60 bg-white p-6 md:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#F4C430]" />
              <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                Official perspectives, breaking compliance notices, and structured modern litigation commentary from our firm's practicing partners.
              </p>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}