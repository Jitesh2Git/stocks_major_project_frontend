export const links = [
  {
    name: "News",
    hash: "#news",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const companies = [
  { name: "Apple", symbol: "AAPL" },
  { name: "Amazon", symbol: "AMZN" },
  { name: "Tesla", symbol: "TSLA" },
  { name: "Google", symbol: "GOOGL" },
  { name: "Microsoft", symbol: "MSFT" },
] as const;

export const mockArticles = [
  {
    article_title:
      "Buffett's first big semiconductor investment is a bet on Apple's future",
    article_url:
      "https://www.cnbc.com/2022/11/19/buffetts-first-big-semiconductor-investment-is-a-bet-on-apples-future.html",
    article_photo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_E16XvCVCiSgCDPLSW9pGpu245GtpzQat47IgtPgE6pVjFXBGzohJTv7F0A",
    source: "CNBC",
    post_time_utc: "2022-11-19 12:56:34",
  },
  {
    article_title:
      "How Warren Buffett Made a Bet on Apple Without Buying More Apple Stock",
    article_url:
      "https://www.fool.com/investing/2022/11/18/how-warren-buffett-bet-apple-without-apple-stock/",
    article_photo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjC91x5fpDQhwcWjI0M_txULcLwx4rhvI1EZJv0XRRp-1k-cFsKWTBy2coNY",
    source: "The Motley Fool",
    post_time_utc: "2022-11-18 12:11:00",
  },
  {
    article_title:
      "Chinese Government Steps In to Help an Apple iPhone Factory",
    article_url:
      "https://www.nytimes.com/2022/11/18/business/apple-foxconn-china.html",
    article_photo_url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYy0msXB5s6b8xkrP2ZGfoFN-NzesNI97BCqn2TxJGLGDNMZcS_sIZFc1VOHc",
    source: "The New York Times",
    post_time_utc: "2022-11-18 11:44:59",
  },
  {
    article_title: "iPhone Data Changes Are Biggest Cause of Meta ($META) Woes",
    article_url:
      "https://www.bloomberg.com/news/articles/2022-11-17/iphone-data-changes-are-biggest-cause-of-meta-meta-woes",
    article_photo_url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmsejNbUl-XtHCIx5BxbQe8hxjXI7VXEu2ltYmc3KExAifyH5QAdV_Xhku9no",
    source: "Bloomberg.com",
    post_time_utc: "2022-11-17 10:00:14",
  },
  {
    article_title:
      "Why Apple's secrecy about its metaverse plans is looking smarter every day",
    article_url:
      "https://www.fastcompany.com/90812090/apple-strategic-silence-metaverse-vr-headset",
    article_photo_url:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgElq-_Axw-jDxZ9wU1-qeE4uJoeq_yEkPdW2KVXxVvdyF6RWGDEbq5VBD0v4",
    source: "Fast Company",
    post_time_utc: "2022-11-18 09:30:00",
  },
  {
    article_title:
      "Apple Shares Deadlines for Ordering Gifts in Time for the Holidays",
    article_url:
      "https://www.macrumors.com/2022/11/17/apple-holiday-shipping-deadlines-2022/",
    article_photo_url:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1-k5Iuqp2VeIv-fBTDnEkfHi8br0jPjraYVRErTb29OekuMs19FiVYmr1txM",
    source: "MacRumors",
    post_time_utc: "2022-11-17 15:13:57",
  },
  {
    article_title:
      "You'll Never Guess the Top-Performing Stock of the Last 20 Years - Apple (NASDAQ:AAPL), Coca-Cola (NYSE:K",
    article_url:
      "https://www.benzinga.com/startups/22/11/29786681/youll-never-guess-the-top-performing-stock-of-the-last-20-years",
    article_photo_url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQq4aF9juX296RFAlcmj1WbyZXuyiR1vuuMe6bjaQY6t_rvmSBsWwmr6vvAFRw",
    source: "Benzinga",
    post_time_utc: "2022-11-18 16:03:15",
  },
  {
    article_title: "AAPL Stock: Apple iPhone 14 Pro Shortages Continue",
    article_url:
      "https://www.investors.com/news/technology/aapl-stock-apple-iphone-14-pro-shortages-continue/",
    article_photo_url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYy0msXB5s6b8xkrP2ZGfoFN-NzesNI97BCqn2TxJGLGDNMZcS_sIZFc1VOHc",
    source: "Investor's Business Daily",
    post_time_utc: "2022-11-18 21:20:00",
  },
  {
    article_title:
      "Why Apple Is The Only FAANG Stock Worth Buying (NASDAQ:AAPL)",
    article_url:
      "https://seekingalpha.com/article/4558460-why-apple-is-the-only-faang-stock-worth-buying",
    article_photo_url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHgf5lXQsBwA3C0c46e7HPP7773uOBvzBPMFK970fzkyaGrIUnSAjTEm1rapc",
    source: "Seeking Alpha",
    post_time_utc: "2022-11-16 18:26:00",
  },
  {
    article_title:
      "We tried Apple's new SOS tool for when you don't have cell service",
    article_url:
      "https://www.cnn.com/2022/11/15/tech/apple-emergency-sos-via-satellite-how-it-works/index.html",
    article_photo_url:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRM-PAtHTZ6WU096jmA2IOHffwr0mPaS6FmzHD6PQkalVtjCZpA2OHnFX2kxgE",
    source: "CNN",
    post_time_utc: "2022-11-15 16:22:00",
  },
  {
    article_title: "Apple stock bucks Big Tech downdraft for the year",
    article_url:
      "https://finance.yahoo.com/video/apple-stock-bucks-big-tech-150213498.html",
    article_photo_url:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUqJYdx2tA_kI42WqW6FaWsqdUCJVdnB-DCVF-z5r1PDdM6E9PEOiiNd--r3Q",
    source: "Yahoo Finance",
    post_time_utc: "2022-11-18 15:02:13",
  },
  {
    article_title: "Apple launches rare deal on MacBook Pro for business",
    article_url:
      "https://www.techradar.com/news/apple-launches-rare-deal-on-macbook-pro-for-business",
    article_photo_url:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPLOMON-9mffqJULexTDB0ob5HGplGDz15svbTKeKB6f7kfb-pFaAhNdhLYi0",
    source: "TechRadar",
    post_time_utc: "2022-11-16 02:42:18",
  },
] as const;
