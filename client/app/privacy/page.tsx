import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kriscel Tech",
  description: "Privacy Policy of Kriscel Tech Pvt Ltd",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-foreground text-center">PRIVACY POLICY</h1>
        <p className="text-muted text-center mb-12">Last Updated : November 01,2025</p>

        <div className="prose prose-slate max-w-none text-foreground/80 space-y-6">
          <p>
            We at Kriscel Tech Pvt Ltd (“we”, “us”, “our”) are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect the personal data you provide when you visit our website [kriscel.com], use our services, communicate with us, or otherwise interact with us.
          </p>

          <p>
            By accessing or using our website or services, you agree to the practices described in this policy. If you do not agree, please do not use our website or provide us with your information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. Information We Collect</h2>
          <p>We may collect and process the following types of information:</p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">a. Personal Information:</h3>
          <p>
            When you contact us through forms, email, or chat, we may collect your name, email address, phone number, company name, and other details you voluntarily share.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">b. Non-Personal Information:</h3>
          <p>
            We automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referring URLs, pages viewed, and time spent on our site.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">c. Cookies and Tracking Technologies:</h3>
          <p>
            We use cookies, pixels, and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You may adjust your browser settings to disable cookies; however, doing so may limit some website functionality.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. How We Use Your Information</h2>
          <p>Your data helps us to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services and user experience.</li>
            <li>Respond to your inquiries, requests, or feedback.</li>
            <li>Process orders, service requests, or subscriptions.</li>
            <li>Send marketing and promotional content (only if you’ve opted in).</li>
            <li>Analyze website traffic and trends for business improvement.</li>
            <li>Fulfill legal, regulatory, and contractual obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. How We Share Information</h2>
          <p>We do not sell or rent your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors assisting with hosting, analytics, marketing, payment processing, or customer support — under strict confidentiality agreements.</li>
            <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or restructuring, your data may be transferred as part of that process.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once data is no longer needed, we securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Security Measures</h2>
          <p>
            We use appropriate administrative, technical, and physical safeguards to protect your personal data from unauthorized access, alteration, or disclosure. While we strive to ensure complete security, no method of transmission over the internet is entirely risk-free.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Your Rights</h2>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or update your personal data.</li>
            <li>Request the deletion of your data.</li>
            <li>Withdraw consent for marketing communications.</li>
            <li>Restrict or object to the processing of your data.</li>
          </ul>
          <p>To exercise these rights, please contact us using the details provided below.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or content. We encourage you to review the privacy policies of such external sites before providing any information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">8. Children’s Privacy</h2>
          <p>
            Our services are intended for individuals aged 18 years and above. We do not knowingly collect personal information from minors. If we become aware of data collected from a child, we will promptly delete it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">9. International Data Transfers</h2>
          <p>
            As part of our operations, your data may be transferred to servers or service providers located outside India. We ensure that such transfers are made with adequate data protection safeguards.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">10. Updates to This Policy</h2>
          <p>
            We may update or revise this Privacy Policy from time to time. Any changes will be reflected with an updated “Effective Date”. We encourage you to review this page periodically to stay informed.
          </p>

          <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
            <p className="font-medium text-foreground">
              Contact us or write to us at <a href="mailto:info@kriscel.com" className="text-accent hover:underline">info@kriscel.com</a> if you have any questions about our privacy policy, and we will be happy to clarify your doubts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
