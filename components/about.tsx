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
              &gt; Hi, I&apos;m Tommy Nguyen, a Computer Science student at UC Santa Cruz pursuing a degree in Computer
              Science. I&apos;m an aspiring Security Engineer, specifically interested in Cloud Security. My long term
              goal is to move into more managerial roles within the cybersecurity/technology field.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 font-mono">
              &gt; Beyond the classroom, I&apos;m part of <strong>ISC2 Silicon Valley Chapter</strong>, and{" "}
              <strong>Slug Security</strong>, where I continue exploring how AI and cybersecurity converge in both
              enterprise and creative spaces. My certifications include <strong>CompTIA Security+</strong>,{" "}
              <strong>AWS Certified Security</strong>, and <strong>Google Cybersecurity Certificate</strong>, and
              I&apos;m currently studying for the <strong>CISSP</strong>.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 font-mono">
              &gt; When I&apos;m not working, you&apos;ll find me watching movies, listening to music, camping, or
              trying now new restaurants.
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
