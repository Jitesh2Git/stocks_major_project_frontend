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
      max-md:text-[16px] text-zinc-500"
      >
        Our approach combines real-time news analysis with stock market data to
        deliver actionable predictions. Discover how headlines can influence
        stock prices and optimize your investments.
      </p>
    </section>
  );
};

export default Hero;
