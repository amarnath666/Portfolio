"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const Work = () => {
  const workData = [
    {
      company: "Fortaxe Global",
      imageSrc: "/images/fortaxe-global.png",
      liveUrl: "https://www.fortaxe.com",

      positions: [
        {
          role: "Senior Full Stack Developer",
          timeLine: "Feb 2025 – Present",
          description: `
Led cross-functional development teams on multiple full-stack projects, from planning to deployment, delivering scalable and maintainable solutions.
`,
          technologies: [
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "GraphQL",
            "MongoDB",

            "LangChain",
            "AWS",
            "Hostinger",
            "Docker",
            "Tailwind CSS",
          ],
        },
        {
          role: "Full Stack Developer",
          timeLine: "Sep 2024 – Jan 2025",
          description: ` Oversaw the development of multiple web applications, ensuring timely delivery and technical excellence.`,
          technologies: [
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "GraphQL",
            "MongoDB",

            "LangChain",
            "AWS",
            "Hostinger",
            "Docker",
            "Tailwind CSS",
          ],
        },
      ],
    },
    {
      company: "Rentkar",
      imageSrc: "/images/rentkar.jpeg",
      liveUrl: "https://rentkar.app",
      timeLine: "July 2024 – August 2024",
      positions: [
        {
          role: "Full Stack Developer Intern",
          timeLine: "July 2024 – August 2024",
          description:
            "Integrated dynamic features and resolved performance bottlenecks, enhancing the user experience and reducing load times by 25%.",
          technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
        },
      ],
    },
  ];

  const getAllTechnologies = (positions: any[]) => {
    const allTechs = positions.flatMap((p) => p.technologies);
    return [...new Set(allTechs)];
  };

  return (
    <div className="pt-6">
          <hr className="w-full h-px bg-[#27272a] border-none " />
      <p className="text-gray-500 text-base pt-2 pb-4">
        Cool Places I Worked At
      </p>

      {workData.map((work, idx) => (
        <div key={idx} className="flex flex-col  relative mb-6">
          {/* Logo + Content */}
          <div className="flex flex-row items-center gap-4 pr-20">
            {/* Logo */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(work.liveUrl, "_blank");
              }}
              className="cursor-pointer"
            >
              <Image
                src={work.imageSrc}
                alt={work.company}
                width={40}
                height={40}
                className="rounded-full object-cover flex-shrink-0"
              />
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <p className="text-base text-white font-medium">{work.company}</p>
            </div>
          </div>

          {/* Role Descriptions */}
          <div className="text-gray-400 text-sm pl-[52px] pr-4">
            {work.positions.map((position, posIdx) => (
              <div
                key={posIdx}
                className={cn(
                  "mb-4",
                  posIdx !== work.positions.length - 1 &&
                    "border-b border-[#27272a] pb-2"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
                  <h4 className="text-gray-200 font-medium">{position.role}</h4>
                  <span className="text-gray-400 text-sm font-medium">
                    {position.timeLine}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-2 whitespace-pre-line">
                  {position.description.trim()}
                </p>
              </div>
            ))}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {getAllTechnologies(work.positions).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;

// const Work = () => {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const workData = [
//     {
//       company: "Fortaxe Global",
//       imageSrc: "/images/fortaxe-global.png",
//       liveUrl: "https://www.fortaxe.com",
// timeLine: "September 2024 - Present",
//       positions: [
//         {
//           role: "Senior Full Stack Developer",
//           timeLine: "February 2025 - Present",
//           description: `
// Built and deployed scalable applications using Next.js, React, Node.js, GraphQL, and MongoDB.
// Architected and optimized GraphQL APIs and MongoDB schemas, improving query response times with efficient indexing and Redis caching.
// `,
//           technologies: [
//             "TypeScript",
//             "Next.js",
//             "React",
//             "Node.js",
//             "GraphQL",
//             "MongoDB",
//             "ChatGPT",
//             "LangChain",
//             "AWS",
//             "Hostinger",
//             "Docker",
//           ],
//         },
//         {
//           role: " Full Stack Developer",
//           timeLine: "September 2024 - January 2025",
//           description: `
// Lead the design and development of advanced features for scalable applications.
// Mentored junior developers, conducted code reviews, and enforced best practices for maintainable, scalable codebases.
// Collaborated with cross-functional teams to deliver multiple major projects while maintaining high code quality through comprehensive testing and documentation.
// `,
//           technologies: [
//             "TypeScript",
//             "Next.js",
//             "React",
//             "Node.js",
//             "GraphQL",
//             "MongoDB",
//             "ChatGPT",
//             "LangChain",
//             "AWS",
//             "Hostinger",
//             "Docker",
//           ],
//         },
//       ],
//     },
//     {
//       company: "Rentkar",
//       imageSrc: "/images/rentkar.jpeg",
//       liveUrl: "https://rentkar.app",
//        timeLine: "July 2024 - August 2024",
//       positions: [
//         {
//           role: "Full Stack Developer Intern",
//           timeLine: "July 2024 - August 2024",
//           description:
//             "Designed and developed custom Shopify themes for enterprise clients with optimized checkout flows.",
//           technologies: [
//             "Next.js",
//             "TypeScript",
//             "LangChain",
//             "MongoDB",
//             "Razorpay",
//             "Tailwind CSS",
//           ],
//         },
//       ],
//     },
//   ];

//   const handleToggle = (index: number) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const getAllTechnologies = (positions: any[]) => {
//     const allTechs = positions.flatMap((p) => p.technologies);
//     return [...new Set(allTechs)]; // Remove duplicates
//   };

//   return (
//     <div className="pt-6">
//       <hr className="w-full h-px bg-gray-700 border-none" />
//       <p className="text-gray-500 text-base pt-2 pb-4">
//         Cool Places I Worked At
//       </p>

//       {workData.map((work, idx) => (
//         <div key={idx} className="flex flex-col gap-4 relative ">
//           {/* Timeline */}
//           <p className="absolute right-0 top-0 text-gray-400 text-sm font-medium">
//             {work.timeLine}
//           </p>

//           {/* Logo + Content */}
//           <div className="flex flex-row gap-4 pr-20">
//             {/* Logo */}
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 window.open(work.liveUrl, "_blank");
//               }}
//               onMouseEnter={(e) => e.stopPropagation()}
//               className="cursor-pointer"
//             >
//               <img
//                 src={work.imageSrc}
//                 alt={work.company}
//                 className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
//               />
//             </div>

//             {/* Content area */}
//             <div
//               className="flex-1 group cursor-pointer"
//               onClick={() => handleToggle(idx)}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="flex items-center">
//                 <p className="text-base text-white font-medium">
//                   {work.company}
//                 </p>

//                 {/* Chevron appears only on hover */}
//                 {hoveredIndex === idx && (
//                   <ChevronRightIcon
//                     className={cn(
//                       "size-4 transition-transform duration-300 text-gray-400",
//                       expandedIndex === idx ? "rotate-90" : "rotate-0"
//                     )}
//                   />
//                 )}
//               </div>

//               {/* Show multiple roles if more than one position */}
//               {work.positions.length > 1 ? (
//                 <p className="text-gray-300 text-sm">
//                   {work.positions[0].role} • {work.positions.length} positions
//                 </p>
//               ) : (
//                 <p className="text-gray-300 text-sm">
//                   {work.positions[0].role}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Expanded Content */}
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{
//               opacity: expandedIndex === idx ? 1 : 0,
//               height: expandedIndex === idx ? "auto" : 0,
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [0.4, 0, 0.2, 1],
//             }}
//             className="overflow-hidden text-gray-400 text-sm pl-[52px] pr-4"
//           >
//             {work.positions.map((position, posIdx) => (
//               <div
//                 key={posIdx}
//                 className={cn(
//                   "mb-6",
//                   posIdx !== work.positions.length - 1 &&
//                     "border-b border-gray-700 pb-4"
//                 )}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                     {work.positions.length > 1 && (
//                   <h4 className="text-gray-200 font-medium">{position.role}</h4>
//                     )}
//                   {work.positions.length > 1 && (
//     <span className="text-gray-500 text-xs">{position.timeLine}</span>
//   )}
//                 </div>
//                 <p className="text-gray-400 text-sm mb-3">
//                   {position.description}
//                 </p>
//               </div>
//             ))}

//             <div className="flex flex-wrap gap-1 mb-3">
//               {getAllTechnologies(work.positions).map((tech) => (
//                 <span
//                   key={tech}
//                   className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };
