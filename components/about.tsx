import { Shield, Cloud, Lock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-4 border-y-4 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-foreground" />
            <h2 className="text-3xl font-bold tracking-wider">[ABOUT_ME]</h2>
          </div>
          <div className="h-0.5 w-32 bg-foreground" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 border-l-4 border-foreground pl-6">
            <p className="text-sm leading-relaxed text-foreground/80 font-mono">
              &gt; I'm a Computer Science student at UC Santa Cruz with a passion for cybersecurity and cloud
              infrastructure. My focus is on becoming a Cloud Security Engineer, specializing in AWS security
              architecture and implementation.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 font-mono">
              &gt; With certifications in CompTIA Security+ and AWS Certified Security, I'm building a strong foundation
              in both theoretical security principles and practical cloud security implementations. Currently studying
              for CISSP to further deepen my expertise in information security.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 font-mono">
              &gt; Through my work at xAI, UC Santa Cruz ITS, and various projects, I've gained hands-on experience in
              secure system design, network security, and cloud infrastructure protection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
              <CardContent className="p-6 space-y-3">
                <Shield className="w-6 h-6 group-hover:animate-pulse" />
                <h3 className="font-bold text-xs tracking-wider">[SECURITY_FIRST]</h3>
                <p className="text-xs font-mono">Implementing security best practices in every project</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
              <CardContent className="p-6 space-y-3">
                <Cloud className="w-6 h-6 group-hover:animate-pulse" />
                <h3 className="font-bold text-xs tracking-wider">[CLOUD_NATIVE]</h3>
                <p className="text-xs font-mono">Specializing in AWS security architecture</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
              <CardContent className="p-6 space-y-3">
                <Lock className="w-6 h-6 group-hover:animate-pulse" />
                <h3 className="font-bold text-xs tracking-wider">[ENCRYPTION]</h3>
                <p className="text-xs font-mono">Cryptography and secure data handling</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all group">
              <CardContent className="p-6 space-y-3">
                <Award className="w-6 h-6 group-hover:animate-pulse" />
                <h3 className="font-bold text-xs tracking-wider">[CERTIFIED]</h3>
                <p className="text-xs font-mono">Multiple industry certifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
