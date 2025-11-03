import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Map } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Secure Google Drive Agents",
      description:
        "Developed a least-privilege access framework for AI agents in Google Drive, reducing data exposure risks and automating permission provisioning.",
      icon: Shield,
      technologies: ["Python", "Google Cloud", "Slack API", "Security"],
      highlights: [
        "Implemented least-privilege access framework",
        "Automated permission provisioning with Python",
        "Reduced data exposure risks for AI agents",
      ],
      link: "https://github.com/tommyn0225",
      image: "/images/google-drive-agents-preview.png",
    },
    {
      title: "CruzMaps",
      description:
        "Enhanced campus navigation platform with events feature and improved location-finding precision using MapBox API.",
      icon: Map,
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "MapBox API"],
      highlights: [
        "Built events feature for campus activities",
        "Improved navigation precision with MapBox",
        "Full-stack development with modern tech stack",
      ],
      link: "https://github.com/vznh/cruzmaps",
      image: "/images/cruzmaps-preview.png",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 border-y-4 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-foreground" />
            <h2 className="text-3xl font-bold tracking-wider">[FEATURED_PROJECTS]</h2>
          </div>
          <div className="h-0.5 w-32 bg-foreground" />
          <p className="text-sm text-foreground/70 font-mono">
            &gt; Showcasing my work in security engineering and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="border-2 border-foreground transition-all group cursor-pointer h-full overflow-hidden">
                  {project.image && (
                    <div className="relative w-full h-48 border-b-2 border-foreground overflow-hidden bg-background">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-all" />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg font-bold tracking-wide">&gt; {project.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-xs leading-relaxed font-mono text-foreground/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold mb-2 tracking-wider">[KEY_FEATURES]</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex gap-2 font-mono">
                            <span className="text-foreground">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-2 tracking-wider">[TECHNOLOGIES]</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-foreground font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
