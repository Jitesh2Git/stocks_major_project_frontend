"use client";

import { auth } from "@/lib/firebase.config";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashbaord = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return (
    <div>
      {user && user.email}
      {error && error.message}
    </div>
  );
};

export default Dashbaord;
