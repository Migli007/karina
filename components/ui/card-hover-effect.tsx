"use client";
import clsx from "clsx"; // Use clsx instead of cn
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    chips?: string[];
    image?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8", // Increased gap between cards
        className
      )}
    >
      {items.map((item, idx) => (
        <a
        key={item.title} // Use title as a unique key
        href={item.link}  // Dynamically create the path with item.link
        // download={`${item.link}.pdf`}  // Download with a filename based on item.link
        aria-label={`View details about ${item.title}`}
        className="relative group block p-4 h-full" // Increased padding
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <Image
            src={item.image ?? '/dashbo.png'}
            width={300}
            height={300}
            className="w-full h-auto max-h-[300px] object-cover"
            alt="linear board demo"
          />

          {/* Title and Button Row */}
          <div className="flex justify-between items-center mt-4">
            <CardTitle>{item.title}</CardTitle>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              See Project
            </button>
          </div>

          <CardDescription>{item.description}</CardDescription>

          {item.chips && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.chips.map((chip, chipIdx) => (
                <span
                  key={chipIdx}
                  className="px-3 py-1 text-xs font-medium bg-zinc-200 text-zinc-700 rounded-full dark:bg-blue-900 dark:text-white"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </Card>

        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col", // Increased padding
        className
      )}
    >
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={clsx(
        "text-zinc-100 font-bold tracking-wide mt-2 text-lg", // Increased font size and added spacing
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={clsx(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", // Increased line height for readability
        className
      )}
    >
      {children}
    </p>
  );
};

