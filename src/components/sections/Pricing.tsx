import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

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

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses starting online.",
    features: [
      "Custom landing page",
      "Responsive design",
      "Basic SEO setup",
      "Mobile optimization",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    description: "For businesses ready to grow their presence.",
    features: [
      "Multi-page website",
      "Advanced animations",
      "SEO optimization",
      "Performance improvements",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$1999",
    description: "Complete digital solutions for ambitious brands.",
    features: [
      "Custom web application",
      "Advanced integrations",
      "Brand strategy",
      "Analytics setup",
      "Dedicated support",
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-20">
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
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Simple plans for{" "}
            <span className="text-primary italic">every stage.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the package that fits your goals and start building a
            stronger online presence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={plan.popular ? "lg:-translate-y-4" : ""}
            >
              <Card
                className={`relative h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular ? "border-primary shadow-lg" : "border-border/50"
                } `}
              >
                {plan.popular && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-b-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-6 text-4xl font-bold">{plan.price}</div>

                  <Button
                    className="mt-8 w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="size-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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

export default Pricing
