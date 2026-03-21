import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-3 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>

        <div className={`p-6 rounded-xl bg-card border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
          <h3 className="text-lg font-semibold">Bachelor of Science in Information Technology</h3>
          <p className="text-sm text-muted-foreground mt-1">J.P. Dawer Institute of Information Science & Technology</p>
          <p className="text-sm text-muted-foreground">Veer Narmad South Gujarat University, Surat</p>
          <p className="text-sm text-primary font-mono mt-2">2020 – 2024</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
