"use client"
import { Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-6">
          <Shield size={48} className="text-blue-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          How YA TU SABES STUDIO protects your personal information
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: December 2024</p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 border border-gray-700">
        <div className="prose prose-invert prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye size={24} className="mr-3 text-blue-600" />
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                <strong>Personal Information:</strong> We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Contact us through our website, phone, or email</li>
                <li>Book services or schedule appointments</li>
                <li>Participate in our podcast interviews</li>
                <li>Subscribe to our services</li>
                <li>Interact with us on social media</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                This information may include your name, email address, phone number, business information, and any other information you choose to provide.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Database size={24} className="mr-3 text-blue-600" />
              2. How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Create and manage your account</li>
                <li>Schedule and coordinate podcast sessions</li>
                <li>Produce and distribute podcast content</li>
                <li>Promote our services and community events</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock size={24} className="mr-3 text-blue-600" />
              3. Information Sharing and Disclosure
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website, conducting our business, or serving our clients</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use industry-standard encryption and security protocols to protect your data during transmission and storage.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our services and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We may use third-party services for:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Website analytics and performance monitoring</li>
                <li>Social media integration</li>
                <li>Email marketing and communication</li>
                <li>Payment processing</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing of your information</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Mail size={24} className="mr-3 text-blue-600" />
              11. Contact Us
            </h2>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-300 leading-relaxed mb-2">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-gray-300 leading-relaxed mb-2">
                <strong>YA TU SABES STUDIO</strong><br />
                3201 W. DAVIS ST<br />
                Dallas, TX 75211<br />
                <Phone size={16} className="inline mr-1" /> Phone: 214-562-7755<br />
                <Mail size={16} className="inline mr-1" /> Email: yatusabesstudio@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          By using our services, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
