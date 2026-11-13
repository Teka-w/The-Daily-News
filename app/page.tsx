import ArticleFeed from "@/components/ArticleFeed";
import data from "@/data/news.json";
import { Metadata } from "next";

const firstArticle = data[0];

export const metadata: Metadata = {
  openGraph: {
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    type: "website",
    siteName: "The Daily",
    images: [{ url: firstArticle.image, alt: firstArticle.imageAlt }],
  },
};

const Home = () => {
  return <ArticleFeed />;
};

export default Home;
