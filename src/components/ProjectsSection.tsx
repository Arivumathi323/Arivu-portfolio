import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "AI WhatsApp Assistant",
    description:
      "A multilingual (Tamil + English) voice-enabled WhatsApp AI bot built using Gemini API + n8n.",
    tech: ["n8n", "Gemini API", "Webhooks"],
    icon: "🤖",
  },
  {
    name: "Automation Workflows",
    description:
      "Custom workflows for reminders, notes, content creation, and message automation.",
    tech: ["n8n", "APIs"],
    icon: "⚡",
  },
  {
    name: "Python Turtle Illusion",
    description:
      "Optical illusion patterns created using turtle graphics.",
    tech: ["Python", "Turtle"],
    icon: "🎨",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{project.icon}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-primary border border-primary/30 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
