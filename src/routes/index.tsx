import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/blue-logo.jpeg.asset.json";
import braceletImg from "@/assets/bracelet.jpg";
import digitalCardImg from "@/assets/digital-card.jpg";
import reviewCardImg from "@/assets/review-card.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLUe | NFC Business Cards & Review Solutions" },
      { name: "description", content: "BLUe delivers premium NFC digital business cards, bracelets, and review cards. Share your business with a single tap — no app required." },
      { property: "og:title", content: "BLUe | NFC Business Cards & Review Solutions" },
      { property: "og:description", content: "Share your business with a single tap. NFC digital business cards, bracelets, and review cards for modern professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why BLUe", href: "#why-blue" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    name: "NFC Business Card Bracelet",
    description: "Wearable networking that starts conversations. A tap on the wrist shares your details instantly.",
    image: braceletImg,
  },
  {
    name: "NFC Digital Business Card",
    description: "A sleek, tap-to-share card that replaces paper. Update your details anytime, anywhere.",
    image: digitalCardImg,
  },
  {
    name: "NFC Review Card",
    description: "Make reviews effortless. Customers tap and land exactly where you want them to rate you.",
    image: reviewCardImg,
  },
];

const steps = [
  { title: "Tap", description: "A customer or contact taps your BLUe product with any smartphone." },
  { title: "Connect", description: "Your profile, link, or review page opens instantly — no apps needed." },
  { title: "Grow", description: "Capture leads, earn reviews, and build stronger business relationships." },
];

const benefits = [
  { title: "No app required", description: "Works with every modern smartphone, straight out of the box." },
  { title: "Instant sharing", description: "One tap opens your contact card, website, or review page in seconds." },
  { title: "Easy to update", description: "Change your links and details anytime without reprinting anything." },
  { title: "Professional and reusable", description: "A polished, sustainable way to network and promote your business." },
];

const industries = [
  "Real Estate",
  "Restaurants",
  "Salons",
  "Spas",
  "Contractors",
  "Professionals",
  "Retail",
  "Small Businesses",
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(1.5rem)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="BLUe"
            className="h-8 w-auto object-contain"
            width={160}
            height={48}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Get Started
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Your Business. <span className="text-primary">One Tap Away.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              BLUe makes networking effortless with premium NFC products. Share your contact details,
              collect reviews, and connect faster — all with a single tap.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                Get Started
              </a>
              <a
                href="#products"
                className="rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-primary/30 hover:bg-accent"
              >
                Explore Products
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-3xl" />
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Products</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Smart NFC tools for modern businesses
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 100}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={1024}
                    height={768}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{product.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-tight">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Tap. Connect. Grow.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 100}>
              <div className="relative rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBlue() {
  return (
    <section id="why-blue" className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why BLUe</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built for professionals who value first impressions
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/20">
                <div className="h-2 w-8 rounded-full bg-primary" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessesWeServe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Businesses We Serve</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Trusted across industries
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
              >
                {industry}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:py-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
                Turn every introduction into a connection.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Ready to upgrade how you share your business?
              </p>
              <a
                href="mailto:hello@blue-nfc.com"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = [
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="container-tight">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="BLUe"
              className="h-8 w-auto object-contain"
              width={160}
              height={48}
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BLUe NFC Technologies & Review. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <HowItWorks />
        <WhyBlue />
        <BusinessesWeServe />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
