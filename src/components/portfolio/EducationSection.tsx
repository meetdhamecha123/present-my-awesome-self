import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-3 mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>

        <div className={`p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_-10px_hsl(38_92%_55%/0.15)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
          <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">Bachelor of Science in Information Technology</h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">J.P. Dawer Institute of Information Science & Technology</p>
          <p className="text-xs text-muted-foreground">Veer Narmad South Gujarat University, Surat</p>
          <p className="text-xs text-primary font-mono mt-3">2020 – 2024</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
