import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kriscel Tech Pvt. Ltd.",
  description:
    "Terms and Conditions for Kriscel Tech Pvt. Ltd. covering services, client responsibilities, payments, intellectual property, confidentiality, and dispute resolution.",
};

const services = [
  "Business Development: lead generation, market research, business strategy consulting, and partnership development",
  "Digital Marketing: SEO, social media marketing, content marketing, PPC advertising, email marketing, and analytics reporting",
  "Web & App Development: website design, development, and maintenance",
  "Brand Management: branding strategy, creative design, and reputation management",
  "Performance Marketing: ROI-driven campaigns and conversion rate optimisation",
];

const clientResponsibilities = [
  "Provide accurate and complete business information",
  "Provide required access, credentials, and assets in a timely manner, such as website login, social media accounts, and brand assets",
  "Provide feedback and approvals within the defined timelines",
  "Cooperate with the Company's team throughout the engagement",
  "Make agreed payments on time",
  "Comply with all applicable laws and regulations",
];

const paymentTerms = [
  "Service fees will be as defined in the SOW",
  "Invoices will be issued within the first 5 days of each month",
  "Payment is due within 15 days of the invoice date",
  "GST and other applicable taxes will be charged at prevailing rates",
];

const latePayment = [
  "A monthly interest of 2% will be charged on payments outstanding beyond 15 days",
  "Services may be temporarily suspended if payment remains outstanding for more than 30 days",
  "Services may be terminated if the outstanding balance remains unpaid for more than 60 days",
];

const refundPolicy = [
  "No refunds will be provided for completed work",
  "If the Company fails to deliver a service due to its own error, a proportional refund will be considered",
  "Refunds for prepaid but unused services will be issued on a pro-rata basis, after deduction of a 15% administrative fee",
];

const confidentiality = [
  "Business strategies, financial information, client lists, proprietary data, and trade secrets shall remain confidential",
  "Confidential information shall not be shared with third parties without prior written consent",
  "This obligation shall remain in effect for 3 years following the termination of services",
  "A separate Non-Disclosure Agreement (NDA) may be signed for additional confidentiality and non-disclosure protections",
];

const companyTermination = [
  "Payment default where outstanding balance remains unpaid for more than 60 days",
  "Material breach of these Terms by the Client",
  "Fraudulent, illegal, or unethical activities by the Client",
  "Force majeure events that prevent service delivery",
];

const liabilityLimits = [
  "The Company's total liability for any claim shall not exceed the total fees paid for the relevant project",
  "The Company shall not be liable for indirect, incidental, special, or consequential damages",
  "This includes, without limitation, loss of profits, loss of revenue, data loss, or reputational damage",
  "Digital marketing results, including ROI, rankings, and conversions, cannot be guaranteed; the Company will follow industry best practices",
];

const companyWarranties = [
  "Services will be delivered in a professional and workmanlike manner",
  "The Company holds all required licences and permissions to provide the services",
  "Delivered work will not infringe upon third-party intellectual property rights",
];

const disclaimers = [
  "Digital marketing outcomes, including search rankings, social reach, and conversion rates, are not guaranteed, as they are subject to the algorithms of third-party platforms such as Google and Meta",
  "Services are provided on an 'as is' basis; uninterrupted availability is not guaranteed",
];

const indemnification = [
  "Content, data, or materials provided by the Client",
  "The Client's breach of these Terms",
  "The Client's infringement of third-party intellectual property rights",
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

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <main className="max-w-4xl mx-auto w-full">
        <header className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Kriscel Tech Pvt. Ltd.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted mt-4">Effective Date: May 2025</p>
        </header>

        <div className="space-y-10 text-base leading-7">
          <section className="space-y-4">
            <p className="text-slate-600">
              These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding
              agreement between you (&quot;Client&quot;) and Kriscel Tech Pvt. Ltd.
              (&quot;Company&quot;). By accessing or using our website or services, you
              agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Services</h2>
            <h3 className="text-lg font-semibold text-foreground">1.1 Services Provided</h3>
            <p className="text-slate-600">Kriscel Tech Pvt. Ltd. provides the following services:</p>
            <BulletList items={services} />
            <h3 className="text-lg font-semibold text-foreground">1.2 Service Scope</h3>
            <p className="text-slate-600">
              The specific services, deliverables, timelines, and fees for each project
              will be defined in a separate Service Agreement or Statement of Work
              (SOW), which shall form part of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Client Responsibilities</h2>
            <p className="text-slate-600">
              To ensure smooth delivery of services, the Client agrees to:
            </p>
            <BulletList items={clientResponsibilities} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Payment Terms</h2>
            <h3 className="text-lg font-semibold text-foreground">3.1 Fees and Invoicing</h3>
            <BulletList items={paymentTerms} />
            <h3 className="text-lg font-semibold text-foreground">3.2 Late Payment</h3>
            <BulletList items={latePayment} />
            <h3 className="text-lg font-semibold text-foreground">3.3 Refund Policy</h3>
            <BulletList items={refundPolicy} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
            <h3 className="text-lg font-semibold text-foreground">4.1 Client&apos;s Intellectual Property</h3>
            <p className="text-slate-600">
              Ownership of the Client&apos;s existing trademarks, logos, content, and
              brand assets remains with the Client. The Client grants the Company a
              licence to use these assets solely for the purpose of delivering the
              agreed services.
            </p>
            <h3 className="text-lg font-semibold text-foreground">4.2 Developed Work</h3>
            <p className="text-slate-600">
              Ownership of final deliverables, including websites, content, designs,
              and campaigns, will be transferred to the Client only upon receipt of
              full payment. Until then, all intellectual property rights remain with
              the Company.
            </p>
            <h3 className="text-lg font-semibold text-foreground">4.3 Company&apos;s Intellectual Property</h3>
            <p className="text-slate-600">
              The Company&apos;s proprietary tools, frameworks, methodologies, and
              processes are and shall remain the intellectual property of the Company.
              The Client has no right to reproduce, distribute, or reverse engineer
              these assets.
            </p>
            <h3 className="text-lg font-semibold text-foreground">4.4 Portfolio Rights</h3>
            <p className="text-slate-600">
              The Company reserves the right to showcase completed work in its
              portfolio, case studies, and marketing materials, unless the Client has
              objected in writing prior to publication.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Confidentiality</h2>
            <p className="text-slate-600">Both parties agree that:</p>
            <BulletList items={confidentiality} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Term and Termination</h2>
            <h3 className="text-lg font-semibold text-foreground">6.1 Agreement Term</h3>
            <p className="text-slate-600">
              This Agreement is effective for the period defined in the SOW, or until
              terminated by either party.
            </p>
            <h3 className="text-lg font-semibold text-foreground">6.2 Termination by Client</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>The Client may terminate this Agreement by providing 30 days&apos; written notice.</li>
              <li>Payment for all work completed during the notice period remains due.</li>
              <li>Refunds for prepaid services will be issued after applicable administrative deductions.</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground">6.3 Termination by Company</h3>
            <p className="text-slate-600">
              The Company may terminate this Agreement under the following circumstances:
            </p>
            <BulletList items={companyTermination} />
            <h3 className="text-lg font-semibold text-foreground">6.4 Effect of Termination</h3>
            <p className="text-slate-600">
              Upon termination, the Client shall return all access credentials; the
              Company shall hand over all paid deliverables; and confidentiality
              obligations shall continue to apply.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
            <p className="text-slate-600">To the maximum extent permitted by applicable law:</p>
            <BulletList items={liabilityLimits} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Warranties and Disclaimers</h2>
            <h3 className="text-lg font-semibold text-foreground">8.1 Company Warranties</h3>
            <BulletList items={companyWarranties} />
            <h3 className="text-lg font-semibold text-foreground">8.2 Disclaimers</h3>
            <BulletList items={disclaimers} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Dispute Resolution</h2>
            <h3 className="text-lg font-semibold text-foreground">9.1 Amicable Resolution</h3>
            <p className="text-slate-600">
              Both parties agree to attempt to resolve any dispute through good faith
              negotiation for a period of 30 days before pursuing formal proceedings.
            </p>
            <h3 className="text-lg font-semibold text-foreground">9.2 Arbitration</h3>
            <p className="text-slate-600">
              If a dispute cannot be resolved through negotiation, it shall be referred
              to arbitration in accordance with the Arbitration and Conciliation Act,
              1996 (India).
            </p>
            <h3 className="text-lg font-semibold text-foreground">9.3 Governing Law and Jurisdiction</h3>
            <p className="text-slate-600">
              These Terms are governed by the laws of India. The courts of Delhi shall
              have exclusive jurisdiction over any disputes arising out of or in
              connection with these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Indemnification</h2>
            <p className="text-slate-600">
              The Client agrees to indemnify and hold harmless the Company against any
              claims arising from:
            </p>
            <BulletList items={indemnification} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">11. Force Majeure</h2>
            <p className="text-slate-600">
              The Company shall not be held liable for any failure to perform its
              obligations where such performance is prevented, restricted, or
              interfered with by circumstances beyond its reasonable control, including
              but not limited to natural disasters, war, government actions, cyber
              attacks, pandemics, power failures, or internet outages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">12. Modifications to Terms</h2>
            <p className="text-slate-600">
              The Company reserves the right to update these Terms at any time. For
              material changes, 30 days&apos; advance notice will be provided. Continued
              use of our services following such notice constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">13. Entire Agreement</h2>
            <p className="text-slate-600">
              These Terms, together with the Privacy Policy and any relevant SOW or
              Service Agreements, constitute the entire agreement between the parties
              and supersede all prior discussions, representations, or agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">14. Severability</h2>
            <p className="text-slate-600">
              If any provision of these Terms is found to be invalid or unenforceable,
              the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-accent/10 bg-accent/5 p-6">
            <h2 className="text-2xl font-bold text-foreground">15. Contact</h2>
            <p className="text-slate-600">
              For any questions regarding these Terms, please contact us:
            </p>
            <div className="space-y-1 text-slate-700">
              <p>
                <strong>Kriscel Tech Pvt. Ltd.</strong>
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
