import { motion } from "motion/react"
import { LucideArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import webImage1 from "@/assets/images/website1.png"
import webImage2 from "@/assets/images/website2.png"
import webImage3 from "@/assets/images/website3.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

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
  const images = [webImage1, webImage2, webImage3]

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
            <LucideArrowRight className="size-7" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative mx-auto mt-16 w-5/6">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem>
                <img key={index} src={image} alt="Website" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Hero
