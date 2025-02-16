import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function FAQ({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-[80%] flex flex-col gap-2.5">
      <div
        className={`bg-third rounded-lg p-4 mt-1 w-full relative transition-all duration-400 ${
          isExpanded ? "min-h-[100px]" : "min-h-[40px]"
        }`}
      >
        <div className="font-body-bold mr-4 sm:mr-0">{question}</div>
        {isExpanded && <div className="mt-2 font-body">{answer}</div>}
        <div
          className="absolute top-3 sm:top-4 right-2 sm:right-3 cursor-pointer"
          role="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <svg
              width="35"
              height="35"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 11L22 33"
                stroke="#293B2B"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M33 22L11 22"
                stroke="#293B2B"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="35"
              height="35"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 16.5L22 27.5L11 16.5"
                stroke="#293B2B"
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
