"use client";

import Link from "next/link";
import { ChangeEvent, Fragment, useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
type ParamsType = {
  search: string;
  type: "id" | "lpg";
};

type DataType = {
  id: string;
  idkata: string;
  lpgaksara: string | null;
  lpgdialek: string | null;
  lpgkata: string | null;
};

export default function TranslationPage() {
  const [params, setParams] = useState<ParamsType>({ search: "", type: "id" });
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce(params.search, 500);

  const fetchSearchData = async ({ search, type }: ParamsType) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API
        }/api/translations?search=${search.toLowerCase()}&type=${type}`,
      );
      const result = await res.json();
      setData(result?.data);
      setIsLoading(false);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      fetchSearchData({ search: debouncedSearch, type: params.type });
    }
  }, [debouncedSearch]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setParams((prev) => ({ ...prev, search: value }));
  };

  const handleTypeChange = () => {
    setParams((prev) => ({
      search: "",
      type: prev.type === "id" ? "lpg" : "id",
    }));
    setData([]);
  };

  const language = [
    {
      name: "Lampung",
      type: "lpg",
    },
    {
      name: "Indonesia",
      type: "id",
    },
  ];

  function transformData(data: DataType[]): string {
    if (params.type === "id") {
      return data
        .map((item) => item.lpgkata)
        .filter((el) => el !== "")
        .join("; ");
    } else if (params.type === "lpg") {
      return data
        .map((item) => item.idkata)
        .filter((el) => el !== "")
        .join("; ");
    }

    return "";
  }

  const translationData =
    data.length > 0 ? transformData(data) : "Data not found";

  return (
    <div className="from-1% flex min-h-screen w-screen flex-col bg-white">
      <header className="bg-blur sticky top-0 border-b border-gray-100 bg-white shadow">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between p-4">
          <h4 className="text-black">
            Lampung - Indonesia <br />
            Translation
          </h4>
          <div>
            <Link
              href="https://github.com/rimamei"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto h-full w-full max-w-[1280px] flex-grow overflow-hidden bg-white">
        <div className="relative flex w-full flex-col items-center justify-center pt-24">
          <div className="mb-6 rounded-xl bg-violet-200 p-2">
            {language.map((lang, index) => (
              <Fragment key={index}>
                <button
                  className={`${
                    params.type === lang.type
                      ? " bg-violet-300 text-violet-600"
                      : ""
                  } rounded-lg px-4 py-2 text-base font-semibold`}
                  type="button"
                  onClick={handleTypeChange}
                >
                  {lang.name}
                </button>
              </Fragment>
            ))}
          </div>
          <div className="relative flex w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-2 text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="border-gray w-full rounded-full border bg-white py-2 pl-12 text-black shadow outline-none"
              placeholder="Masukan text..."
              onChange={handleChange}
              value={params.search}
            />
          </div>
          <div className="mt-12 min-h-[20vh] w-1/2 rounded-md border border-gray-200 bg-white p-4 shadow">
            <p className="text-black">Terjemahan:</p>
            {isLoading ? (
              <p className="text-black">Loading....</p>
            ) : (
              <p className="text-black">
                {translationData.length > 0
                  ? translationData
                  : "Data not found"}
              </p>
            )}
          </div>
        </div>
      </main>
      <footer className="mx-auto max-w-[1280px] flex-shrink-0 p-4">
        <p className="text-black"> &copy; 2023 by Rima Mei Handayani</p>
      </footer>
    </div>
  );
}
