import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-20 scroll-mt-[150px]">
      <h2
        className="text-4xl font-bold mb-10 text-center 
      mx-5 max-sm:text-3xl"
      >
        How it <span className="text-primary">Works</span>
      </h2>
      <div
        className="flex items-center px-5
      justify-between max-w-5xl mx-auto gap-8
      max-lg:flex-col-reverse"
      >
        <ul className="flex-1 space-y-6">
          <li>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold max-sm:text-lg">
                Submit News Headline
              </h3>
              <p
                className="text-zinc-500 font-medium text-xl
              max-md:text-[18px]"
              >
                Enter a news headline and select company name.
              </p>
            </div>
          </li>
          <li>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold max-sm:text-lg">
                Analyze News Sentiment
              </h3>
              <p
                className="text-zinc-500 font-medium text-xl
              max-md:text-[18px]"
              >
                Our NLP sentiment analysis model determines the news sentiments.
              </p>
            </div>
          </li>
          <li>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold max-sm:text-lg">
                Predict Stock Impact
              </h3>
              <p
                className="text-zinc-500 font-medium text-xl
              max-md:text-[18px]"
              >
                Based on the sentiment, we&apos;ll provide a prediction of the
                stock price movement.
              </p>
            </div>
          </li>
        </ul>
        <video
          src="/how.mp4"
          autoPlay
          loop
          muted
          playsInline
          width="350"
          height="300"
          className="object-cover rounded-md flex-1 
          max-sm:w-[300px] md:w-[500px] lg:max-w-md"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default About;
