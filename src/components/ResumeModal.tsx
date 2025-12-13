import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, MapPin, Phone, GraduationCap, Briefcase, Code, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";

const ResumeModal = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const element = resumeRef.current;
      const opt = {
        margin: 10,
        filename: "Arivumathi_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "Resume Downloaded!",
        description: "Your resume has been saved as PDF.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

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
          {/* Resume Content - PDF Target */}
          <div ref={resumeRef} className="bg-white text-gray-900 rounded-lg p-6 space-y-6">
            {/* Header */}
            <div className="text-center border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900">Arivumathi</h2>
              <p className="text-cyan-600 text-lg font-medium">AI & Automation Developer</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-gray-600 text-sm">
                <span className="flex items-center gap-1"><Mail size={14} /> arivumathi@example.com</span>
                <span className="flex items-center gap-1"><Phone size={14} /> +91 98765 43210</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> India</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-600 flex items-center gap-2 mb-2">
                <Briefcase size={18} /> Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Passionate Computer Science engineering student with hands-on experience in AI, APIs, and automation workflows. 
                Skilled in building practical solutions using modern technologies. Quick learner with a focus on creating 
                tools that solve real-world problems.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-600 flex items-center gap-2 mb-3">
                <Code size={18} /> Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C Programming", "Java Basics", "n8n Automation", "REST APIs", "WhatsApp Bot Development", "Gemini API", "Prompt Engineering", "Git", "Problem Solving"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-600 flex items-center gap-2 mb-3">
                <Briefcase size={18} /> Projects & Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-medium text-gray-900">AI WhatsApp Assistant</h4>
                  <p className="text-sm text-cyan-600">Personal Project • 2024</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Built a multilingual (Tamil + English) voice-enabled WhatsApp AI bot using Gemini API and n8n automation workflows.
                  </p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-medium text-gray-900">Automation Workflows</h4>
                  <p className="text-sm text-cyan-600">Personal Project • 2024</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Developed custom automation workflows for reminders, notes, content creation, and message automation using n8n.
                  </p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-medium text-gray-900">Python Turtle Illusion</h4>
                  <p className="text-sm text-cyan-600">Creative Coding • 2023</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Created mesmerizing optical illusion patterns using Python turtle graphics library.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-600 flex items-center gap-2 mb-3">
                <GraduationCap size={18} /> Education
              </h3>
              <div className="border-l-2 border-cyan-400 pl-4">
                <h4 className="font-medium text-gray-900">B.Tech in Computer Science Engineering</h4>
                <p className="text-sm text-cyan-600">University Name • 2021 - 2025</p>
                <p className="text-gray-600 text-sm mt-1">
                  Relevant coursework: Data Structures, Algorithms, Machine Learning, Database Systems
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pb-2">
            <Button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow transition-all duration-300"
            >
              {isGenerating ? (
                <Loader2 className="mr-2 animate-spin" size={18} />
              ) : (
                <Download className="mr-2" size={18} />
              )}
              {isGenerating ? "Generating..." : "Download PDF"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
