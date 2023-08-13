import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-blur sticky top-0 border-b border-gray-100 bg-white shadow">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/siger.svg" alt="siger" className="mr-4" />
          <h1 className="font-semibold">
            Kamus <br /> Bahasa Lampung
          </h1>
        </div>
        <div>
          <Link
            href="https://github.com/rimamei"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <BsGithub size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
