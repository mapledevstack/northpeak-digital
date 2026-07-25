import { motion } from "motion/react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { fadeUp } from "@/lib/animation"
import { contactSchema, type ContactForm } from "@/schemas/contact"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  })

  const onSubmit = (values: ContactForm) => {
    console.log(values)
  }

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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>

                  <Input
                    id="name"
                    placeholder="Your name"
                    {...form.register("name")}
                  />

                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...form.register("email")}
                  />

                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>

                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-32"
                    {...form.register("message")}
                  />

                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
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
