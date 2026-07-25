import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),

  email: z.email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project."),
})

export type ContactForm = z.infer<typeof contactSchema>
