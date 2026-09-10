import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/blue-logo.jpeg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="container-tight">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="BLUe" className="h-8 w-auto object-contain" width={160} height={48} />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="/#products" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Products
            </a>
            <a href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              How It Works
            </a>
            <Link
              to="/get-started"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BLUe NFC Technologies &amp; Review. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
