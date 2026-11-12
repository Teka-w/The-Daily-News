import { ArticleCard } from "@/components/ArticleCard";
import { article } from "@/lib/article";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryColors } from "@/lib/category-colors";

export const instant = false;

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return article.map((article) => ({ slug: article.slug }));
};

export async function generateMetadata({ params }: ArticleDetailPageType): Promise<Metadata> {
  const { slug } = await params;

  const foundArticle = article.find((article) => article.slug === slug);

  if (!foundArticle) notFound();
  return {
    title: foundArticle.title,
    description: foundArticle.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: foundArticle.title,
      description: foundArticle.description,
      images: [{ url: foundArticle.image, alt: foundArticle.imageAlt }],
    },
  };
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const foundArticle = article.find((article) => article.slug === slug);

  if (!foundArticle) notFound();

  const related = article.filter((element) => foundArticle.category === element.category && foundArticle.id !== element.id);
  const categoryColor = categoryColors[foundArticle.category]
  return (
    <div>
      <main className="mx-auto w-full max-w-7xl px-5 pt-6 sm:px-8 lg:px-12">
        <nav className="flex flex-wrap items-center gap-3 border-b border-line pb-5 text-xs text-[#E2E2DA]">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#22241F] text-[12px]">
            ← All stories
          </Link>
          <span className="text-[#65675F]">/</span>
          <span className="text-[#65675F]">World</span>
          <span className="ml-auto hidden text-[10px] uppercase tracking-widest text-[#65675F] sm:block">The Daily Edit</span>
        </nav>
        <article>
          <header className="mx-auto max-w-5xl pt-10 pb-8 sm:pt-14 sm:pb-10">
            <div className="mb-5 flex items-center gap-3">
              <span className={`${categoryColor} rounded-md px-3 py-1.5 text-xs font-semibold ring-1 ring-inset`}>{foundArticle.category}</span>
              <span className="h-px w-10 bg-[#E2E2DA]"></span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#65675F]">The Daily</span>
            </div>
            <h1 className="max-w-4xl text-4xl leading-[1.12] font-bold tracking-tight text-[#0C0A09] sm:text-5xl lg:text-6xl">{foundArticle.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#57534E] sm:mt-6 sm:text-xl">{foundArticle.description}</p>
            <div className="mt-8 flex flex-col gap-15 border-t border-[#E2E2DA] pt-6 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-3.5">
                <span className={`${categoryColor} inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-1 ring-inset`}>
                  {foundArticle.author
                    .split(" ")
                    .map((i) => i[0])
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#65675F]">Written by</p>
                  <p className="mt-1 text-sm font-bold text-[#22241F] sm:text-base">{foundArticle.author}</p>
                </div>
              </div>
              <div className="flex items-center min-w-0 gap-16">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#65675F]">Published</div>
                  <div className="mt-1.5 text-[14px] text-[#22241F]">{foundArticle.date}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#65675F]">Reading Time</div>
                  <div className="mt-1.5 text-[14px] text-[#22241F]">1 min read</div>
                </div>
              </div>
            </div>
          </header>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-stone-900/5 sm:aspect-[2/1] sm:rounded-3xl lg:aspect-[2.3/1]">
              <img className="w-full h-full object-cover" src={foundArticle.image} alt={foundArticle.imageAlt} />
            </div>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-2 px-1 text-[10px] leading-relaxed text-[#65675F]">
              <span>{foundArticle.imageAlt}</span>
              <span>Illustrative photography · Unsplash</span>
            </figcaption>
          </figure>
          <div className="mx-auto max-w-3xl py-10 sm:py-14">
            <div className="rounded-2xl border border-stone-200 bg-white px-6 py-7 shadow-sm sm:px-10 sm:py-10">
              <div className="mb-7 flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C44724]">━━ THE STORY</span>
              </div>
              <div>
                {foundArticle.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 font-serif text-lg leading-[1.9] text-[#44403C] last:mb-0 sm:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-center font-bold text-[#C44724] text-[16px]">• • •</div>
            </div>
            <p className="mt-4 px-2 text-center text-[11px] leading-relaxed text-[#65675F]">Fictional sample story · The Daily learning edition</p>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-orange-100 bg-orange-50/70 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold tracking-tight text-[#22241F]">A little more curiosity?</p>
                <p className="mt-1 text-sm text-[#65675F]">Your next good read is just around the corner.</p>
              </div>
              <Link className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#22241F] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#C44724]" href="/">
                All stories ↗
              </Link>
            </div>
          </div>
        </article>
        <section className="border-t border-line pt-10 pb-16 text-[#E2E2DA]">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#C44724]">KEEP YOUR CURIOSITY GOING</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#22241F]">More to discover.</h2>
            </div>
            <span className={`${categoryColor} rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset`}>More in {foundArticle.category}</span>
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArticleDetailPage;
