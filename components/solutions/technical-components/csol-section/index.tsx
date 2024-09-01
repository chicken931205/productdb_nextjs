import React from "react";

export default function CsolSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-4 px-4 md:flex-row md:px-8">
      <div className="w-full p-4 text-black dark:text-white md:w-1/2 md:p-8">
        <h1 className="pb:3 text-xl   font-bold md:pb-6 ">
          Built for productivity, powered by relevance.
        </h1>
        <p className="pb-2">
        The legacy playbook of "do more, sell more" is broken. Hiring more staff, demanding more activities, and adopting more technologies no longer guarantee productivity. Growth has stagnated, teams are discouraged, employees are unable to connect with customers, and leaders are unable to scale predictably.
        </p>
        <p>
        ProductDB redefines product management by focusing on quality over quantity. It provides manufacturers, wholesalers, and retailers with the connected tools needed to regain productivity and the context required to build deeper customer relationships. Through structured data input and standardized product classifications, ProductDB ensures that products are easy to find and manage, resulting in a more efficient and effective sales process.
        </p>
      </div>
      <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
        <video className="h-auto w-full max-w-full" controls>
          <source src="/sales-images/CsoSection/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
