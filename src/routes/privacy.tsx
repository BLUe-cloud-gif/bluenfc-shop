import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | BLUe NFC" },
      { name: "description", content: "How BLUe collects, uses and protects the personal information of customers who order and use our NFC products." },
      { property: "og:title", content: "Privacy Policy | BLUe NFC" },
      { property: "og:description", content: "How BLUe collects, uses and protects your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <p>
        BLUe NFC Technologies &amp; Review ("BLUe", "we", "us") respects your privacy. This policy
        explains what information we collect when you visit our website, place an order, or use one
        of our NFC products, and how we handle it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you give us: name, business name, email address and phone number.</li>
        <li>Order details: the products you request, quantities, shipping address and any notes.</li>
        <li>Profile content: the links, contact details and review pages you ask us to program onto your NFC products.</li>
        <li>Basic usage data: pages visited and device type, used only to keep the site working well.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To prepare, program, fulfil and ship your order.</li>
        <li>To answer your questions and provide customer support.</li>
        <li>To send order updates, and — only if you agree — occasional product news.</li>
        <li>To meet our legal, accounting and tax obligations.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only with the service providers we
        need to run BLUe — for example printing partners, shipping carriers and payment processors —
        and only to the extent required to complete your order, or where the law requires disclosure.
      </p>

      <h2>Your NFC products and the people who tap them</h2>
      <p>
        When someone taps one of your BLUe products, they open the link you chose. BLUe does not
        collect the personal information of the person tapping. If your link points to a third-party
        site, such as a review platform or social profile, that site's own privacy policy applies.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We keep order records for as long as needed to support your products and satisfy legal
        requirements. We use reasonable technical and organisational measures to protect your
        information, though no method of transmission over the internet is completely secure.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask us to access, correct or delete the personal information we hold about you, or
        to stop sending you marketing messages. Contact us and we will respond within a reasonable
        time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:hello@blue-nfc.com">hello@blue-nfc.com</a>.
      </p>
    </LegalPage>
  );
}
