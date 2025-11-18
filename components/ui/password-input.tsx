"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {IoIosEye , IoIosEyeOff } from "react-icons/io";



interface PasswordInputProps {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput({ id, placeholder, value, onChange }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pr-10"
      />
      <Button
        type="button"
        variant="ghost"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-transparent cursor-pointer"
      >
        {show ? <IoIosEyeOff  size={20} /> : <IoIosEye  size={20} />}
      </Button>
    </div>
  );
}
