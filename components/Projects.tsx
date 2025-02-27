import { HoverEffect } from "./ui/card-hover-effect";

 
export function Myprojects() {
  return (
    <div id="team">
    <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-10">
      {projects.map((card, idx) => (
        <div key={idx} className="rounded-2xl border-green-300 p-[1px] overflow-hidden">
          <div className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/50 p-8 rounded-2xl flex flex-col justify-end shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out min-h-[250px] flex-grow">
            {/* Name */}
            <h3 className="font-extrabold text-xl text-white tracking-wide relative z-20 whitespace-normal break-words">
              {card.title}
            </h3>
  
            {/* Description */}
            <p className="mt-3 text-gray-400 relative z-20 flex items-center text-base">
              {card.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
            {card.chips.map((chip, index) => (
              <span key={index} className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">
                {chip}
              </span>
            ))}
          </div>
          </div>
      
        </div>
      ))}
    </div>
  </div>
  
  );
}
export const projects = [
  {
    title: "Letter of Authorization (LOA) System",
    description:
      "Engineered and deployed an automated system that generates and manages Letter of Authorizations.",
    
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "Medical Catalog System",
    description: "Developed the system to upload, catalog, and automate searches for symptoms and diseases.",
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "EKonsulta Registration System",
    description: "Developed the system to streamline the registration of Philhealth members to the Electronic Medical Record (EMR) system.",
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "Intercontinental Energy Resources Website",
    description:"Developed and designed the home website for Intercontinental Energy Resources inc. ",
    chips: ["Next.JS", "React","TypeScript","Tailwind CSS", "Vercel"],
  },
  {
    title: "Capstone Project - Production Tracking System",
    description: "Spearheaded the development of a robust production tracking system for Al Di Foods",
    chips: ["Django", "Python","PostgreSQL"],
  },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];