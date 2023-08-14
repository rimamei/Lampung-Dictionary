"use client";

import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";

import Search from "./Search";

type ContentProps = {
  data: TranslationResponseType;
};

const Content = ({ data }: ContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang");
  const urlText = searchParams.get("text");

  const [text, setText] = useState("");
  const [lang, setLang] = useState({
    og: "lpg",
    tl: "id",
  });

  useEffect(() => {
    if (urlLang && urlText) {
      setText(urlText || "");
      setLang({
        og: urlLang || "id",
        tl: urlLang === "id" ? "lpg" : "id",
      });
    }
  }, [urlText, urlLang]);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    handleSearchChange(e.target.value);
  };

  const handleSearchChange = debounce((val: string) => {
    if (val) {
      console.log(lang);
      router.push(`/?lang=${lang.og}&text=${val}`);
    } else {
      router.push(`/?lang=${lang.og}`);
    }
  });

  const handleLangChange = () => {
    router.push(`/?lang=${lang.og === "id" ? "lpg" : "id"}`);
    setLang({
      og: lang.og === "id" ? "lpg" : "id",
      tl: lang.tl === "id" ? "lpg" : "id",
    });
    setText("");
  };

  let tl = "";
  const notFoundMessage = "Kata tidak ditemukan";

  if (text) {
    if (data.message === "Data is not found") {
      tl = notFoundMessage;
    } else if (lang.tl === "id") {
      tl = data?.data[0]?.idkata ?? notFoundMessage;
    } else if (lang.tl === "lpg") {
      tl = data?.data[0]?.lpgkata ?? notFoundMessage;
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
      <div className="md:w-1/2">
        <Search
          lang={lang.og}
          placeholder="Masukkan text..."
          onChange={handleTextChange}
          value={text}
        />
      </div>
      <div className="h-fit w-fit cursor-pointer rounded-full bg-primary p-2">
        <LiaExchangeAltSolid
          size={20}
          className="mx-4 rotate-90 text-white md:rotate-0"
          onClick={handleLangChange}
        />
      </div>
      <div className="md:w-1/2">
        <Search
          lang={lang.tl}
          placeholder="Terjemahan"
          disabled={true}
          value={tl}
        />
      </div>
    </div>
  );
};

export default Content;
