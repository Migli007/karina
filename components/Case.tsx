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
    "Cyclistic is a bike-share company located in Chicago. There are two kinds of riders – annual riders and casual riders. According to the finance analysts of the company, riders with annual membership are much more profitable compared to casual riders. Based on their analyzation, the company has decided to create marketing strategies in order to influence their users to become annual riders. The business task I was given, is to analyze the company’s data in order to differentiate casual riders and annual riders. The insights I would give from my business task would be beneficial to the creation of marketing strategies at it would help give more information about the annual riders and how they utilize the bike-share application.  ",
    chips: ["Excel", "Python", "Pandas", "PostgreSQL"],
    link: "https://github.com/Migli007/cycle_case_study",
    image: "/cycle_dash.png"
  },
  {
    title: "Bellabeat: Trends on Smartwatch Users ",
    description:
      "Bellabeat is a high-tech company that manufactures health-focused smart products. These products helps inform and inspire women around the world. The founders of the company believe that there are more opportunities to grow their business. With this, they have discussed with the marketing team on how they could gain insight on their customer’s usage of their products. As part of the marketing analytics team, I was tasked to look into one of the products and analyze the the smart device usage data in order to gain new findings on how their customers are already using their device. The goal in my analysis is to find trends in the smart device usage and present how my findings can help influence the company’s marketing strategy. ",
    chips: ["Excel", "Python","Pandas", "PostgreSQL","Tableau"],
    link: "https://github.com/Migli007/fitbit_case_study",
    image:"/fitbit_dash.png"
  },
  {
    title: "Data Analysis on Hotel Yearly Performance",
    description:
      "This analysis examines three years of performance data from five hotels to evaluate overall progress, identify key trends, and extract actionable insights. Based on the findings, the marketing department aimed to provide additional support and advertising to the lowest-performing hotel to boost its sales.",
    chips: ["Excel", "Python", "PostgreSQL","Pandas","Matplotlib"],
    link: "https://github.com/Migli007/migli_hotel_case_study",
    image: "/hotel_dash.png"
  },
  {
    title: "Power BI Dashboard on Plant Co.",
    description:
      "The dashboard I developed provides a comprehensive overview of the sales, quantity, and gross product (GP) data for each country of the company,Plant Corporation. The dashboard provides an in-depth analysis of the company's performance across different regions, highlighting key metrics such as year-to-date (YTD) sales, quantity, and GP margins, as well as the performance variance compared to previous years (PYTD). By tracking the performance of individual countries, the dashboard helps to identify areas of growth and those requiring attention due to underperformance.",
    chips: ["Excel", "Power BI", "DAX"],
    image: "/plant_dashbo.png",
    link: "https://github.com/Migli007/migli_plant_co_dashboard"
  },
  {
    title: " Power BI Dashboard on a Data Professional Survey",
    description:
      "This dashboard I developed presents insights from a public survey of professionals working in the field of data science. The survey captures key aspects of their careers, including job positions, average salaries, work locations, work/life balance, and job satisfaction. By visualizing respondents' answers, the dashboard highlights important trends and challenges in the data science industry.",
    chips: ["Excel", "Power BI", "DAX"],
    link: "https://github.com/Migli007/migli_data_professional_dashboard"
  },
  {
    title: "Power BI Dashboard on Toy Sales",
    description:
      "The sales dashboard provides an overview of sales performance across different states, months, and customer categories from 2019 to 2021. It includes key metrics such as the sum of sales, year-over-year (YoY) percentage changes, year-to-date (YTD) sales, average sales, and average quantity sold.",
    chips: ["Excel", "Power BI", "DAX"],
    image: "/sales_dashbo.png",
    link: "https://github.com/Migli007/migli_toy_sales_dashboard"
  },
];