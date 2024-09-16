import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 border border-zinc-300">
      <div
        className="max-w-7xl mx-auto text-zinc-500
      flex items-center justify-between text-sm
      max-sm:flex-col gap-2"
      >
        <p>© 2024 Soft Stock. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="#" className="hover:underline underline-offset-2">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline underline-offset-2">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
