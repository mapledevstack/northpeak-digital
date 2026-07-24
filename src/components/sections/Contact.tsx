import { motion } from "motion/react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <motion.div
        className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something{" "}
            <span className="text-primary italic">great.</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Have a project in mind? Tell us what you need and we'll help turn
            your ideas into a digital experience that stands out.
          </p>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-primary" />
              <span>hello@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" />
              <span>Remote • Worldwide</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="border-border/50 bg-card/50 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-32"
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
