const skills = [
  { name: "Python", level: 85, icon: "🐍" },
  { name: "C Programming", level: 75, icon: "💻" },
  { name: "Java Basics", level: 60, icon: "☕" },
  { name: "n8n Automation", level: 90, icon: "⚡" },
  { name: "REST APIs", level: 80, icon: "🔗" },
  { name: "WhatsApp Bot Dev", level: 85, icon: "📱" },
  { name: "Gemini API", level: 80, icon: "🤖" },
  { name: "Prompt Engineering", level: 88, icon: "✨" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-primary font-mono font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(187_100%_50%_/_0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
