"use client";
import data from "@/data/news.json";
import { useState, MouseEvent } from "react";
import { ArticleCard } from "./ArticleCard";

const categories = ["All stories", ...new Set(data.map((article) => article.category))];

const ArticleFeed = () => {
  const [category, setCategory] = useState("All stories");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
  };

  const filtered = data.filter((article) => category === "All stories" || article.category === category);

  return (
    <div className="bg-[#FAF9F6]">
      <main className="mx-auto w-full bg-[#FAF9F6] max-w-7xl px-5 sm:px-8 lg:px-12">
        <section className="py-10 pb-16">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#C44724]">STAY CURIOUS</div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#22241F]">The latest stories.</h1>
            </div>
            <p className="hidden pb-1 text-xs text-[#65675F] md:block">Big ideas. Fresh voices. Worth your time.</p>
          </div>
          <div className="border-y border-line py-4 text-[#E2E2DA] flex flex-wrap gap-1">
            {categories.map((cate) => (
              <button id={cate} onClick={handleClick} key={cate} className={`cursor-pointer rounded px-3 py-2.5 text-xs text-[#65675F] transition-colors duration-250 ${cate === category ? "bg-[#22241F] text-white" : "hover:bg-green-100"}`}>
                {cate}
              </button>
            ))}
          </div>
          <div className="my-5 text-xs text-[#65675F]">20 stories to explore</div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
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

export default ArticleFeed;
