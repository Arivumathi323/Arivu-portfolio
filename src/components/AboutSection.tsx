const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute inset-0 gradient-border rounded-2xl" />
            
            <div className="relative bg-card rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon/Visual */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Computer Science Student & Tech Enthusiast
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm a Computer Science engineering student who enjoys working with AI, APIs, automation workflows, and building small products. I explore new tech, learn quickly, and like creating things that actually help people.
                  </p>
                </div>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border">
                {[
                  { value: "AI", label: "Focused" },
                  { value: "10+", label: "Projects" },
                  { value: "5+", label: "Tools Mastered" },
                  { value: "∞", label: "Curiosity" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary text-glow">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
