import { motion } from "motion/react"
import { LucideArrowRightCircle } from "lucide-react"
import { Button } from "../ui/button"

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const Hero = () => {
  return (
    <section className="py-20">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Design • Development • Growth
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-primary">Modern websites</span> built to grow
          your{" "}
          <span className="text-primary/75 italic underline decoration-wavy underline-offset-8">
            Business.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          We design and develop fast, responsive websites that help businesses
          build trust, attract customers, and grow with confidence.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Button
            size="lg"
            className="h-14 gap-2 px-10 text-2xl font-bold shadow-lg transition-all hover:shadow-xl"
          >
            Get Started
            <LucideArrowRightCircle className="size-7" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
