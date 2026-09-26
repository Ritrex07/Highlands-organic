import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookies | Highlands Organic" },
      {
        name: "description",
        content:
          "How Highlands Organic uses cookies, approximate location detection and personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Privacy & cookies
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Your privacy matters to us.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Effective date: 25 September 2026. This notice explains how
            Highlands Organic Co. Ltd uses information when you visit this
            website.
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Information we use
              </h2>
              <p className="mt-3">
                We may receive information you choose to send us, such as your
                name, email address, phone number and message when you contact
                us. The site also receives standard technical information needed
                to deliver pages securely.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Currency and approximate location
              </h2>
              <p className="mt-3">
                If you allow it, the site sends your IP address to ipapi.co to
                estimate your country and suggest a display currency. We do not
                request precise device location. You can decline this feature
                and choose a currency manually. Converted prices are indicative
                only; final commercial pricing is confirmed by our team.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Cookies
              </h2>
              <p className="mt-3">
                We use a functional cookie named <code>hoc_currency</code> to
                remember your display-currency choice and
                <code> hoc_location_consent</code> to remember whether you
                allowed approximate location detection. You can clear these
                cookies through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Third-party services
              </h2>
              <p className="mt-3">
                Currency rates are requested from open.er-api.com, and country
                estimation is requested from ipapi.co only after permission.
                These services have their own privacy policies and may process
                technical request data.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Your choices and rights
              </h2>
              <p className="mt-3">
                You can decline approximate location detection, select a
                currency manually, clear cookies, or contact us to ask about
                information associated with your enquiry. For privacy questions,
                email highlandsorganic@gmail.com.
              </p>
            </section>
            <p className="border-t border-border pt-6 text-sm">
              This notice is written for this website’s current features. It
              should be reviewed by a qualified Tanzanian privacy adviser before
              the business relies on it as its final legal policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
