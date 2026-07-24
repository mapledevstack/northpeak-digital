import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p>Built for Digital Heroes Training Task</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
        >
          digitalheroesco.com
        </a>
      </motion.div>
    </footer>
  )
}

export default Footer
