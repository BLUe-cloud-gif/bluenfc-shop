import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import braceletImg from "@/assets/bracelet.jpg";
import digitalCardImg from "@/assets/digital-card.jpg";
import reviewCardImg from "@/assets/review-card.jpg";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Order BLUe NFC Products | Get Started" },
      { name: "description", content: "Order BLUe NFC business cards, bracelets and review cards online. Choose your products, tell us where your taps should lead, and we handle the rest." },
      { property: "og:title", content: "Order BLUe NFC Products | Get Started" },
      { property: "og:description", content: "Choose your BLUe NFC products, share your details, and we'll confirm your order by email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GetStartedPage,
});

const catalogue = [
  {
    id: "bracelet",
    name: "NFC Business Card Bracelet",
    price: 39,
    image: braceletImg,
    description: "Wearable networking. A tap on the wrist shares your details instantly.",
  },
  {
    id: "digital-card",
    name: "NFC Digital Business Card",
    price: 29,
    image: digitalCardImg,
    description: "A sleek tap-to-share card that replaces paper for good.",
  },
  {
    id: "review-card",
    name: "NFC Review Card",
    price: 24,
    image: reviewCardImg,
    description: "Customers tap and land straight on your review page.",
  },
] as const;

type Quantities = Record<string, number>;

function GetStartedPage() {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const items = catalogue.filter((p) => (quantities[p.id] ?? 0) > 0);
  const total = items.reduce((sum, p) => sum + p.price * (quantities[p.id] ?? 0), 0);

  const setQty = (id: string, next: number) =>
    setQuantities((q) => ({ ...q, [id]: Math.max(0, Math.min(999, next)) }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    setSubmitted(name.split(" ")[0] || "there");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center pt-32 pb-20">
          <div className="container-tight">
            <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                Thanks, {submitted}!
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Your order request is with us. We'll email you within one business day to confirm the
                details, pricing and payment before anything goes into production.
              </p>
              <button
                onClick={() => {
                  setSubmitted(null);
                  setQuantities({});
                }}
                className="mt-8 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                Place another order
              </button>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get Started</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Order your BLUe products
            </h1>
            <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
              Pick what you need, tell us where your taps should lead, and we'll confirm your order
              by email before production starts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-4xl space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Choose your products</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {catalogue.map((product) => {
                  const qty = quantities[product.id] ?? 0;
                  return (
                    <div
                      key={product.id}
                      className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                        qty > 0 ? "border-primary/50" : "border-border"
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                          width={1024}
                          height={768}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {product.description}
                        </p>
                        <p className="mt-3 text-sm font-medium text-primary">${product.price} each</p>

                        <div className="mt-4 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setQty(product.id, qty - 1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            aria-label={`Decrease ${product.name} quantity`}
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min={0}
                            max={999}
                            value={qty}
                            onChange={(e) => setQty(product.id, Number(e.target.value))}
                            aria-label={`${product.name} quantity`}
                            className="h-9 w-16 rounded-lg border border-border bg-background text-center text-sm text-foreground focus:border-primary focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => setQty(product.id, qty + 1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            aria-label={`Increase ${product.name} quantity`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Your details</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Business name" name="business" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div className="sm:col-span-2">
                  <Field label="Shipping address" name="address" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground" htmlFor="notes">
                    Where should your taps lead? (website, profile or review link)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
                    placeholder="e.g. https://g.page/r/your-review-link"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground">3. Order summary</h2>
              {items.length === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  No products selected yet — choose quantities above.
                </p>
              ) : (
                <ul className="mt-4 space-y-2">
                  {items.map((p) => (
                    <li key={p.id} className="flex justify-between text-sm text-muted-foreground">
                      <span>
                        {p.name} × {quantities[p.id]}
                      </span>
                      <span className="font-medium text-foreground">
                        ${p.price * (quantities[p.id] ?? 0)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                <span className="text-sm font-medium text-foreground">Estimated total</span>
                <span className="text-lg font-semibold text-primary">${total}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Excludes shipping and taxes. We confirm the final amount by email before payment.
              </p>

              <button
                type="submit"
                disabled={items.length === 0}
                className="mt-6 w-full rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                Submit order request
              </button>
            </section>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
