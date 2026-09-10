import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | BLUe NFC" },
      { name: "description", content: "The terms that apply when you order, receive and use BLUe NFC business cards, bracelets and review cards." },
      { property: "og:title", content: "Terms of Service | BLUe NFC" },
      { property: "og:description", content: "The terms that apply when you order and use BLUe NFC products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
      <p>
        These terms apply to every order placed with BLUe NFC Technologies &amp; Review ("BLUe") and
        to your use of this website. By placing an order you accept them.
      </p>

      <h2>Orders</h2>
      <p>
        An order request submitted on this site is an offer to buy. It becomes binding once we
        confirm it by email. We may decline or cancel an order if a product is unavailable, if the
        details supplied are incomplete, or if pricing was listed in error.
      </p>

      <h2>Pricing and payment</h2>
      <p>
        Prices are quoted in your order confirmation and exclude shipping and applicable taxes
        unless stated otherwise. Custom and personalised orders are payable in full before
        production begins.
      </p>

      <h2>Personalisation and content</h2>
      <p>
        You are responsible for the accuracy of the names, links, logos and artwork you supply, and
        you confirm you have the right to use them. We are not liable for errors in customer-supplied
        content once an order is approved for production, and we may refuse content that is unlawful
        or infringes someone else's rights.
      </p>

      <h2>Shipping and delivery</h2>
      <p>
        Delivery estimates are indicative, not guaranteed. Risk passes to you on delivery. Please
        inspect your order on arrival and tell us about any damage or shortage within seven days.
      </p>

      <h2>Returns and warranty</h2>
      <p>
        BLUe products are warranted against manufacturing defects for twelve months from delivery.
        We will repair or replace a defective product at our discretion. Personalised products
        cannot be returned unless faulty. The warranty does not cover damage from misuse, bending,
        water exposure or normal wear.
      </p>

      <h2>Product use</h2>
      <p>
        NFC products work with most modern smartphones, but we cannot guarantee compatibility with
        every device or operating system version. Links you program must comply with the rules of
        the platforms they point to, including review platforms' policies on soliciting reviews.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The BLUe name, logo, website content and product designs belong to BLUe and may not be
        copied or reproduced without our written permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, BLUe is not liable for indirect or consequential losses,
        including lost business or lost profits. Our total liability for any claim is limited to the
        amount you paid for the products concerned.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:hello@blue-nfc.com">hello@blue-nfc.com</a>.
      </p>
    </LegalPage>
  );
}
