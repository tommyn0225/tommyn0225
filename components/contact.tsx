import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-2 h-2 bg-foreground" />
            <h2 className="text-3xl font-bold tracking-wider">[CONNECT]</h2>
            <div className="w-2 h-2 bg-foreground" />
          </div>
          <div className="h-0.5 w-32 bg-foreground mx-auto" />
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto font-mono">
            &gt; I&apos;m always open to discussing cloud security opportunities, collaborating on projects, or just
            connecting with fellow security enthusiasts.
          </p>
        </div>

        <Card className="border-4 border-foreground">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 md:border-r-2 border-foreground md:pr-6">
                <h3 className="text-sm font-bold tracking-wider">[GET_IN_TOUCH]</h3>
                <p className="text-foreground/70 leading-relaxed text-xs font-mono">
                  Whether you&apos;re looking for a cloud security engineer, want to discuss AWS security best
                  practices, or explore collaboration opportunities, I&apos;d love to hear from you.
                </p>
                <div className="space-y-3 pt-4">
                  <a
                    href="mailto:tommyn@ucsc.edu"
                    className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors text-xs font-mono"
                  >
                    <Mail className="w-4 h-4" />
                    <span>tommyn@ucsc.edu</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tommyn0225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/tommyn0225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-wider">[QUICK_ACTIONS]</h3>
                <div className="space-y-3">
                  <Button
                    className="w-full justify-start gap-3 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-mono text-xs tracking-wider"
                    size="lg"
                    asChild
                  >
                    <a href="mailto:tommyn@ucsc.edu">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">[SEND_EMAIL]</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background font-mono text-xs tracking-wider"
                    size="lg"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/tommyn0225/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      <span className="truncate">[CONNECT_LINKEDIN]</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background font-mono text-xs tracking-wider"
                    size="lg"
                    asChild
                  >
                    <a href="https://github.com/tommyn0225" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span className="truncate">[VIEW_GITHUB]</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center text-xs text-foreground/60 font-mono border-t-2 border-foreground pt-8">
          <p className="break-words">&gt; © 2025 TOMMY_NGUYEN // BUILT_WITH_NEXT.JS_AND_TAILWIND_CSS</p>
        </footer>
      </div>
    </section>
  )
}
