import { faqData } from "@/public/data/faq-data";
import Faq from "./Faq";

export default function Home() {
  const data = Object.values(faqData);
  const dataGroupBy = [];
  for (let i = 1; i < data.length; i += 3) {
    dataGroupBy.push({
      id: data[i],
      title: data[i + 1],
      content: data[i + 2],
    });
  }

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold">{faqData?.heading}</h1>
      <Faq faqData={dataGroupBy} />
    </div>
  );
}
