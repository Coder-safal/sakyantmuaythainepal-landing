"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.replace("/"), 1500);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" strokeWidth={1.5} />
        <h1 className="mt-6 font-display text-3xl tracking-wider text-foreground">Signed In</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          You&apos;re in. Redirecting you home…
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center bg-accent text-accent-foreground pl-5 pr-[calc(1.25rem-0.2em)] py-2.5 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent/90 transition-colors"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
