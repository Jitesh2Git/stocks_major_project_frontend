"use client";

import { companies } from "@/constants";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import { ArticleType } from "@/lib/types";
import { fetchArticles } from "@/lib/actions";

const NewsFeed = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("AAPL");
  const [articles, setArticles] = useState<ArticleType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const selectedCompanyName =
    companies.find((c) => c.symbol === selectedSymbol)?.name || "Apple";

  // useEffect(() => {
  //   const clearCacheOnRefresh = () => {
  //     sessionStorage.clear();
  //   };

  //   window.addEventListener("beforeunload", clearCacheOnRefresh);

  //   const cachedArticles = sessionStorage.getItem(selectedSymbol);

  //   if (cachedArticles) {
  //     setArticles(JSON.parse(cachedArticles));
  //     setLoading(false);
  //   } else {
  //     const getArticles = async () => {
  //       setLoading(true);
  //       try {
  //         const fetchedArticles = await fetchArticles(selectedSymbol);
  //         setArticles(fetchedArticles);
  //         sessionStorage.setItem(
  //           selectedSymbol,
  //           JSON.stringify(fetchedArticles)
  //         );
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     getArticles();
  //   }

  //   return () => {
  //     window.removeEventListener("beforeunload", clearCacheOnRefresh);
  //   };
  // }, [selectedSymbol]);

  return (
    <section
      id="news"
      className={`${
        loading && "mb-20"
      } mt-20 max-w-6xl mx-auto scroll-mt-[150px]`}
    >
      <h2 className="text-4xl font-bold mb-8 text-center mx-5 max-sm:text-3xl">
        Latest Updates on{" "}
        <span className="text-primary">{selectedCompanyName}</span>
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 text-md mb-10 font-medium mx-5">
        {companies.map((company) => (
          <li
            className={`rounded-lg px-5 py-3 shadow-md cursor-pointer 
              transition-all duration-300 ${
                company.symbol === selectedSymbol
                  ? "bg-gradient-to-r from-primary to-primary_light text-white shadow-primary/50"
                  : "bg-primary_light/10 text-gray-800 shadow-primary_light/30"
              }`}
            key={company.symbol}
            onClick={() => setSelectedSymbol(company.symbol)}
          >
            {company.name}
          </li>
        ))}
      </ul>
      <Article articles={articles} loading={loading} />
    </section>
  );
};

export default NewsFeed;
