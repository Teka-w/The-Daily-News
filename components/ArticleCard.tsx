import Link from "next/link";
import { Clock } from "lucide-react";
import { categoryColors } from "@/lib/category-colors";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};
export const ArticleCard = (props: ArticleCardType) => {
  const { title, description, author, date, image, imageAlt, category, slug } = props;
  const categoryColor = categoryColors[category]
  const authorName = author.split(" ").map((i) => i[0]).join("")
  return (
    <Link href={`/news/${slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden border border-[#E7E5E4] flex flex-col h-full min-w-0 group shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:border-orange-300 motion-reduce:transform-none motion-reduce:transition-none">
        <div className="relative h-60 w-full">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
          <span className={`${categoryColor} absolute top-4 left-4 text-[10px] font-bold tracking-wider shadow-sm leading-[145%] ring-1 ring-inset px-[12px] py-[6px] rounded-full`}>
            {category}
          </span>
          <span className="absolute bottom-4 left-4 text-white text-[12px] flex gap-2">
            <Clock className="size-[14px]" />1 min read
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-[20px] leading-snug tracking-tight font-bold mb-2 text-[#1C1917] group-hover:text-[#C44724]">{title}</h3>
          <p className="text-[14px] leading-relaxed text-[#57534E] mt-3">{description}</p>
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between border-t border-[#E2E2DA] pt-4">
            <div className="flex items-center gap-3">
              <div className={`${categoryColor} w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[12px] ring-1 ring-inset`}>
                {authorName}
              </div>
              <div className="flex flex-col">
                <span className="text-[#292524] text-[12px] font-bold">{author}</span>
                <span className="text-[#78716C] text-[11px]">{date}</span>
              </div>
            </div>
            <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#FFF7ED] text-[#C44724] transition-colors group-hover:bg-orange-700 group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white motion-reduce:transition-none ">
              ↗
            </button>
          </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
