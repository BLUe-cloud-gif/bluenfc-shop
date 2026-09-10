import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

            <div className="legal-content mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
              {children}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
