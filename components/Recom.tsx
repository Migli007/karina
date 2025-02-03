import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Recom = () => {
  return (
    <div id="recom" className=" items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
    {
      quote:
        "Miguel consistently demonstrated strong technical expertise, problem solving skills, and a proactive approach to system improvements. He was always available to discuss system enhancements and readily provided possible solutions to address existing concerns. His collaborative efforts with the Medical Concierge Supervisors led to productive discussions on developing a unified system that would not only optimize our department’s processes but also bring efficiency and cohesion to the entire company. ",
      name: "Ruben del Rosario Jr.",
      title: "MPI Technical Operations Manager",
    },
    {
      quote:
        " I came to know Migs when I was handling the customer service team, and needed some help for a new approval system. The system comprised an approval for Inpatient and Outpatient procedures. Migs distinguished himself by creating and managing this new system that he developed. ",
      name: "Joesph Chua",
      title: "MPI Concierge Supervisor",
    },
    {
      quote: "As an employee and colleague of Miguel Antonio Li consistently demonstrated exceptional skills such as problem solving abilities, leadership skills, and teamwork. Miguel played a pivotal role in developing the LOA system in Medical Concierge Dept. The LOA system was developed to further enhance the work of the company’s concierge agents and improve data tracking and cleaning. Furthermore , he developed the KONSULTA registration system. ",
      name: "Gem Quisumbing",
      title: "MPI Customer Service Manager",
    },
 
  ];

export default Recom
