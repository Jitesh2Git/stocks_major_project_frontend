import { NewsFeed, Header, Hero } from "@/components";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <NewsFeed />
      </div>
    </main>
  );
};

export default Home;
