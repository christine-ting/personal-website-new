
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
      items: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">My Skills</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-navy-700">
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
              <h3 className="text-xl font-bold text-navy-900 mb-5 flex items-center">
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
                    <span className="text-navy-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">
            <h3 className="text-center text-xl font-bold text-navy-900 mb-6">Professional Growth</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Problem Solving", "Team Collaboration", "Continuous Learning", "Detail Oriented"].map((attribute) => (
                <div key={attribute} className="text-center p-4 bg-navy-50 rounded-lg">
                  <p className="font-medium text-navy-800">{attribute}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
