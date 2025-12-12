import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Portfolio<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-colors text-left py-2"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
