"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

import { cn } from "@/lib/utils";
import { signupSchema, SignupSchema } from "@/lib/signup-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PasswordInput } from "./ui/password-input";


export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      action: "",
    },
  });

  function onSubmit(data: SignupSchema) {
    setIsLoading(true)
    try {

      toast.success("Signup successful! Redirecting to Sign in...");

      setTimeout(() => {
        router.push("/verify-email");
        setIsLoading(false)
      }, 1500);
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      setIsLoading(false)
    }

  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="gap-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-medium">Create an account</h1>
        </div>


        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Full Name</FieldLabel>
              <Input {...field} placeholder="Full Name" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />


        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Email</FieldLabel>
              <Input {...field} type="email" placeholder="estate@hive.com" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />


        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Phone</FieldLabel>
              <Input {...field} type="tel" pattern="^\+?[0-9\s\-]{7,15}$"
                placeholder="eg. +233 54 123 4567" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />


        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Password</FieldLabel>
              <PasswordInput
                id="password"
                {...field}
                placeholder="Enter password"
              />
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
              <PasswordInput {...field} id="confirm-password" placeholder="Confirm your password" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />


        <Controller
          name="action"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>What do you want to do?</FieldLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sell">Sell</SelectItem>
                  <SelectItem value="buy">Buy</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />


        <Field>
          <Button type="submit" className="bg-red-700  cursor-pointer text-white">
            {isLoading ? <Spinner /> : "Create Account"}
          </Button>
        </Field>

        <FieldSeparator>Or continue with</FieldSeparator>

        <Field>
          <Button variant="outline" type="button" className="flex items-center cursor-pointer gap-2">
            <FcGoogle />
            Sign up with Google
          </Button>
          <FieldDescription className="px-6 text-center">
            By continuing, you agree to our <span className="text-red-600">Terms of Service</span> and <span className="text-red-600">Privacy Policy</span>
          </FieldDescription>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/login" style={{ textDecoration: "none" }} className="text-red-600">Login</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
