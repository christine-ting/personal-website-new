import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "AWS", "GCP", "CI/CD", "Figma", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="relative bg-[#8FA1A1]/10 overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-bold text-xl md:text-2xl text-blue-500 mb-2 md:mb-5">My Skills</h3>
          {/* <div className="h-1 w-16 bg-primary mx-auto mb-8"></div> */}
          <p className="text-black">
            I've worked with a range of technologies in the web development world.
            Here are my main areas of expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-white rounded-xl shadow-lg p-8 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-primary mb-5 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  {index + 1}
                </span>
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-4">
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

        <div className="mt-12 text-center">
          <Button variant="default" className="btn-default" asChild>
            <a href="https://atinistudio.com/about" target="_blank" rel="noopener noreferrer">
              See More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
