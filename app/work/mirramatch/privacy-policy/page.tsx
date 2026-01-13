"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-dark-primary">
      <section className="pt-[calc(2rem+40px)] pb-12 md:pt-[calc(7rem+40px)] md:pb-16 px-9 md:px-8 lg:px-12 relative min-h-screen">
        <div className="max-w-[900px] mx-auto">
          {/* Back Button */}
          <ScrollAnimation direction="right" delay={0.1}>
            <Link
              href="/work/mirramatch"
              className="relative inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 transition-all mb-8"
              style={{ color: '#121212', border: '1px solid #121212' }}
            >
              <GlowingEffect
                disabled={false}
                proximity={50}
                spread={30}
                blur={0}
                borderWidth={3}
                movementDuration={1.5}
              />
              <ArrowLeft className="w-5 h-5 relative z-10" style={{ color: '#121212' }} />
              <span className="relative z-10">Back to MirraMatch</span>
            </Link>
          </ScrollAnimation>

          {/* Privacy Policy Content */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#121212' }}>
                  🔒 Privacy Policy
                </h1>
                <p className="text-lg font-light" style={{ color: '#121212' }}>
                  Effective Date: January 12, 2026
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  1. Data Collection
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  We collect the following information to provide our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Images:</strong> Selfies you upload are processed by Google Gemini APIs to generate matches.</li>
                  <li><strong>Account Data:</strong> If you create an account, we store your credentials via Supabase Auth.</li>
                  <li><strong>Purchase History:</strong> Transaction data is managed through RevenueCat.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  2. How We Use Your Data
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>AI Processing:</strong> Images are analyzed by Google Gemini 2.0 Flash Vision to detect style markers and aesthetic vibes.</li>
                  <li><strong>Image Generation:</strong> Your data is used by the Nano Banana engine to create photorealistic partners.</li>
                  <li><strong>Storage:</strong> Generated matches and backstories are stored in Supabase for your gallery.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  3. Third-Party Service Providers
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  We share necessary data with the following partners to operate MirraMatch:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Google Cloud/Gemini:</strong> For AI image analysis and generation.</li>
                  <li><strong>Supabase:</strong> For database hosting, authentication, and cloud storage.</li>
                  <li><strong>RevenueCat:</strong> For processing in-app purchases and managing "Heart Coins".</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  4. Data Retention
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  Users can delete their saved matches from the gallery at any time. If you delete your account, your data will be purged from our Supabase production database.
                </p>
              </div>

              {/* Terms of Service */}
              <div className="pt-8 border-t" style={{ borderColor: 'rgba(18, 18, 18, 0.2)' }}>
                <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#121212' }}>
                  ⚖️ Terms of Service
                </h1>
                <p className="text-lg font-light mb-6" style={{ color: '#121212' }}>
                  Effective Date: January 12, 2026
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                      1. Description of Service
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                      MirraMatch provides AI-generated partner images based on user-uploaded selfies for entertainment purposes.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                      2. Virtual Currency (Heart Coins)
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                      <li><strong>Consumables:</strong> "Heart Coins" are a virtual currency used to unlock premium generations, custom parameters, and backstories.</li>
                      <li><strong>Non-Refundable:</strong> Once purchased via RevenueCat, coins are generally non-refundable except as required by app store policies.</li>
                      <li><strong>Usage:</strong> One coin is typically consumed per premium generation or enhancement.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                      3. User Conduct & Content Moderation
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                      <li><strong>Prohibited Content:</strong> Users may not upload explicit, illegal, or infringing content.</li>
                      <li><strong>Reporting:</strong> MirraMatch includes a built-in reporting flow for users to flag explicit content or generation issues.</li>
                      <li><strong>Termination:</strong> We reserve the right to terminate accounts that violate these terms.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                      4. Intellectual Property
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                      <li><strong>Your Content:</strong> You retain rights to the original selfies you upload.</li>
                      <li><strong>Generated Content:</strong> MirraMatch grants you a license to use and share generated images for personal, non-commercial use on social media.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                      5. Limitation of Liability
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                      MirraMatch is an entertainment app. AI-generated results and backstories are fictional and created for novelty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

