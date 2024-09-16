"use client";

import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Menu from "./Menu";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "@/lib/firebase.config";
import { links } from "@/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-10 bg-white transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-40">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo img"
                width={276}
                height={85}
                quality={95}
                priority
                className="w-[200px]"
              />
            </Link>
            <div
              className="flex items-center gap-10 font-semibold 
              max-lg:hidden"
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.hash}
                  className="special_underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-10">
            {user ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="font-semibold max-lg:hidden"
                >
                  <p className="special_underline">Sign out</p>
                </button>
                <Link
                  href="/dashboard"
                  className="font-semibold text-white bg-gradient-to-tr
                 from-primary to-primary_light px-5 py-3 rounded-md 
                 max-lg:hidden hover:opacity-90"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <Link
                href="/login"
                className="font-semibold text-white bg-gradient-to-tr
               from-primary to-primary_light px-5 py-3 rounded-md 
               max-lg:hidden hover:opacity-90"
              >
                Sign in
              </Link>
            )}
            {isOpen ? (
              <IoClose
                className="lg:hidden text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiOutlineMenuAlt3
                className="lg:hidden text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {isOpen && (
          <Menu
            user={user ?? null}
            handleSignOut={handleSignOut}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
