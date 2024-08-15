"use client";

import { companies } from "@/constants";
import React, { useState } from "react";
import Article from "./Article";

const Articles = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("AAPL");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const selectedCompanyName =
    companies.find((c) => c.symbol === selectedSymbol)?.name || "Apple";

  // useEffect(() => {
  //   const getArticles = async () => {
  //     setLoading(true);
  //     try {
  //       const fetchedArticles = await fetchArticles(selectedSymbol);
  //       setArticles(fetchedArticles);
  //     } catch (error) {
  //       console.error("Failed to fetch articles", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getArticles();
  // }, [selectedSymbol]);

  return (
    <section id="news" className="my-20 max-w-6xl mx-auto scroll-mt-[150px]">
      <h2
        className="text-4xl font-bold mb-8 text-center mx-5
      max-sm:text-3xl"
      >
        Latest Updates on{" "}
        <span className="text-primary">{selectedCompanyName}</span>
      </h2>
      <ul
        className="flex flex-wrap justify-center gap-4 text-md
       mb-10 font-medium mx-5"
      >
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
      <Article loading={loading} />
    </section>
  );
};

export default Articles;
