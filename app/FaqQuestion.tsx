"use client";
import React from "react";
import { FaqProps } from "./Faq";
import { RiArrowRightSLine } from "@remixicon/react";
import { faqData } from "@/public/data/faq-data";

const FaqQuestion = ({
  activeFaq,
  handleFaqClick,
  faqValue,
}: {
  activeFaq: boolean;
  handleFaqClick: (index: string) => void;
  faqValue: FaqProps;
}) => {
  return (
    <div className="border-gray-500 border rounded-xl overflow-hidden">
      <button
        onClick={() => handleFaqClick(faqValue?.id)}
        className={`w-full flex justify-between items-center cursor-pointer p-4 outline-none ${
          activeFaq && "bg-gray-100"
        }`}
      >
        <p className="font-medium text-xl">{faqValue?.title}</p>
        <RiArrowRightSLine
          size={20}
          className={`${activeFaq ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`${
          activeFaq ? `max-h-[200px] py-4` : "max-h-0 overflow-hidden"
        } transition-all duration-300 px-4`}
      >
        {faqValue?.content}
      </div>
    </div>
  );
};
export default FaqQuestion;
