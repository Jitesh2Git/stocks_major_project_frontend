"use client";

import { auth } from "@/lib/firebase.config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Loader from "./loading";

const Dashbaord = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [signOut] = useSignOut(auth);

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
    const news = formData.get("text") as string;
    if (news) {
      console.log(news);
    } else {
      console.log(error);
    }
  };

  if (loading) <Loader />;

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
                src="/logo.jpg"
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
          Simply enter a news headline and we&apos;ll provide the probability of
          the stock price going up or down.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex items-end
        gap-3"
      >
        <input
          type="text"
          name="text"
          placeholder="Enter news headline"
          required
          className="py-3 px-4 border border-gray-300 rounded-md
          font-medium max-sm:w-[180px] text-ellipsis max-sm:text-sm
          outline-none focus:border-primary"
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
    </section>
  );
};

export default Dashbaord;
