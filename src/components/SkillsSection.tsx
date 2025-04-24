import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Python", "RESTful APIs", "GraphQL"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
    },
    {
      category: "Tools & Others",
      items: ["Git", "AWS", "GCP", "CI/CD", "Figma", "Agile/Scrum"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
    }
  ];

  return (
    <section id="skills" className="relative bg-[#253C42]/90 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code Icon */}
        <svg className="absolute text-primary/15 w-24 h-24 -rotate-12 top-12 left-[10%]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.293 6.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 13 8.293 7.707a1 1 0 0 1 0-1.414z"/>
          <path d="M15.707 6.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L10.414 13l5.293-5.293a1 1 0 0 0 0-1.414z"/>
        </svg>
        
        {/* Database Icon */}
        <svg className="absolute text-primary/15 w-32 h-32 rotate-12 top-1/3 right-[5%]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 4.477 2 7.5v9C2 19.523 6.477 22 12 22s10-2.477 10-5.5v-9C22 4.477 17.523 2 12 2zm0 18c-4.687 0-8-1.79-8-4v-1.5c1.764 1.96 4.952 3 8 3s6.236-1.04 8-3V16c0 2.21-3.313 4-8 4zm0-7c-4.687 0-8-1.79-8-4v-1.5c1.764 1.96 4.952 3 8 3s6.236-1.04 8-3V9c0 2.21-3.313 4-8 4zm0-7c4.687 0 8 1.79 8 4s-3.313 4-8 4-8-1.79-8-4 3.313-4 8-4z"/>
        </svg>
        
        {/* UI/Design Icon */}
        <svg className="absolute text-primary/15 w-28 h-28 -rotate-45 bottom-12 left-[15%]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2z"/>
        </svg>
        
        {/* Tools Icon */}
        <svg className="absolute text-primary/15 w-20 h-20 rotate-90 bottom-24 right-[20%]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.71 20.29l-5.01-5.01A7.95 7.95 0 0 0 19 11c0-4.41-3.59-8-8-8S3 6.59 3 11s3.59 8 8 8c1.85 0 3.55-.63 4.9-1.69l5.01 5.01a.996.996 0 1 0 1.41-1.41l-5.01-5.01zM11 17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
      </div>
      
      <div className="section-container relative z-10 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-bold text-xl md:text-2xl text-primary mb-2 md:mb-5">My Skills</h3>
          <p className="text-blue-100">
            I've worked with a range of technologies in the web development world.
            Here are my main areas of expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 w-[90%] md:w-full md:grid-cols-3 gap-5 md:gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-gray-50 rounded-xl shadow-lg p-5 md:p-8 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-blue-500 mb-3 md:mb-5 flex items-center">
                {skillGroup.icon}
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-2 md:space-y-4">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-primary mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-black">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button variant="outline" className="group border-yellow-100 text-yellow-100 hover:bg-primary/10" asChild>
            <a href="https://atinistudio.com/about" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              See More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
