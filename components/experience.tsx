import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Technical Support Specialist",
      company: "UC Santa Cruz Information Technology Services",
      period: "September 2025 - Present",
      description: [
        "Provisioned and deployed campus computers ensuring compliance with UC Security standards",
        "Securely erased and destroyed sensitive data in line with UCOP policy",
        "Created and managed ServiceNow tickets for improved team knowledge sharing",
      ],
      skills: ["Security Compliance", "ServiceNow", "Data Protection"],
    },
    {
      title: "AI Researcher",
      company: "xAI",
      period: "April 2024 - July 2024",
      description: [
        "Reduced Grok4 and DeepSearch model hallucinations by 5% through comprehensive testing",
        "Authored feedback reports contributing to iterative model improvements",
      ],
      skills: ["AI Testing", "Quality Assurance", "Technical Writing"],
    },
    {
      title: "Full-Stack Web Developer",
      company: "Polyglot",
      period: "December 2023 - July 2024",
      description: [
        "Led team of 3 front-end engineers to create landing page and app interfaces",
        "Designed and implemented responsive web interfaces from Figma sketches",
      ],
      skills: ["TypeScript", "Tailwind CSS", "ThreeJS", "Team Leadership"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-foreground" />
            <h2 className="text-3xl font-bold tracking-wider">[EXPERIENCE]</h2>
          </div>
          <div className="h-0.5 w-32 bg-foreground" />
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-foreground hover:bg-foreground/5 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-bold tracking-wide">&gt; {exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Briefcase className="w-3 h-3" />
                      <span className="font-mono text-xs">{exp.company}</span>
                    </div>
                    <p className="text-xs text-foreground/60 font-mono">[{exp.period}]</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground/80 flex gap-2 text-xs font-mono">
                      <span className="text-foreground mt-0.5">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-foreground font-mono hover:bg-foreground hover:text-background"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-2 border-foreground">
          <CardHeader>
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 text-foreground mt-1" />
              <div className="space-y-2">
                <CardTitle className="text-lg font-bold tracking-wide">[EDUCATION]</CardTitle>
                <p className="text-sm font-bold font-mono">University of California, Santa Cruz</p>
                <p className="text-foreground/80 text-xs font-mono">
                  B.A. Computer Science & B.S. Computer Science: Game Design
                </p>
                <p className="text-xs text-foreground/60 font-mono">Graduating June 2026 • GPA: 3.84/4.0</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold mb-2 text-xs tracking-wider">[CERTIFICATIONS]</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-foreground text-background border-foreground font-mono text-xs">
                    CompTIA Security+
                  </Badge>
                  <Badge className="bg-foreground text-background border-foreground font-mono text-xs">
                    AWS Certified Security
                  </Badge>
                  <Badge className="bg-foreground text-background border-foreground font-mono text-xs">
                    Google Cybersecurity
                  </Badge>
                  <Badge variant="outline" className="border-foreground font-mono text-xs">
                    CISSP (In Progress)
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-xs tracking-wider">[ORGANIZATIONS]</h4>
                <p className="text-foreground/80 text-xs font-mono">Slug Security, Stanford Startup Cohort 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
