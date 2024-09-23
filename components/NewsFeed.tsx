"use client";

import { companies } from "@/constants";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import { ArticleType } from "@/lib/types";
import { fetchArticles } from "@/lib/actions";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const NewsFeed = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("AAPL");
  const [articles, setArticles] = useState<ArticleType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 6;

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

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section
      id="news"
      className="mb-14 mt-20 max-w-6xl mx-auto scroll-mt-[150px]"
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
      <Article articles={currentArticles} loading={loading} />
      {articles.length > 0 && (
        <div
          className="flex justify-between mt-10 items-center 
        bg-primary-light rounded-lg px-5"
        >
          <div
            onClick={handlePrev}
            className={`cursor-pointer text-3xl bg-gradient-to-tr
                 from-primary to-primary_light px-4 py-1 rounded ${
                   currentPage === 1 ? "text-gray-700" : "text-white"
                 }`}
          >
            <IoIosArrowRoundBack />
          </div>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <div
            onClick={handleNext}
            className={`cursor-pointer text-3xl bg-gradient-to-tr
                 from-primary to-primary_light px-4 py-1 rounded ${
                   currentPage === totalPages ? "text-gray-700" : "text-white"
                 }`}
          >
            <IoIosArrowRoundForward />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsFeed;
