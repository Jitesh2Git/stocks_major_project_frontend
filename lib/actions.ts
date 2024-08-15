"use server";

import axios from "axios";

export async function fetchArticles(symbol: string = "AAPL") {
  const {
    NEXT_PUBLIC_STOCK_NEWS_URL: baseUrl,
    NEXT_PUBLIC_RAPIDAPI_HOST: host,
    NEXT_PUBLIC_RAPIDAPI_KEY: key,
  } = process.env;

  if (!baseUrl || !host || !key) {
    throw new Error(
      "Environment variables for stock news are not properly defined."
    );
  }

  const url = `${baseUrl}?symbol=${symbol}&language=en`;

  const headers = {
    "x-rapidapi-host": host,
    "x-rapidapi-key": key,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.data.news.slice(0, 5);
  } catch (error) {
    throw new Error("Failed to fetch articles");
  }
}
