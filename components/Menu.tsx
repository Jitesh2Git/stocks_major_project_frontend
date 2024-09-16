import Link from "next/link";
import React from "react";
import { links } from "@/constants";
import { MenuProps } from "@/lib/types";

const Menu = ({ user, handleSignOut, setIsOpen }: MenuProps) => {
  return (
    <div
      className="flex flex-col gap-3 font-semibold p-5 
    w-fit items-start lg:hidden"
    >
      {user && (
        <Link
          href="/dashboard"
          className="font-semibold text-white bg-gradient-to-tr 
    from-primary to-primary_light px-5 py-3 rounded-md
      hover:opacity-90"
        >
          Dashboard
        </Link>
      )}
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.hash}
          onClick={() => setIsOpen(false)}
          className="special_underline"
        >
          {link.name}
        </Link>
      ))}
      {user ? (
        <button onClick={handleSignOut} className="font-semibold">
          <p className="special_underline">Sign out</p>
        </button>
      ) : (
        <Link href="/login" className="font-semibold special_underline">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Menu;
