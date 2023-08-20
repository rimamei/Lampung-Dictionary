import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Translation from "@/features/Translation";

const fetchSearchData = async ({ text, lang }: ParamsType) => {
  let q = "";
  if (text) {
    q = text.toLowerCase();
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/translations?text=${q}&lang=${
      lang ?? "id"
    }`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const TranslationPage = async ({ searchParams }: any) => {
  const { lang, text } = searchParams;
  const data = await fetchSearchData({ text, lang });

  return (
    <div className="prose dark:prose-invert flex min-h-screen w-screen flex-col">
      <Header />
      <main className="mx-auto h-full w-full max-w-[1280px] flex-grow overflow-hidden px-6 pt-24">
        <Translation data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default TranslationPage;
