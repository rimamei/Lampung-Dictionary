"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";

import Search from "./Search";
import Translate from "./Translate";

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
    const { value } = e.target;

    setText(value);

    if (value) {
      router.push(`/?lang=${lang.og}&text=${value}`);
    } else {
      router.push(`/?lang=${lang.og}`);
    }
  };

  const handleLangChange = () => {
    router.push(`/?lang=${lang.og === "id" ? "lpg" : "id"}`);
    setLang({
      og: lang.og === "id" ? "lpg" : "id",
      tl: lang.tl === "id" ? "lpg" : "id",
    });
    setText("");
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/2">
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
      <div className="w-full md:w-1/2">
        <Translate lang={lang.tl} data={data} text={text} />
      </div>
    </div>
  );
};

export default Content;
