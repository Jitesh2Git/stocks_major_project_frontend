"use client";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { auth } from "@/lib/firebase.config";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [signInWithEmailAndPassword, userCredential, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ("use server");
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signInWithEmailAndPassword(email, password);

    if (result) {
      router.push("/");
    } else {
      switch (error?.code) {
        case "auth/user-disabled":
          setFormError("The user account has been disabled.");
          break;
        case "auth/invalid-credential":
          setFormError("Invalid credentials.");
          break;
        case "auth/user-not-found":
          setFormError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setFormError("Incorrect password.");
          break;
        default:
          setFormError(error?.message || "An unknown error occurred.");
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 flex flex-col justify-center 
      items-center px-4 md:px-8 bg-white"
      >
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo img"
            width={276}
            height={85}
            quality={95}
            priority
          />
        </Link>
        <div className="text-center mb-8 mt-14">
          <p className="text-3xl font-extrabold">Sign in</p>
          <p className="text-xl font-semibold text-gray-400 mt-3">
            Welcome back to Soft Stock!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <label htmlFor="email" className="flex flex-col font-bold">
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
              title="Please enter a valid email address"
              className="mt-1 p-3 border border-gray-300 rounded-md
              font-medium"
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col font-bold relative"
          >
            Password
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 
                rounded-md pr-10 font-medium"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center 
                pr-3 cursor-pointer"
                onClick={() => toggleShowPassword()}
              >
                {showPassword ? (
                  <FaRegEye size={22} className="text-primary" />
                ) : (
                  <FaRegEyeSlash size={22} className="text-slate-400" />
                )}
              </div>
            </div>
          </label>
          {formError && <p className="text-red-500">{formError}</p>}
          <button
            type="submit"
            className={`${
              error && "mt-0"
            } mt-4 px-4 py-3 font-semibold text-white bg-gradient-to-r 
        from-primary to-primary_light rounded-md hover:opacity-90`}
          >
            Sign in
          </button>
        </form>
        <div className="mt-4">
          <p className="font-semibold">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-1">
        <Image
          src="/signIn.jpg"
          alt="Sign In"
          width={2000}
          height={1500}
          quality={95}
          priority
          className="object-cover rounded-l-[50px]"
        />
      </div>
    </div>
  );
};

export default Login;
