"use client";

import { reference } from "@/infrastructure/data/references/references-data";

export default function References() {
  return (
    <div
      id="references"
      className="relative mt-16 mb-20 mx-6 md:ml-0 px-4 sm:px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-20">
        References
      </h2>
      <div className="flex flex-col gap-24">
        {reference.map((item, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/2 text-base md:text-xl leading-relaxed text-foreground font-light 
              ${
                index % 2 === 0
                  ? "sm:self-start sm:text-left"
                  : "sm:self-end sm:text-right"
              }`}
          >
            <p className="mb-6">“{item.text}”</p>
            <p className="font-semibold text-accent">{item.name}</p>
            <p className="text-sm text-muted-foreground">
              {item.role}, {item.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
