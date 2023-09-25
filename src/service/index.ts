import { ParamsType } from "@/lib/type";

export const fetchSearchData = async ({ text, lang }: ParamsType) => {
  let q = "";
  if (text) {
    q = text.toLowerCase();
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/translations?text=${q}&lang=${lang ?? "id"
      }`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
