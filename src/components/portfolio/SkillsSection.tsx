import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages & Backend",
    skills: ["Python", "FastAPI", "Django", "DRF", "Flask", "Pydantic", "SQLAlchemy"],
  },
  {
    title: "AI / LLM Engineering",
    skills: ["LangChain", "LangGraph", "MCP / FastMCP", "RAG / CAG", "Qdrant", "ChromaDB", "PGVector", "HuggingFace", "Ollama", "Tiktoken"],
  },
  {
    title: "LLM Providers",
    skills: ["Gemini 2.0/2.5", "Anthropic Claude", "Llama 3", "Mistral", "DeepSeek-V3.2", "OpenRouter"],
  },
  {
    title: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS EC2/S3/RDS", "GitHub Actions", "GitLab CI", "Nginx", "Gunicorn"],
  },
  {
    title: "Scraping & Automation",
    skills: ["Selenium", "BeautifulSoup", "n8n", "Headless Chrome"],
  },
  {
    title: "BI & Tools",
    skills: ["Power BI", "DAX", "Chart.js", "D3.js", "Celery", "WebSocket", "Postman", "Pytest"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`flex items-center gap-3 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Code2 className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <div key={group.title}
              className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}>
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={skill} className={`px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover-lift ${isVisible ? "animate-scale-fade" : "opacity-0"}`}
                    style={{ animationDelay: `${(i + 1) * 80 + idx * 40}ms` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
