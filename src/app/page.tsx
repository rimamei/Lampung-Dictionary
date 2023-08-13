import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fetchSearchData = async ({ text, lang }: ParamsType) => {
  let q = "";
  if (text) {
    q = text.toLowerCase();
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/translations?text=${q}&lang=${
      lang ?? "id"
    }`,
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
    <div className="from-1% flex min-h-screen w-screen flex-col bg-white">
      <Header />
      <main className="mx-auto h-full w-full max-w-[1280px] flex-grow overflow-hidden bg-white px-6 pt-24">
        <Content data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default TranslationPage;
