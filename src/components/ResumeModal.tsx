import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Mail, MapPin, Phone, GraduationCap, Briefcase, Code } from "lucide-react";

const ResumeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow hover:box-glow-intense transition-all duration-300 font-semibold px-8"
        >
          <FileText className="mr-2" size={18} />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="text-primary" size={24} />
            My Resume
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-6">
          {/* Resume Content */}
          <div className="bg-secondary/20 rounded-lg border border-primary/20 p-6 space-y-6">
            {/* Header */}
            <div className="text-center border-b border-primary/20 pb-4">
              <h2 className="text-3xl font-bold text-foreground">Arivumathi</h2>
              <p className="text-primary text-lg font-medium">AI & Automation Developer</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-muted-foreground text-sm">
                <span className="flex items-center gap-1"><Mail size={14} /> arivumathi@example.com</span>
                <span className="flex items-center gap-1"><Phone size={14} /> +91 98765 43210</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> India</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-2">
                <Briefcase size={18} /> Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Computer Science engineering student with hands-on experience in AI, APIs, and automation workflows. 
                Skilled in building practical solutions using modern technologies. Quick learner with a focus on creating 
                tools that solve real-world problems.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                <Code size={18} /> Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C Programming", "Java Basics", "n8n Automation", "REST APIs", "WhatsApp Bot Development", "Gemini API", "Prompt Engineering", "Git", "Problem Solving"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                <Briefcase size={18} /> Projects & Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-medium text-foreground">AI WhatsApp Assistant</h4>
                  <p className="text-sm text-primary">Personal Project • 2024</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Built a multilingual (Tamil + English) voice-enabled WhatsApp AI bot using Gemini API and n8n automation workflows.
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-medium text-foreground">Automation Workflows</h4>
                  <p className="text-sm text-primary">Personal Project • 2024</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Developed custom automation workflows for reminders, notes, content creation, and message automation using n8n.
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-medium text-foreground">Python Turtle Illusion</h4>
                  <p className="text-sm text-primary">Creative Coding • 2023</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Created mesmerizing optical illusion patterns using Python turtle graphics library.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                <GraduationCap size={18} /> Education
              </h3>
              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-medium text-foreground">B.Tech in Computer Science Engineering</h4>
                <p className="text-sm text-primary">University Name • 2021 - 2025</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Relevant coursework: Data Structures, Algorithms, Machine Learning, Database Systems
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pb-2">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow transition-all duration-300"
            >
              <Download className="mr-2" size={18} />
              Download PDF
            </Button>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Eye className="mr-2" size={18} />
              Print Resume
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
