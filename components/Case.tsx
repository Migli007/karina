import { HoverEffect } from "./ui/card-hover-effect";

 
export function Case_study() {
  return (
    <div id='case' className="max-w-9xl pt-5 pb-20">
      <HoverEffect items={cases} />
    </div>
  );
}
export const cases = [
  {
    title: "Cyclistic Bike Share: Casual Riders vs. Annual Riders",
    description:
      "Analyzed bike ride data of casual and annual riders to identify trends in distance, duration, and preferences",
    chips: ["Excel", "Python", "Pandas", "PostgreSQL"],
    link: "bike_case_study"
  },
  {
    title: "Bellabeat: Trends on Smartwatch Users ",
    description:
      "Examined smartwatch usage and health trends from Fitbit data of 33 users.  ",
    chips: ["Excel", "Python","Pandas", "PostgreSQL","Tableau"],
    link: "fitbit_case_study"
  },
  {
    title: "Data Analysis on Hotel Yearly Performance",
    description:
      "Conducted an analysis of a bike-share company's data to provide insights and recommendations aimed at increasing sales.",
    chips: ["Excel", "Python", "PostgreSQL","Pandas","Matplotlib"],
    link: "hotel_case_study"
  },
];