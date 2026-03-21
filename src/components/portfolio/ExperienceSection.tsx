import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "TeamOpine Solutions",
    location: "Surat, Gujarat",
    period: "Jan 2025 – Present",
    stack: "Python · FastAPI · LangChain · LangGraph · RAG · CAG · MCP · Celery · Redis · PostgreSQL · Docker · Gemini · Claude",
    highlights: [
      "14 production AI & backend projects delivered",
      "Developed high-performance FastAPI microservices with JWT security, Celery + Redis background tasks — reducing response times by 60%",
      "Designed multi-document RAG system supporting PDF, DOCX, XLSX, CSV, and image inputs with hybrid vector search using Qdrant and ChromaDB",
      "Architected RAG + CAG chatbot with real-time WebSocket, Redis pub/sub, and dual-layer semantic caching achieving sub-100ms retrieval",
      "Built MCP servers with FastMCP integrating Gemini 2.5-Flash and Claude API with multi-LLM unified interface",
      "Graph-based multi-agent framework using LangGraph — achieving 80% reduction in LLM API spend via local Ollama models",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zerobit Infotech",
    location: "Surat, Gujarat",
    period: "Jul 2024 – Dec 2024",
    stack: "Python · Django · DRF · Selenium · BeautifulSoup · PostgreSQL · MySQL · Nginx · n8n · Pandas",
    highlights: [
      "Built scalable Django/DRF apps with JWT auth, DTO-based handling, and optimized database integration",
      "Deployed advanced web scraping pipelines targeting 12+ US-based portals — maintaining 95%+ uptime",
      "Automated data transformation workflows with Pandas and n8n for fully automated data delivery",
      "Managed production deployments on Ubuntu with Nginx, Gunicorn, and PostgreSQL connection pooling",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-3 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Briefcase className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={exp.company}
              className={`relative pl-8 border-l-2 border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 120}ms` }}>
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">@ {exp.company} · {exp.location}</span>
              </div>
              <p className="text-sm text-primary font-mono mb-3">{exp.period}</p>
              <p className="text-xs text-muted-foreground font-mono mb-4 leading-relaxed">{exp.stack}</p>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-secondary-foreground leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:text-xs">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
