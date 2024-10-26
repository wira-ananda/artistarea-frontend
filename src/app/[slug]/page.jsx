// app/articles/[slug]/page.js
import React from "react";
import axios from "axios";
import Header from "@/app/components/Header";
import parse, { domToReact } from "html-react-parser";
import Footer from "../components/Footer";

const ArticleDetailPage = async ({ params }) => {
  const { slug } = params;

  const fetchArticle = async () => {
    try {
      const response = await axios.get(
        "https://abbscout-api.vercel.app/api/articles"
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch articles");
      }
      const articles = response.data;

      const article = articles.find((article) => {
        const formattedTitle = article.title[0]
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "");
        return formattedTitle === slug;
      });

      const contentEncoded = article["content:encoded"][0] || "";
      const imageUrls = [
        ...new Set(
          [...contentEncoded.matchAll(/<img[^>]+src="([^">]+)"/g)].map(
            (match) => match[1]
          )
        ),
      ];

      article.images = imageUrls.map((url) => ({ url }));

      return article;
    } catch (error) {
      console.error("Error fetching articles:", error);
      return null;
    }
  };

  const article = await fetchArticle();

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  const contentEncoded = article["content:encoded"][0] || "";

  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return <p className="mb-6">{domToReact(domNode.children)}</p>;
      }
      if (domNode.name === "figcaption") {
        return (
          <figcaption className="text-center mt-4 mb-8 text-[1.8rem]">
            {domToReact(domNode.children)}
          </figcaption>
        );
      }
    },
  };

  return (
    <>
      <Header gradient="textGradient2" />
      <div className="w-full mx-auto px-4 py-6">
        {" "}
        <div className="w-[90%] md:w-[60%] mx-auto">
          <h1 className="text-[4.3rem] font-bold mb-4">{article.title[0]}</h1>

          <div className="mt-4 text-black leading-relaxed text-[2.1rem]">
            {" "}
            {parse(contentEncoded, options)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetailPage;
