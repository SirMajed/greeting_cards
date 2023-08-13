import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
export default function GreetingCardItem({ soon, title, description, href }) {
  const router = useRouter();
  const handleRoute = () => {
    if (soon) return;
    router.push(href);
  };
  return (
    <div
      onClick={handleRoute}
      className={`glass max-w-sm cursor-pointer ${
        soon && "cursor-default"
      }  hover:bg-t1/10 transition-all px-6 py-5`}
    >
      <div className="flex flex-row-reverse gap-4 items-center justify-between">
        <div>
          <span className="text-base font-normal leading-4 text-button">
            {soon ? "قريباً *" : " بطاقات"}
          </span>
          <p className="text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">
            {title}
          </p>

          <p className="w-44 text-xs leading-none text-gray-500 pt-3 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="sm:mt-0 mt-5">
          <Image
            src="/images/openedEnvelope.svg"
            width="70"
            height="90"
            alt="envelope"
          />
        </div>
      </div>
    </div>
  );
}
