import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="prose max-w-none">
              <p className="mb-6"><strong>Last updated:</strong> March 17, 2026</p>

              <p className="mb-6">
                Welcome to FaresMatch! These terms and conditions outline the rules and regulations for the use of FaresMatch's Website and Services.
              </p>

              <p className="mb-6">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use FaresMatch if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Interpretation and Definitions</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Interpretation</h3>
              <p className="mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Definitions</h3>
              <p className="mb-2"><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
              <p className="mb-2"><strong>Country</strong> refers to: New York, United States</p>
              <p className="mb-2"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to FaresMatch.</p>
              <p className="mb-2"><strong>Device</strong> means any device that can access the Service such as a computer, cellphone or digital tablet.</p>
              <p className="mb-2"><strong>Service</strong> refers to the Website.</p>
              <p className="mb-2"><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p>
              <p className="mb-2"><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
              <p className="mb-2"><strong>Website</strong> refers to FaresMatch, accessible from <a href="https://www.faresmatch.com" className="text-blue-600 hover:underline">https://www.faresmatch.com</a></p>
              <p className="mb-6"><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Acknowledgment</h2>
              <p className="mb-6">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
              <p className="mb-6">
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service. You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account. You may not use as Your username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Content</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Your Right to Post Content</h3>
              <p className="mb-2">
                Our Service allows You to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="mb-6">
                By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Uses</h2>
              <p className="mb-6">
                You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Company, an Employee of the Company, another user, or any other person or entity.</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Online Travel Services</h2>
              <p className="mb-6">
                FaresMatch is a travel search service that aggregates information from various travel suppliers including airlines, hotels, car rental companies, and other service providers. FaresMatch does not provide transportation services, accommodation or other travel services. All travel arrangements are made directly between you and the applicable service provider. We are not a party to any agreement between you and any service provider. The terms and conditions of the individual service providers will govern your relationship with them.
              </p>
              <p className="mb-6">
                Prices shown on FaresMatch are subject to change. All prices are quoted in USD unless otherwise specified. All bookings are subject to availability at the time of reservation. We reserve the right to correct errors in pricing, availability, and other information that may occur despite our best efforts.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Booking and Payment Terms</h2>
              <p className="mb-6">
                When you make a booking through FaresMatch, you enter into a contract directly with the service provider. FaresMatch acts only as an intermediary and agent for the service provider. The service provider is solely responsible for providing the travel services you purchase. All payments are processed through secure payment providers. We do not store your payment information on our servers.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Cancellations and Refunds</h2>
              <p className="mb-6">
                Cancellation and refund policies are determined by the individual service providers. These policies vary by airline, hotel, car rental company, and other service providers. Please review the cancellation policy applicable to your booking before completing your reservation. FaresMatch is not responsible for refund processing, which is handled directly by the service provider.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                To the maximum extent permitted by applicable law, in no event shall the Company, or its suppliers or service providers, be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of the Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Accuracy of Information</h2>
              <p className="mb-6">
                We strive to provide accurate information, but we do not warrant the completeness, accuracy, or reliability of any content, information, or data made available through our Service. Travel information, including prices, availability, schedules, and policies, may change at any time and we are not responsible for such changes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Links to Other Websites</h2>
              <p className="mb-6">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to These Terms and Conditions</h2>
              <p className="mb-6">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>By email: terms@faresmatch.com</li>
                <li>By phone: +1-800-918-3039</li>
                <li>By visiting this page on our website: https://www.faresmatch.com/contact</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}