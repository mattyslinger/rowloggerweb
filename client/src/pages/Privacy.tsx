
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
            <section>
              <p className="text-slate-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-slate-600 leading-relaxed">
                <span className="brand-text">RowLogger</span> ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">1.1 Information You Provide</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you use RowLogger, you may provide:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Rowing session data (distance, time, splits, power metrics)</li>
                <li>Personal best records</li>
                <li>Training history and workout summaries</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">1.2 Automatically Collected Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may automatically collect:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Device information (model, operating system version)</li>
                <li>App usage statistics and crash reports</li>
                <li>Anonymous analytics data to improve app performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Provide and maintain the app's core functionality</li>
                <li>Track your rowing performance and progress</li>
                <li>Generate personal bests and power curve analytics</li>
                <li>Improve app performance and user experience</li>
                <li>Fix bugs and technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Data Storage</h2>
              <p className="text-slate-600 leading-relaxed">
                All your workout data is stored locally on your device. We do not store your personal workout 
                data on remote servers. You maintain full control over your data and can export or delete it at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Sharing</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or share your personal information with third parties, except:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>When required by law or legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed">
                RowLogger may use third-party services for analytics and crash reporting. These services have their 
                own privacy policies governing the use of your information. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate security measures to protect your data from unauthorized access, alteration, 
                or destruction. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                RowLogger is not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected such information, please contact us 
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Access your personal data stored in the app</li>
                <li>Export your workout data at any time</li>
                <li>Delete all your data from the app</li>
                <li>Opt-out of analytics data collection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating 
                the "Last Updated" date at the top of this policy. Your continued use of the app after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p className="text-slate-600">
                Email: <a href="mailto:contact@rowlogger.app" className="text-primary hover:underline">contact@rowlogger.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Export Compliance</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                RowLogger is distributed internationally through Google Play and may be subject to U.S. export 
                control laws, including the Export Administration Regulations (EAR). The app uses standard 
                encryption for data security.
              </p>
              <p className="text-slate-600 leading-relaxed">
                You agree to comply with all applicable export and import control laws and regulations in your use 
                of RowLogger. You will not use or otherwise export or re-export RowLogger except as authorized by 
                United States law and the laws of the jurisdiction in which the app was obtained.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. California Privacy Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                California residents have specific rights regarding their personal information under the California 
                Consumer Privacy Act (CCPA). Since RowLogger stores all workout data locally on your device and does 
                not collect or sell personal information to third parties, CCPA's main provisions regarding data 
                access, deletion, and sale opt-out are already built into the app's core functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. European Union Users (GDPR)</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have certain data protection rights under 
                the General Data Protection Regulation (GDPR). RowLogger's local-first architecture means:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Right to Access:</strong> You can access all your data directly within the app</li>
                <li><strong>Right to Rectification:</strong> You can edit your workout data at any time</li>
                <li><strong>Right to Erasure:</strong> You can delete all your data from the app</li>
                <li><strong>Right to Data Portability:</strong> You can export your data in a machine-readable format</li>
                <li><strong>Right to Object:</strong> You can opt-out of analytics data collection in app settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">14. Data Retention</h2>
              <p className="text-slate-600 leading-relaxed">
                Your workout data is retained locally on your device for as long as you choose to keep the app installed. 
                You can delete specific workouts or all data at any time through the app. If you uninstall the app, 
                all locally stored data will be removed from your device (unless you have created a backup). Anonymous 
                analytics data may be retained for up to 24 months for app improvement purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">15. Do Not Track Signals</h2>
              <p className="text-slate-600 leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not 
                want to have your online activity tracked. As RowLogger is a mobile application that stores data locally, 
                tracking signals do not apply. However, you can disable analytics in the app settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">16. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                RowLogger is provided "as is" without warranties of any kind. While we strive to maintain accurate 
                calculations and reliable performance tracking, we are not liable for any data loss, inaccuracies in 
                metrics, or any damages arising from your use of the app. Always back up important data and consult 
                with qualified fitness professionals for training advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">17. Severability</h2>
              <p className="text-slate-600 leading-relaxed">
                If any provision of this Privacy Policy is found to be unenforceable or invalid, that provision will be 
                limited or eliminated to the minimum extent necessary so that this Privacy Policy will otherwise remain 
                in full force and effect.
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-500 italic">
                By using RowLogger, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
