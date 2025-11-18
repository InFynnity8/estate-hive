import * as z from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3, "Full name must be at least 3 characters."),
    email: z.email(),
    phone: z
      .string()
      .min(7, "Phone number is too short.")
      .regex(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number format."),
    action: z.enum(["sell", "buy", ""], {
      message: "Please select an action",
    }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
