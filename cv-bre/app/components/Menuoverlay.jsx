import React from "react";
import Link from "next/link";

export const Menuoverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className="text-white text-2xl">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
