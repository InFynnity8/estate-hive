"use client";


import { SignupForm } from "@/components/signup-form"
import Image from "next/image"
import Link from "next/link";
import Logo from "@/components/logo";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-9 overflow-y-auto h-screen">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo dark={false}/>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full px-20">
            <SignupForm/>
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
