import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kriscel Tech Pvt. Ltd.",
  description:
    "Privacy Policy for Kriscel Tech Pvt. Ltd. covering information collection, use, sharing, cookies, security, retention, and user rights.",
};

const personalInfo = [
  "Full name, email address, phone number, and company name",
  "Billing details, including address and credit/debit card information",
  "Business requirements and project-related information",
  "Communication history, including emails, calls, and chat records",
  "Website usage data, including IP address, browser type, and pages visited",
];

const automaticInfo = [
  "Data collected through cookies and tracking technologies",
  "Log files, including IP address, access times, and referring URLs",
  "Device information, including operating system and browser version",
  "Analytics data through Google Analytics or similar tools",
];

const uses = [
  "Providing and managing the services you have requested",
  "Creating and maintaining client accounts",
  "Processing invoices, payments, and receipts",
  "Providing customer support and resolving queries",
  "Sending marketing campaigns, newsletters, and promotional emails, with opt-out available",
  "Improving website performance and enhancing user experience",
  "Complying with legal obligations and resolving disputes",
  "Fraud prevention and security monitoring",
];

const securityMeasures = [
  "SSL/TLS encryption for all data transmissions",
  "Secure servers and firewalls",
  "Regular security audits and vulnerability assessments",
  "Employee training on data privacy best practices",
  "Access controls ensuring only authorised personnel can access your data",
];

const cookieUses = [
  "Session management, including maintaining your logged-in state",
  "Remembering your preferences, such as language and settings",
  "Analytics, including tracking website traffic and usage patterns",
  "Marketing, including displaying relevant advertisements",
];

const retentionRules = [
  "Your services remain active or your account exists",
  "Retention is required to fulfil legal obligations",
  "Retention is necessary to resolve disputes",
];

const rights = [
  "Access: the right to know what information we hold about you",
  "Correction: the right to have inaccurate information updated",
  "Deletion: the right to request deletion of your information",
  "Portability: the right to export your data",
  "Objection: the right to object to certain uses of your data",
  "Marketing opt-out: the right to unsubscribe from promotional communications",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <main className="max-w-4xl mx-auto w-full">
        <header className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Kriscel Tech Pvt. Ltd.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted mt-4">Effective Date: May 2025</p>
        </header>

        <div className="space-y-10 text-base leading-7">
          <section className="space-y-4">
            <p className="text-slate-600">
              Kriscel Tech Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is an IT services company providing Business Development and
              Digital Marketing solutions. This Privacy Policy explains how we collect,
              use, disclose, and protect your personal information when you visit our
              website (www.kriscel.com) or use our services.
            </p>
            <p className="text-slate-600">
              Please read this policy carefully. By accessing our website or using our
              services, you consent to the terms of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-foreground">1.1 Personal Information</h3>
            <p className="text-slate-600">We may collect the following personal information:</p>
            <BulletList items={personalInfo} />
            <h3 className="text-lg font-semibold text-foreground">1.2 Automatically Collected Information</h3>
            <p className="text-slate-600">When you visit our website, we automatically collect:</p>
            <BulletList items={automaticInfo} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p className="text-slate-600">We use the collected information for the following purposes:</p>
            <BulletList items={uses} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Sharing of Information</h2>
            <p className="text-slate-600">
              We may share your personal information with the following parties:
            </p>
            <h3 className="text-lg font-semibold text-foreground">3.1 Service Providers</h3>
            <p className="text-slate-600">
              Trusted third-party vendors who operate on our behalf, including payment
              processors, cloud hosting providers, email service providers, and analytics
              companies. These vendors are permitted to use your information only as
              instructed by us.
            </p>
            <h3 className="text-lg font-semibold text-foreground">3.2 Business Partners</h3>
            <p className="text-slate-600">
              Relevant partners involved in digital marketing campaigns or business
              development projects, only with your prior consent.
            </p>
            <h3 className="text-lg font-semibold text-foreground">3.3 Legal Requirements</h3>
            <p className="text-slate-600">
              When required by law, such as in response to court orders, requests from
              government agencies, or during legal proceedings.
            </p>
            <h3 className="text-lg font-semibold text-foreground">3.4 Business Transfers</h3>
            <p className="text-slate-600">
              In the event of a company merger, acquisition, or asset sale, your
              information may be transferred. You will be given advance notice in such
              cases.
            </p>
            <p className="font-semibold text-foreground">
              We will never sell, rent, or trade your personal information to third
              parties for commercial purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
            <p className="text-slate-600">
              We implement industry-standard security measures to protect your
              information, including:
            </p>
            <BulletList items={securityMeasures} />
            <p className="text-slate-600">
              Please note that no transmission over the internet is 100% secure. While
              we take reasonable precautions, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Cookies Policy</h2>
            <p className="text-slate-600">
              Our website uses cookies, which are small text files stored in your
              browser. Cookies are used for:
            </p>
            <BulletList items={cookieUses} />
            <p className="text-slate-600">
              You may disable cookies through your browser settings; however, this may
              affect certain website features.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
            <p className="text-slate-600">We retain your personal information for as long as:</p>
            <BulletList items={retentionRules} />
            <p className="text-slate-600">
              After account closure, we retain basic records for 3 years for legal
              compliance purposes, after which the data is permanently deleted.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Your Rights</h2>
            <p className="text-slate-600">
              You have the following rights regarding your personal information:
            </p>
            <BulletList items={rights} />
            <p className="text-slate-600">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:legal@kriscel.com" className="text-accent font-semibold hover:underline">
                legal@kriscel.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Third-Party Links</h2>
            <p className="text-slate-600">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of those websites. We recommend that
              you review their privacy policies separately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Children&apos;s Privacy</h2>
            <p className="text-slate-600">
              Our services are not intended for individuals under the age of 18. We do
              not knowingly collect personal information from minors. If you believe we
              have collected such information, please contact us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time. Changes will take
              effect upon posting to our website. For material changes, we will notify
              you via email or a prominent website notice. Continued use of our services
              implies acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-accent/10 bg-accent/5 p-6">
            <h2 className="text-2xl font-bold text-foreground">11. Contact Information</h2>
            <p className="text-slate-600">
              For any questions, concerns, or requests related to this Privacy Policy,
              please contact us:
            </p>
            <div className="space-y-1 text-slate-700">
              <p>
                <strong>Company:</strong> Kriscel Tech Pvt. Ltd.
              </p>
              <p>
                <strong>Website:</strong> www.kriscel.com
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@kriscel.com" className="text-accent font-semibold hover:underline">
                  legal@kriscel.com
                </a>
              </p>
              <p>
                <strong>Response Time:</strong> Within 7 business days
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
