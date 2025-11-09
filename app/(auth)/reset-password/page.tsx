"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link";
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Spinner } from "@/components/ui/spinner";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setIsLoading(true);
    try {
 
      await new Promise((res) => setTimeout(res, 1500));

      toast.success("Password reset successful!");
      router.push("/login"); 
    } catch (err) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-9 overflow-y-auto h-screen">
        <div className="flex justify-left cursor-pointer">
          <IoArrowBackOutline onClick={() => router.back()} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full px-20 gap-10 flex flex-col">
             <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-medium">Reset Password</h1>
        </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6 flex flex-col">
              <FieldGroup>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Password</FieldLabel>
                      <PasswordInput id={""} {...field} placeholder="Enter new password" />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

            
                <Controller
                  name="confirmPassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Confirm Password</FieldLabel>
                      <PasswordInput id={""} {...field} placeholder="Confirm new password" />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </FieldGroup>
                <Button type="submit" className="bg-red-700 w-full cursor-pointer">
                  {isLoading ? <Spinner /> : "Reset Password"}
                </Button>
            </form>

          </div>
        </div>
      </div>
      <div className=" relative hidden lg:block h-screen">
        <Image
          src="/signup-img.png"
          width={1920}
          height={1080}
          unoptimized
          priority
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  )
}

export default ResetPassword