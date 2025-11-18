"use client";

export function Footer() {
  return (
    <footer className="bg-red-700 text-white py-4 z-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm sm:text-base">
        <p className="flex items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Estate Hive.</span>
          <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
