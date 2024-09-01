import React from 'react'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto max-w-c-1235 px-8 md:px-12 xl:px-16 flex flex-col gap-4">
        <div>
          <h1 className='text-black dark:text-white text-hero font-bold'>Legal</h1>
        </div>
        <div>
          <p className=''>
            As our business continues to grow, so does our range of legal
            documents. Combing through legal texts is probably not your favorite
            thing to do. To help you to find the legal information you’re
            looking for as quickly as possible, we’ve gathered all relevant
            links on this page. Instead of speaking legal riddles, we try to use
            plain human language wherever we can.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
