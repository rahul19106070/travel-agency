"use client";
import Navbar from "@/components/Navbar";



export default function PrivacyPolicyPage() {
  return (
    <>
<Navbar appearance="home-scroll"  />
    <main className="w-full bg-[#fbfaf7] text-[#1f1f1f]">
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-4 leading-relaxed">
          At Infinite Sky, trust is woven into every journey we create. We believe that extraordinary travel begins with genuine care—for your dreams, your comfort, and your privacy.
        </p>

        <p className="mb-8 leading-relaxed">
          This policy reflects our commitment to protecting your personal information with the same attention and discretion we bring to curating your travels.
        </p>

        {/* Section */}
        <p className="font-bold text-2xl mt-10 mb-3">
          The Information We Gather
        </p>

        <p className="mb-3">
          When you begin your journey with ISKY, we may collect:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Your name and preferred contact details</li>
          <li>Travel aspirations, preferences, and itinerary wishes</li>
          <li>Booking essentials for arranging flights, accommodations, and curated experiences</li>
          <li>Personal details you choose to share—dietary requirements, accessibility needs, celebration occasions—so we can anticipate your every comfort</li>
        </ul>

        <p className="mb-8">
          We may also gather minimal website data, such as browser type or device information, to refine your digital experience with us.
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          How We Honor Your Information
        </p>

        <p className="mb-3">
          Every detail you entrust to us serves a single purpose: to craft seamless, unforgettable journeys.
        </p>

        <p className="mb-3">We use your information to:</p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Design bespoke itineraries tailored to your vision</li>
          <li>Coordinate with our global network of premier partners</li>
          <li>Provide dedicated support throughout your travels</li>
          <li>Share thoughtfully curated inspiration—only when you wish to hear from us</li>
        </ul>

        <p className="mb-8">
          Your information exists to elevate your experience, never to overwhelm it.
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          Sharing with Care
        </p>

        <p className="mb-3">
          Your privacy is handled with the utmost discretion. We share information only when essential to deliver your travel services, and only with:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Distinguished hotels, resorts, and private villas</li>
          <li>Trusted airlines and premium transport providers</li>
          <li>Vetted local guides and exclusive experience curators</li>
          <li>Secure payment and booking platforms</li>
        </ul>

        <p className="mb-8">
          We never sell your personal data. Every partner we work with shares our commitment to excellence and privacy.
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          You Remain in Control
        </p>

        <p className="mb-3">
          Your preferences guide everything we do.
        </p>

        <p className="mb-3">
          You may request to view, update, or remove your personal information at any time. Simply reach out, and we’ll respond with care.
        </p>

        <p className="mb-8">
          You can also choose to pause promotional communications whenever you wish—without affecting the personalized service you receive.
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          Our Promise of Protection
        </p>

        <p className="mb-8">
          We safeguard your information through secure systems, encrypted processes, and trusted protocols—because your confidence in us is paramount.
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          We're Here for You
        </p>

        <p className="mb-2">
          Questions about your privacy? Our team is always available to assist.
        </p>

        <p className="mb-1">
          <strong>Email:</strong> privacy@isky.ae
        </p>

        <p className="mb-6">
          <strong>Based in:</strong> United Arab Emirates
        </p>

        {/* Section */}
        <p className="font-semibold text-2xl mt-10 mb-3">
          Evolving with Excellence
        </p>

        <p className="mb-3">
          As we grow and as global standards evolve, we may update this policy to reflect enhanced practices or regulatory developments within the UAE.
        </p>

        <p className="mb-10">
          Any changes will continue to honor the same principle: your trust, protected.
        </p>

        {/* Footer line */}
        <hr className="my-10 border-gray-300" />

        <p className="italic text-center text-sm">
          Because every great journey begins with peace of mind.
        </p>

      </section>
    </main>
    </>
  );
}
