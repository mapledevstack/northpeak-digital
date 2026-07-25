import { motion } from "motion/react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { fadeUp } from "@/lib/animation"
import testimonials from "@/data/testimonials"

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
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
        <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Loved by{" "}
            <span className="text-primary italic">growing brands.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how businesses use our digital solutions to improve their online
            presence and reach more customers.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-8">
                  <Quote className="size-8 text-primary/40" />

                  <p className="mt-6 flex-1 leading-7 text-muted-foreground">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
