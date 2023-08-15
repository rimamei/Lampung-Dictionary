"use client";

import React from "react";

type SearchProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  lang: string;
  value: string;
  disabled?: boolean;
};

const Search = ({
  lang,
  placeholder,
  disabled,
  value,
  ...rest
}: SearchProps) => {
  return (
    <div>
      <h1 className="mb-2 w-full rounded-full border-primary bg-primary p-2 text-center text-white">
        {lang === "id" ? "Indonesia" : "Lampung"}
      </h1>
      <textarea
        placeholder={placeholder}
        className="min-h-[150px] w-full min-w-[269px] rounded-xl border border-gray-100 p-6 shadow outline-none"
        disabled={disabled}
        value={value}
        {...rest}
      ></textarea>
    </div>
  );
};

export default Search;
