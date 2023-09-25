import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Translation from "@/features/Translation";
import { ParamsType } from "@/lib/type";
import { fetchSearchData } from "@/service";

type TranslationPageProps = { searchParams: ParamsType };

const TranslationPage = async (props: TranslationPageProps) => {
  const lang = props?.searchParams?.lang;
  const text = props?.searchParams?.text;

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
