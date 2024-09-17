"use client";

import { auth } from "@/lib/firebase.config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Loader from "./loading";
import Select from "react-select";
import { companyOptions } from "@/lib/utils";
import axios from "axios";
import { PredictionType } from "@/lib/types";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [signOut] = useSignOut(auth);
  const [predictions, setPredictions] = useState<PredictionType | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_PREDICTIONS_API_URL;

  const handleScroll = () => {
    if (headerRef.current) {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        headerRef.current.classList.add("shadow-md");
      } else {
        headerRef.current.classList.remove("shadow-md");
      }
    }
  };

  if (loading) <Loader />;

  ("use server");
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ("use server");
    const formData = new FormData(e.currentTarget);
    const news = formData.get("news") as string;
    const ticker = formData.get("company") as string;

    if (news && ticker) {
      try {
        const response = await axios.post(`${apiUrl}/predict`, {
          headline: news,
          ticker: Number(ticker),
        });
        setPredictions(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (!loading && !user) {
      router.push("/login");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user, loading, router]);

  return (
    <section className="flex flex-col justify-center">
      <header
        ref={headerRef}
        className="sticky top-0 z-10 bg-white transition-shadow duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between p-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo img"
                width={276}
                height={85}
                quality={95}
                priority
                className="w-[200px] max-sm:w-[150px]"
              />
            </Link>
            <button onClick={handleSignOut} className="font-semibold">
              <p className="special_underline">Sign out</p>
            </button>
          </div>
        </div>
      </header>
      <div className="p-5 text-center space-y-4 mt-8">
        <h1
          className="max-w-5xl mx-auto text-5xl font-bold 
      max-md:text-3xl"
        >
          Track News Sentiment, Predict{" "}
          <span className="text-primary">Stock Prices</span>
        </h1>
        <p
          className="max-w-xl mx-auto font-medium text-xl 
      max-md:text-[18px] max-sm:text-[16px] text-zinc-500"
        >
          Simply enter a news headline and select the corresponding stock
          company, and we will provide you with the probability of market
          movement.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto w-full flex flex-col 
        items-center gap-3 px-5"
      >
        <input
          type="text"
          name="news"
          placeholder="Enter news headline"
          required
          className="py-[10px] px-4 border border-gray-300 rounded-md 
            font-medium w-full text-ellipsis outline-none
            focus:border-primary"
        />
        <Select
          name="company"
          options={companyOptions}
          isSearchable
          required
          placeholder="Select Company"
          className="w-full max-w-xs"
        />
        <button
          type="submit"
          className="px-5 py-3 font-semibold text-white bg-gradient-to-r 
        from-primary to-primary_light rounded-md hover:opacity-90
        max-sm:text-sm"
        >
          Analyze
        </button>
      </form>
      <div className="my-5 max-w-sm mx-auto">
        {predictions && (
          <div className="space-y-4">
            {Object.entries(predictions).map(([key, value]) => (
              <div
                key={key}
                className="p-4 bg-white border border-gray-300 
                rounded-md shadow-md mb-4"
              >
                <h3 className="text-lg font-semibold capitalize">
                  {key.replace(/_/g, " ")}
                </h3>
                <p className="text-xl font-bold text-primary">{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
