import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href='aboutUs'>About us</Link>
      <Link href='services'>services</Link>
      <Link href='properties'>properties</Link>
      <Link href='signup'>signup</Link>
      <Link href='signin'>signin</Link>
    </div>
  );
}
