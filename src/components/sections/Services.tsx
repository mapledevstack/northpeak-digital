import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { fadeUp } from "@/lib/animation"
import services from "@/data/services"

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-20">
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
            What we offer
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to{" "}
            <span className="text-primary italic">grow online.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From strategy to development, we create digital experiences that
            help businesses stand out and succeed.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="group h-full border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-semibold">{service.title}</h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
