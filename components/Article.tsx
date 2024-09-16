import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { ArticleType } from "@/lib/types";
import { mockArticles } from "@/constants";

interface ArticleProps {
  articles: ArticleType[];
  loading: boolean;
}

const Article = ({ articles, loading }: ArticleProps) => {
  const formatDate = (dateString: string) => {
    return moment(dateString).format("Do MMM YYYY");
  };

  return (
    // <div className={`min-h-[200px] ${!loading && "mb-20"}`}>
    //   {loading ? (
    //     <p className="animate-pulse text-lg text-primary text-center pt-20">
    //       Loading News Feed...
    //     </p>
    //   ) : articles.length > 0 ? (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mx-5">
    //       {articles?.map((article, index) => (
    //         <article
    //           key={index}
    //           className="flex flex-col bg-slate-100 rounded-xl h-full shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out w-full"
    //         >
    //           {article.article_photo_url && (
    //             <Image
    //               src={article.article_photo_url}
    //               alt={article.article_title}
    //               width={500}
    //               height={500}
    //               quality={95}
    //               className="h-56 w-full object-cover rounded-t-xl"
    //             />
    //           )}
    //           <div className="flex-1 flex flex-col p-4 justify-between">
    //             <h2 className="font-semibold mb-2 text-md max-sm:text-sm font-custom">
    //               {article.article_title}
    //             </h2>
    //             <footer className="text-xs text-end pt-5 italic text-zinc-500">
    //               <p>
    //                 {article.source} - {formatDate(article.post_time_utc)}
    //               </p>
    //             </footer>
    //           </div>
    //           <Link
    //             href={article.article_url}
    //             target="_blank"
    //             className="h-10 rounded-b-lg text-center bg-gradient-to-r from-primary to-primary_light text-white flex items-center justify-center"
    //           >
    //             Read More
    //           </Link>
    //         </article>
    //       ))}
    //     </div>
    //   ) : (
    //     <p className="text-center text-gray-500 pt-20 animate-pulse">
    //       No articles available :/
    //     </p>
    //   )}
    // </div>
    <div className={`min-h-[200px] ${!loading && "mb-20"}`}>
      {loading ? (
        <p className="animate-pulse text-lg text-primary text-center pt-20">
          Loading News Feed...
        </p>
      ) : mockArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mx-5">
          {mockArticles?.map((article, index) => (
            <article
              key={index}
              className="flex flex-col bg-slate-100 rounded-xl h-full shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out w-full"
            >
              {article.article_photo_url && (
                <Image
                  src={article.article_photo_url}
                  alt={article.article_title}
                  width={500}
                  height={500}
                  quality={95}
                  className="h-56 w-full object-cover rounded-t-xl"
                />
              )}
              <div className="flex-1 flex flex-col p-4 justify-between">
                <h2 className="font-semibold mb-2 text-md max-sm:text-sm font-custom">
                  {article.article_title}
                </h2>
                <footer className="text-xs text-end pt-5 italic text-zinc-500">
                  <p>
                    {article.source} - {formatDate(article.post_time_utc)}
                  </p>
                </footer>
              </div>
              <Link
                href={article.article_url}
                target="_blank"
                className="h-10 rounded-b-lg text-center bg-gradient-to-r from-primary to-primary_light text-white flex items-center justify-center"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 pt-20 animate-pulse">
          No articles available :/
        </p>
      )}
    </div>
  );
};

export default Article;
