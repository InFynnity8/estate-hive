"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link";
import { IoArrowBackOutline } from 'react-icons/io5';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { OTPForm } from '@/components/otp-form';

const ForgotPassword = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-9 overflow-y-auto h-screen">
                <div className="flex justify-left cursor-pointer">
                    <IoArrowBackOutline onClick={() => router.back()} />

                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full px-20 gap-10 flex flex-col">
                        <OTPForm />
                    
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

export default ForgotPassword