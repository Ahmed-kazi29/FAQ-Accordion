"use client";

import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

export interface FaqProps {
  id: string;
  title: string;
  content: string;
}

const Faq = ({ faqData }: { faqData: FaqProps[] }) => {
  const [activeFaq, setActiveFaq] = useState<null | string>(null);

  const handleFaqClick = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-2">
      {faqData.map((item) => (
        <FaqQuestion
          key={item.id}
          activeFaq={activeFaq === item.id}
          handleFaqClick={handleFaqClick}
          faqValue={item}
        />
      ))}
    </div>
  );
};

export default Faq;
