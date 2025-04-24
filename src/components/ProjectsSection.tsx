import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, notifications, and team management features.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      link: "#"
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "Interactive dashboard for financial data visualization with customizable widgets and real-time data updates.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-2 relative bg-gradient-to-br from-slate-50 via-blue-50/10 to-slate-50 overflow-hidden">
      <div className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="font-bold text-xl md:text-2xl text-primary mb-2 md:mb-5">Featured Projects</h3>
          <p className="text-blue-100">
          Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl border border-yellow-100 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-full h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{project.title.substring(0, 2)}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">{project.title}</h3>
                <p className="text-yellow-700 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="link" className="p-0 text-primary hover:text-primary/80" asChild>
                  <a href={project.link}>View Project →</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
