import { LucideArrowBigRight, LucideArrowRightCircle } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Design • Development • Growth
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          <span className="text-primary">Modern websites</span> built to grow
          your{" "}
          <span className="text-primary/75 italic underline underline-offset-8">
            Business.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          We design and develop fast, responsive websites that help businesses
          build trust, attract customers, and grow with confidence.
        </p>

        <Button
          size="lg"
          className="mt-10 h-14 gap-2 px-10 text-2xl font-bold shadow-lg transition-all hover:shadow-xl"
        >
          Get Started
          <LucideArrowRightCircle className="size-7" />
        </Button>
      </div>
    </section>
  )
}

export default Hero
