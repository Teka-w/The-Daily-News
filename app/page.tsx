import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";
import { article } from "@/lib/article";
import { categoryColors } from "@/lib/category-colors";
import { Metadata } from "next";

const firstArticle = data[0];

export const generateMetadata:Metadata={
  openGraph:{
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    type: "website",
    siteName: "The Daily",
    images: [{url:firstArticle.image, alt:firstArticle.imageAlt}],
  }
}

const Home = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <main className="mx-auto w-full bg-[#FAF9F6] max-w-7xl px-5 sm:px-8 lg:px-12">
        <section className="py-10 pb-16">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#C44724]">
                STAY CURIOUS
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#22241F]">
                The latest stories.
              </h1>
            </div>
            <p className="hidden pb-1 text-xs text-[#65675F] md:block">
              Big ideas. Fresh voices. Worth your time.
            </p>
          </div>
          <div className="border-y border-line py-4 text-[#E2E2DA]">
            <div></div>
          </div>
          <div className="my-5 text-xs text-[#65675F]">
            20 stories to explore
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((article) => (
              <ArticleCard
                key={article.slug}
                id={article.id}
                slug={article.slug}
                title={article.title}
                description={article.description}
                category={article.category}
                image={article.image}
                imageAlt={article.imageAlt}
                author={article.author}
                date={article.date}
                content={article.content}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
