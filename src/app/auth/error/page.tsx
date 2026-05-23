import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Sign-in failed",
};

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-destructive" strokeWidth={1.5} />
        <h1 className="mt-6 font-display text-3xl tracking-wider text-foreground">Sign-in failed</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          We couldn&apos;t complete your Google sign-in. Please try again, or contact us if the issue persists.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center border border-border text-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-card transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent text-accent-foreground pl-5 pr-[calc(1.25rem-0.2em)] py-2.5 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
