"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { lampung_v2 } from "@/app/fonts";
import { convertToLampungAlphabet } from "@/utils/convertToLampungAlphabet";
import { cn } from "@/utils/style";

type TranslateOutputProps = {
  lang: string;
  text: string;
  data: TranslationResponseType;
};

const TranslateOutput = ({ lang, data, text }: TranslateOutputProps) => {
  const [isExpand, setIsExpand] = useState(false);

  let lengthOtherTrans = data.data.length;

  if (data.data.length > 3) {
    lengthOtherTrans = 4;
  }

  return (
    <div>
      <h1 className="mb-2 w-full rounded-full border-primary bg-primary p-2 text-center text-white">
        {lang === "id" ? "Indonesia" : "Lampung"}
      </h1>
      <div className="min-h-[150px] w-full min-w-[269px] rounded-xl border border-gray-100 bg-gray-100 p-6 shadow outline-none">
        {/* mapping translation data 
            Check text because there's no data cleansing on db
        */}
        {data.message !== "Data is not found" && text ? (
          <>
            <p>
              {lang === "id" ? data.data[0].idkata : data.data[0].lpgkata}{" "}
              {lang === "lpg" && data.data[0]?.lpgdialek && (
                <span className="font-bold">
                  (Dialek {data.data[0]?.lpgdialek ?? "-"})
                </span>
              )}
            </p>
            {lang === "lpg" && data?.data[0]?.lpgkata ? (
              <p className={cn("text-4xl", lampung_v2.className)}>
                {convertToLampungAlphabet(data?.data[0]?.lpgkata)}
              </p>
            ) : (
              ""
            )}
          </>
        ) : data.message === "Data is not found" && text ? (
          <p>Kata tidak ditemukan</p>
        ) : (
          <p className="text-gray-400">Terjemahan</p>
        )}
      </div>

      {/* if there's other translation data */}
      {data.message !== "Data is not found" && text && data.data.length > 1 && (
        <div className="mt-4 w-full min-w-[269px] rounded-xl border border-gray-100 bg-gray-100 p-6 shadow outline-none">
          <div>
            <div className="flex items-start justify-between">
              <p className="mb-4">Terjemahan lainnya</p>

              {/* if translations data is more than 4 then render expand */}
              {data.data.length > 4 && (
                <div
                  className="flex cursor-pointer items-center rounded-md bg-gray-300 p-1 text-gray-500"
                  onClick={() => setIsExpand(!isExpand)}
                >
                  <p className="mr-2 h-fit w-fit text-xs">
                    Lebih {isExpand ? "sedikit" : "banyak"}
                  </p>
                  {isExpand ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              )}
            </div>
            <ul className="mx-4 space-y-3">
              {data.data
                .slice(1, isExpand ? data.data.length : lengthOtherTrans)
                .map((item) => (
                  <li className="list-disc" key={item.id}>
                    <p>
                      {lang === "id" ? item.idkata : item.lpgkata}{" "}
                      {lang === "lpg" && item?.lpgdialek && (
                        <span className="font-bold">
                          (Dialek {item?.lpgdialek ?? "-"})
                        </span>
                      )}
                    </p>
                    {lang === "lpg" ? (
                      <span className={cn("text-4xl", lampung_v2.className)}>
                        {convertToLampungAlphabet(
                          item?.lpgaksara ?? item?.lpgkata ?? "",
                        )}
                      </span>
                    ) : null}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateOutput;
