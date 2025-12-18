import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import ResumeModal from "./ResumeModal";
import profilePhoto from "@/assets/profile-photo.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/arivu.mathi323?igsh=aGZoemgwNGg2NHV2", label: "Instagram" },
  { icon: Github, href: "https://github.com/Arivumathi323", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/918122167396", label: "WhatsApp" },
  { icon: Mail, href: "mailto:arivumathi323@gmail.com", label: "Email" },
];

const HeroSection = () => {
  const openExternal = (href: string) => {
    const win = window.open(href, "_blank", "noopener,noreferrer");
    if (!win) {
      try {
        window.top?.location.assign(href);
      } catch {
        window.location.assign(href);
      }
    }
  };

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
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openExternal(href);
                  }}
                  className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:box-glow"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Button - Resume Modal */}
            <ResumeModal />
          </div>

          {/* Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full blur-[60px] absolute inset-0 m-auto" />
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 box-glow">
                <img 
                  src={profilePhoto} 
                  alt="Arivumathi - AI & Automation Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
