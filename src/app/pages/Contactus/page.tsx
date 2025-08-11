"use client";

import MapComponent from "@/components/mapcomponent/MapComponent";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleBlur = () => {
    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Invalid email address");
    }
  };

  const faqs = [
    {
      question: "What makes Snappy different from other messaging apps?",
      answer:
        "Yes. It’s animated by default, but you can disable it if you prefer.",
    },
    {
      question: "How secure are my conversations on Snappy?",
      answer:
        "Your privacy is our priority. All conversations are encrypted end-to-end and never stored without your consent.",
    },
    {
      question: "Can I personalize my Snappy experience?",
      answer:
        "Absolutely! Customize themes, notification settings, and user preferences to match your style.",
    },
    {
      question: "What group features does Snappy offer?",
      answer:
        "From shared calendars to file sharing and threaded replies, Snappy makes group communication effortless and efficient.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-[#022F8C] to-[#019CD4] text-white rounded-bl-[30px] rounded-br-[30px] py-16">
        <div className="max-w-6xl px-6 mx-auto">
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="mb-2 text-3xl font-light text-center sm:text-4xl md:text-5xl"
          >
            Get In Touch
          </h2>
          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="mb-10 text-base font-light text-center sm:text-lg md:text-2xl"
          >
            You Can Reach Us Anytime
          </p>

          <div className="flex flex-col items-center gap-10 p-8 bg-white shadow-lg rounded-xl md:flex-row">
            {/* Left: Vector Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://img.freepik.com/premium-vector/contact-us-concept-illustration_114360-2299.jpg"
                alt="Contact Illustration"
                className="w-full h-auto"
              />
            </div>

            {/* Right: Contact Form */}
            <form className="w-full space-y-6 text-gray-800 md:w-1/2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  className={`w-full border px-4 py-3 rounded-md focus:outline-none pl-10 text-gray-800 placeholder-gray-400 ${
                    error ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <RiMailLine className="w-5 h-5" />
                </span>
                {error && (
                  <p className="pl-1 mt-1 text-sm text-red-500">{error}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="+94 Phone Number"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="How Can We Help?"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#022F8C] to-[#019CD4] text-white py-3 rounded-md hover:opacity-90 transition duration-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Info Boxes */}
          <div className="grid gap-6 mt-10 text-white md:grid-cols-3">
            <div style={{ fontFamily: "Sora, sans-serif" }}>
              <h4 className="font-medium text-[20px] mb-1">Contact Us</h4>
              <p className="font-thin">
                Let’s connect and build something great.
              </p>
              <p className="font-thin">Info@Braievo.Com</p>
              <p className="font-thin">+94 772433243</p>
              <p className="font-thin">Customer Support</p>
            </div>

            <div style={{ fontFamily: "Sora, sans-serif" }}>
              <h4 className="font-medium text-lg mb-1 text-[20px]">
                Feedback and Suggestions
              </h4>
              <p className="font-thin">
                We welcome your feedback to keep improving our products and
                services. Every suggestion helps shape the future of BraiEvo.
              </p>
            </div>

            <div style={{ fontFamily: "Sora, sans-serif" }}>
              <h4 className="font-semibold text-lg mb-1 text-[20px] font-medium">
                Partnership & Media Inquiries
              </h4>
              <p className="font-thin">
                For collaborations, partnerships, or media-related queries,
                please reach out at:
              </p>
              <p className="mt-2 font-thin">media@braievo.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & FAQ Section */}
      <section
        style={{ fontFamily: "Sora, sans-serif" }}
        className="px-6 py-20 text-gray-800 bg-white"
      >
        <div className="grid items-center grid-cols-1 gap-10 px-4 mx-auto mb-20 max-w-7xl md:grid-cols-2">
          <div className="rounded-[20px] overflow-hidden">
            <MapComponent />
          </div>

          {/* Location Info */}
          <div>
            <p className="text-sm text-[#022F8C] font-normal mb-1">
              Our Location
            </p>
            <h3 className="mt-4 mb-4 text-3xl font-bold">
              Connecting Near and Far
            </h3>
            <h4 className="mt-6 mb-2 font-bold">Headquarters</h4>
            <div className="space-y-1 font-light">
              <p>Snappy Inc.</p>
              <p>123 Tech Boulevard, Suite 456</p>
              <p>San Francisco, CA 12345</p>
              <p>United States</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          style={{ fontFamily: "Sora, sans-serif" }}
          className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2"
        >
          <div className="mt-10">
            <p className="text-sm text-[#022F8C] font-medium">FAQ</p>
            <h3 className="mt-4 mb-4 text-3xl font-bold">
              Have Any <br /> Questions For Us?
            </h3>
            <p className="font-light text-[#1A1A1A]">
              If you have a question, we&apos;re here to help. Just enter your
              email below and we&apos;ll get back to you with the answers you
              need.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="border border-blue-500 divide-y divide-blue-200 rounded-md">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg md:text-xl font-normal text-[#0F172A]">
                    {faq.question}
                  </h4>
                  <span className="text-xl md:text-2xl text-[#0F172A]">
                    {openIndex === idx ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>

                {openIndex === idx && (
                  <p className="mt-2 text-[#0F172A] font-light text-xs">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section
        style={{ fontFamily: "Sora, sans-serif" }}
        className="bg-[#022F8C] min-h-[300px] max-w-6xl mx-auto mb-40 text-white py-8 px-4 flex items-center justify-center"
      >
        <div className="w-full text-center">
          <h2 className="mb-4 text-xl font-light md:text-2xl">
            Simplify your workflow with speed you can trust.
          </h2>
          <form className="flex flex-col items-center justify-center max-w-2xl gap-3 mx-auto md:flex-row">
            <div className="relative w-full md:w-2/3">
              <span className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none left-3 top-1/2">
                <LuMail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 pl-10 text-gray-400 bg-white border-none rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-black rounded md:w-auto"
            >
              Reach Us
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
