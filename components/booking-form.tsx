"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";


const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.enum(["male", "female", ""], {
    message: "Please select a gender",
  }),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^\+?[0-9\s\-]{7,15}$/, "Please enter a valid phone number"),
});

type BookingSchema = z.infer<typeof bookingSchema>;

export default function BookingForm({ className, ...props }: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      gender: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: BookingSchema) {
    setIsLoading(true);
    try {
      console.log("Booking data:", data);
      toast.success("Reservation made successfully!");

      setTimeout(() => {
        form.reset();
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      toast.error("Booking failed. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-sm border border-gray-200">
      <CardContent className="px-6">
        <form
          className={cn("flex flex-col gap-6", className)}
          {...props}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup className="gap-4">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-lg font-semibold text-gray-900">Booking Form</h3>
            </div>

      
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>
                  <Input {...field} placeholder="Enter full name" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

         
            <Controller
              name="gender"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Gender</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Input {...field} type="email" placeholder="you@example.com" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Contact</FieldLabel>
                  <Input
                    {...field}
                    type="tel"
                    pattern="^\+?[0-9\s\-]{7,15}$"
                    placeholder="Enter phone number"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Field>
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 cursor-pointer text-white rounded-md"
              >
                {isLoading ? <Spinner /> : "Make Reservation"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}