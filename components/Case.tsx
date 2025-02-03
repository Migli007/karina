import { HoverEffect } from "./ui/card-hover-effect";

 
export function Case_study() {
  return (
    <div id='proj' className="max-w-9xl pt-5 pb-20">
      <HoverEffect items={cases} />
    </div>
  );
}
export const cases = [
  {
    title: "How does a bike-share navigate speedy success",
    description:
      "Conducted an analysis of a bike-share company's data to provide insights and recommendations aimed at increasing sales.",
    
    chips: ["Excel", "Python", "PostgreSQL","R Studio"],
  },
];