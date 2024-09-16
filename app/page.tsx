import { NewsFeed, Header, Hero, About, Footer } from "@/components";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <NewsFeed />
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
