"use client";

import { useState, FormEvent } from "react";

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send to API or email backend
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold mb-4">
          Thank you for your enquiry!
        </h2>
        <p className="text-lg">
          Our team will be in touch very soon. If you need immediate support,
          call us.
        </p>
      </div>
    );
  }

  return (
    <main className="bg-white text-black">
      {/* Header block like Black Tomato */}
      <section className="bg-black text-white mr-0 py-3">
        <div className="lg:px-5 items-center flex flex-row justify-end max-w-full ml-auto text-right">
            <p className="text-xl md:text-xl font-light leading-relaxed">
            We are open tomorrow at 9.00am &nbsp; 
            </p>
            <p className="text-xl md:text-xl mr-0  font-light text-red-500">
            +44 207 426 9888
            </p>
        </div>
      </section>
       <section>
          <p className="text-3xl font-bold text-center pt-5">We are open tomorrow at 9.00am</p>
       </section>

      {/* Form + Info section */}
      <section className=" max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-15">
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: large form */}
          <form
            className=" bg-[#F5F5F5] p-8 lg:col-span-8 space-y-8"
            onSubmit={handleSubmit}
          >
            {/* Where would you like to go */}
            <div>
              <label className="block mb-2">
                Where would you like to go?
              </label>
              <input
                type="text"
                name="destination"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                placeholder="e.g. India, Japan, Europe"
              />
            </div>

            {/* Travel Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">
                  When would you like to go?
                </label>
                <input
                  type="month"
                  name="when"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>

              <div>
                <label className="block b-2">
                  How long would you like to go for?
                </label>
                <select
                  name="duration"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                >
                  <option>Short break</option>
                  <option>7 nights</option>
                  <option>10 nights</option>
                  <option>2 weeks</option>
                  <option>Longer</option>
                </select>
              </div>
            </div>

            {/* People & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">
                  How many people are traveling?
                </label>
                <input
                  type="number"
                  name="travelers"
                  min="1"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>

              <div>
                <label className="block  mb-2">
                  Budget (per person)
                </label>
                <input
                  type="number"
                  name="budget"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
            </div>

            {/* Currency */}
            <div>
              <label className="block mb-2">
                Currency
              </label>
              <select
                name="currency"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              >
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
                <option>Other</option>
              </select>
            </div>

            {/* Any other requests */}
            <div>
              <label className="block  mb-2">
                Any other comments or requests?
              </label>
              <textarea
                name="comments"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            {/* Personal details area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block  mb-2">
                  Your name*
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block  mb-2">
                  Email address*
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
            </div>

            {/* Confirm email & phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block  mb-2">
                  Confirm email address*
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block  mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white  py-3 rounded hover:bg-gray-800 transition"
            >
              Request my tailor made trip
            </button>
          </form>

          {/* RIGHT: info panel */}
          <aside className="lg:col-span-4 bg-[#F5F5F5] p-9">
            <div className="sticky top-24 space-y-8">
              <div>
                {/* <span className="text-3xl text-center justify-center align-text-center">🕘</span> */}

                <p className="text-xl text-center font-semibold uppercase tracking-widest mb-1">
                 Office Hours
                </p>
              </div>
              <div className="text-center">
                <p className=" uppercase tracking-widest mb-4">
Monday: 9:00am - 11:00pm                </p>
<p className="uppercase tracking-widest mb-4">
Tuesday: 9:00am - 11:00pm                </p>
<p className="uppercase tracking-widest mb-4">
Wednesday: 9:00am - 11:00pm                </p>
<p className="uppercase tracking-widest mb-4">
Thursday: 9:00am - 11:00pm                </p>
<p className=" uppercase tracking-widest mb-4">
Friday: 9:00am - 11:00pm                </p>
                <p className="leading-relaxed mb-4">
                  Saturday : Closed<br />
                  Sunday: Closed <br/>
(excluding national holidays)
                </p>
              </div>
              <div className="text-sm text-gray-600">
                Our Travel Experts are here to design your perfect trip,
                tailored to your needs with no templates and no pressure.
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}
