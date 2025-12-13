import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";

interface ResumeModalProps {
  resumeUrl?: string;
}

const ResumeModal = ({ resumeUrl = "/resume.pdf" }: ResumeModalProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Arivumathi_Resume.pdf";
    link.click();
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
      <DialogContent className="max-w-4xl h-[80vh] bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="text-primary" size={24} />
            My Resume
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col gap-4 h-full">
          {/* Resume Preview */}
          <div className="flex-1 bg-secondary/30 rounded-lg border border-primary/20 overflow-hidden">
            <iframe
              src={resumeUrl}
              className="w-full h-full min-h-[400px]"
              title="Resume Preview"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pb-4">
            <Button
              onClick={handleDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow transition-all duration-300"
            >
              <Download className="mr-2" size={18} />
              Download PDF
            </Button>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                <Eye className="mr-2" size={18} />
                Open in New Tab
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
