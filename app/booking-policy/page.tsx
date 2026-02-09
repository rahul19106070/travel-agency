// app/components/BookingPolicy.tsx
"use client";

import Navbar from "@/components/Navbar";
import React from "react";

const BookingPolicy = () => {
  return (
    <>
    <Navbar appearance="home-scroll"  />
    <section className="max-w-4xl mx-auto px-6 sm:px-10 py-15 lg:py-20 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 lg:mb-8">ISKY Booking Policy</h1>
      <p className="mb-6">
        At Infinite Sky (ISKY), we craft bespoke travel experiences through carefully curated partnerships 
        with trusted providers worldwide. This policy outlines the essential terms governing your booking.
      </p>

      <p className="text-2xl font-semibold mb-3">Booking Confirmation</p>
      <ul className="list-disc list-inside mb-7">
        <li>Written approval of your final itinerary</li>
        <li>Receipt of the required deposit or full payment</li>
      </ul>

      <p className="text-2xl font-semibold mb-3">Payment Terms</p>
      <ul className="list-disc list-inside mb-7">
        <li>A deposit is required to secure all services and suppliers</li>
        <li>The full balance is typically due prior to departure (specific timeline provided at booking)</li>
        <li>
          Pricing may be subject to adjustment due to currency fluctuations, supplier rate changes, or availability
        </li>
      </ul>

      <p className="text-2xl font-semibold mb-3">Amendments & Cancellations</p>
      <ul className="list-disc list-inside mb-7">
        <li>All modification or cancellation requests must be submitted in writing</li>
        <li>Cancellation fees apply and vary based on proximity to departure date</li>
        <li>
          Please note that certain accommodations, experiences, and flights carry non-refundable conditions
        </li>
      </ul>

      <p className="text-2xl font-semibold mb-3">Travel Documentation</p>
      <ul className="list-disc list-inside mb-7">
        <li>Passports with adequate validity</li>
        <li>Appropriate visas and entry permits</li>
        <li>Travel insurance coverage</li>
        <li>Required health documentation and vaccinations</li>
      </ul>

      <p className="text-2xl font-semibold mb-3">Travel Insurance</p>
      <p className="mb-6">
        We strongly recommend comprehensive travel insurance for all travellers to protect against unforeseen circumstances.
      </p>

      <p className="text-2xl font-semibold mb-3">Our Commitment</p>
      <p className="mb-7">
        ISKY operates as a licensed travel coordinator in full compliance with UAE tourism regulations. 
        We partner exclusively with reputable service providers and remain committed to supporting our clients promptly 
        should any travel disruption or emergency arise.
      </p>

      <hr className="my-6" />

      <p className="text-2xl font-semibold mb-1">Questions or booking assistance?</p>
      <p>
        Contact our team at <a href="mailto:info@isky.ae" className="text-blue-600 underline">info@isky.ae</a>
      </p>
    </section>
  </>
  );
};

export default BookingPolicy;
