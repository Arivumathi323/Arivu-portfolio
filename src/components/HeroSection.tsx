import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Astronaut3D from "./Astronaut3D";
import ResumeModal from "./ResumeModal";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-muted-foreground text-lg mb-2">Hello, It's Me</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Arivumathi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              <span className="text-muted-foreground">And I'm a </span>
              <span className="text-primary text-glow">AI & Automation Developer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              I build simple and useful AI tools, automations, WhatsApp bots, and creative coding projects. I love solving problems and turning ideas into working prototypes.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:box-glow"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Button - Resume Modal */}
            <ResumeModal />
          </div>

          {/* 3D Astronaut */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
              {/* Glow effect behind astronaut */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px]" />
              <Astronaut3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
