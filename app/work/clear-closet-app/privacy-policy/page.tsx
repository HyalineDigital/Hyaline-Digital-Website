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
              href="/work/clear-closet-app"
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
              <span className="relative z-10">Back to Clear Closet</span>
            </Link>
          </ScrollAnimation>

          {/* Privacy Policy Content */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#121212' }}>
                  Privacy Policy for Clear Closet
                </h1>
                <p className="text-lg font-light" style={{ color: '#121212' }}>
                  Effective Date: January 5, 2026
                </p>
                <p className="text-lg font-light" style={{ color: '#121212' }}>
                  Last Updated: January 5, 2026
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-6" style={{ color: '#121212' }}>
                  At Clear Closet, we are committed to helping you manage your wardrobe while respecting your privacy. This Privacy Policy explains how we handle your information, particularly given our local-first approach to data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  1. Information We Collect
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  Because Clear Closet is designed to be local-first, most of your data stays on your device.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Wardrobe Data:</strong> Images of clothing, categories, color palettes, fabric textures, and style analysis.</li>
                  <li><strong>Usage Data:</strong> Wear frequency, cost-per-wear calculations, login streaks, and outfit history.</li>
                  <li><strong>Location Data:</strong> If enabled, we use your general location to provide weather-integrated outfit planning.</li>
                  <li><strong>Device Information:</strong> Camera and Gallery access (only used when you choose to add an item).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  2. How We Use Your Data
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  We use the information collected to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Digitize & Organize:</strong> Use AI to automatically tag and categorize your clothing.</li>
                  <li><strong>Provide Insights:</strong> Calculate cost-per-wear and identify neglected items.</li>
                  <li><strong>Plan Outfits:</strong> Match clothes based on weather forecasts and style vibes.</li>
                  <li><strong>Gamification:</strong> Track streaks and provide visual feedback on wardrobe usage.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  3. AI Processing & Local-First Philosophy
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  We prioritize your privacy by processing data locally whenever possible.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>On-Device Analysis:</strong> Most AI identification (categories, colors, textures) happens directly on your smartphone.</li>
                  <li><strong>Minimal Data Transfer:</strong> If any AI features require cloud processing, images are processed and then discarded; we do not use your personal wardrobe photos to train global AI models without your explicit consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  4. Third-Party Services
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed mb-4" style={{ color: '#121212' }}>
                  To provide specific features, we may interact with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Weather APIs:</strong> To provide weather-integrated suggestions (your specific coordinates are not stored).</li>
                  <li><strong>Analytics:</strong> We may use anonymized crash reporting tools (like Firebase or Sentry) to improve app stability. These do not contain personal wardrobe images.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  5. Data Retention & Deletion
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  <li><strong>Storage:</strong> Since data is stored locally, deleting the app will generally delete all stored wardrobe data unless you have synced it to a personal cloud backup (e.g., iCloud or Google Drive).</li>
                  <li><strong>User Control:</strong> You can edit or delete any item, photo, or history entry within the app at any time.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  6. Security
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  We implement industry-standard security measures to protect your data. However, as the primary data is stored on your device, the security of your information also depends on your device's security settings (passcodes, biometrics).
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#121212' }}>
                  7. Changes to This Policy
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: '#121212' }}>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our GitHub repository and updating the "Effective Date."
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

