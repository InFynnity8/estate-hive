"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { useState } from "react";

export function OTPForm({ className, ...props }: React.ComponentProps<"div">) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-medium">Enter verification code</h1>
            <p className="text-muted-foreground text-sm text-balance">
              We just sent a verification code to
              estate@hive.com
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="otp" className="sr-only">
              Verification code
            </FieldLabel>
            <div className="flex w-full items-center justify-center">
            <InputOTP maxLength={6} id="otp" required>
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            </div>
            <FieldDescription className="text-center">
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>
          <div className="flex flex-col gap-2">
      
            <Button
              onClick={() => router.push('/reset-password')}
              type="submit"
              className="bg-red-700 cursor-pointer text-white"
            >
              {isLoading ? <Spinner /> : "Verify"}

            </Button>

          </div>
          <FieldDescription className="text-center">
            Didn&apos;t receive a code? <span className='text-red-600 cursor-pointer'>Resend code</span> 
          </FieldDescription>
        </FieldGroup>
      </form>
    </div>
  )
}
