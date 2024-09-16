import React from "react";

const Hero = () => {
  return (
    <section className="p-5 text-center space-y-8 mt-8">
      <h1
        className="max-w-5xl mx-auto text-5xl font-bold 
      max-md:text-3xl"
      >
        Your Gateway to Stock Predictions Powered by{" "}
        <span className="text-primary">News Headlines</span>
      </h1>
      <p
        className="max-w-xl mx-auto font-medium text-xl 
      max-md:text-[18px] max-sm:text-[16px] text-zinc-500"
      >
        Leverage the power news headlines to determine sentiment and predict the
        impact on stock prices. Stay ahead of the market with real-time
        insights. Make informed decisions with data-driven predictions for stock
        performance.
      </p>
    </section>
  );
};

export default Hero;
