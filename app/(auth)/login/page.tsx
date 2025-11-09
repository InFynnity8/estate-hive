import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image"
import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import Logo from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-9 overflow-y-auto h-screen">
        <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo/>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full px-20">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
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
