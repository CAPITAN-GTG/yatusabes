"use client"
import { FileText, Shield, Users, DollarSign, Clock } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-6">
          <FileText size={48} className="text-blue-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
          Terms of Service for YA TU SABES STUDIO
        </p>
        <p className="text-sm text-gray-600 mt-2">Last updated: December 2024</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield size={24} className="mr-3 text-blue-600" />
              1. Acceptance of Terms
            </h2>
            <p className="text-black leading-relaxed mb-4">
              By accessing and using YA TU SABES STUDIO services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users size={24} className="mr-3 text-blue-600" />
              2. Services Description
            </h2>
            <p className="text-black leading-relaxed mb-4">
              YA TU SABES STUDIO provides the following services:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2 mb-4">
              <li><strong>Podcast Packages:</strong> Professional podcast interviews and promotion services including The Launch Pad ($200), The Amplifier ($600), and The Empire Builder ($1200)</li>
              <li><strong>Commercial Advertising:</strong> Radio commercials and advertising solutions ($2400 for 6 months, $4000 yearly)</li>
              <li><strong>Podcast Creation Services:</strong> One-time setup fee of $175 for creating your own podcast</li>
              <li><strong>Studio Time:</strong> $125 for 1 hour, $175 for 2 hours</li>
              <li><strong>Community Resources:</strong> Networking and support services for entrepreneurs and artists</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign size={24} className="mr-3 text-blue-600" />
              3. Payment Terms
            </h2>
            <div className="space-y-4">
              <p className="text-black leading-relaxed">
                <strong>Payment Methods:</strong> We accept various payment methods as agreed upon during booking.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Payment Schedule:</strong> Payment is due as specified in your service agreement. For podcast creation services, the $175 setup fee is due upfront.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Refund Policy:</strong> Refunds are handled on a case-by-case basis. Please contact us at yatusabesstudio@gmail.com or 214-562-7755 to discuss any refund requests.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Late Payments:</strong> Late payments may result in service suspension or additional fees.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock size={24} className="mr-3 text-blue-600" />
              4. Service Terms
            </h2>
            <div className="space-y-4">
              <p className="text-black leading-relaxed">
                <strong>Booking and Scheduling:</strong> All services are by appointment only. Please contact us to schedule your session.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Minimum Requirements:</strong> For podcast creation services, a minimum of 3 shows per month is required. No long-term contracts - month-to-month basis.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Content Guidelines:</strong> All content must be appropriate and comply with community standards. We reserve the right to refuse service for inappropriate content.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Studio Rules:</strong> Please arrive on time for your scheduled sessions. Late arrivals may result in shortened session time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4">
              <p className="text-black leading-relaxed">
                <strong>Client Content:</strong> You retain ownership of your content, but grant YA TU SABES STUDIO the right to use your content for promotional purposes as outlined in your service package.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Studio Content:</strong> YA TU SABES STUDIO retains ownership of all studio-produced content, including but not limited to intro music, drops, and promotional materials.
              </p>
              <p className="text-black leading-relaxed">
                <strong>Usage Rights:</strong> Digital reels, flyers, and promotional materials created for you may be used for your marketing purposes across social media platforms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-black leading-relaxed mb-4">
              YA TU SABES STUDIO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-black leading-relaxed mb-4">
              We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy for detailed information about how we collect, use, and protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-black leading-relaxed mb-4">
              Either party may terminate services with 30 days written notice. YA TU SABES STUDIO reserves the right to terminate services immediately for violation of these terms or inappropriate conduct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-black leading-relaxed mb-4">
              These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-black leading-relaxed mb-2">
                <strong>YA TU SABES STUDIO</strong><br />
                3201 W. DAVIS ST<br />
                Dallas, TX 75211<br />
                Phone: 214-562-7755<br />
                Email: yatusabesstudio@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-black leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. We will notify clients of any material changes via email or through our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          By using our services, you acknowledge that you have read and understood these Terms & Conditions.
        </p>
      </div>
    </div>
  );
}
