"use client";

import React from "react";
import MapComponent from "@/components/mapcomponent/MapComponent";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

// Scroll-triggered motion component
const ScrollMotionDiv = ({ children, delay = 0, ...props }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const validatePhone = (value: string) => {
    const regex = /^\+?[\d\s\-\(\)]+$/;
    return regex.test(value) && value.length >= 10;
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Thank you! Your message has been sent successfully.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      <ScrollMotionDiv delay={0}>
        <section className="bg-gradient-to-r from-[#022F8C] to-[#019CD4]  py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Info */}
            <div>
              <h1 className="text-4xl md:text-6xl text-white font-semibold mb-6">
                Contact Us
              </h1>
              <p className=" max-w-xl text-white mb-6">
                Email, call, or complete the form to learn how BraiEvo can solve
                your problem.
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-white">info@braievo.com</p>
                <p className="text-white">+94 7724 33243</p>
                <a href="#" className="text-white underline">
                  Customer Support
                </a>
              </div>

              {/* Info blocks */}
              <div className="grid md:grid-cols-3 gap-8 text-white mt-5">
                <div>
                  <h4 className="font-medium text-lg mb-1">Customer Support</h4>
                  <p className="text-sm ">
                    Our support team is available around the clock to address
                    any concerns or queries you may have.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">
                    Feedback and Suggestions
                  </h4>
                  <p className="text-sm ">
                    We welcome your feedback to keep improving our products and
                    services.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Media Inquiries</h4>
                  <p className="text-sm">
                    For media-related questions or press inquiries, contact
                    media@braievo.com.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-semibold mb-1">
                Get in Touch
              </h2>
              <p className="text-gray-500 mb-8">You can reach us anytime</p>

              <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className={`w-full border px-4 py-3 rounded-lg focus:outline-none ${
                        formErrors.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className={`w-full border px-4 py-3 rounded-lg focus:outline-none ${
                        formErrors.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none pl-10 ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <RiMailLine className="w-5 h-5" />
                  </span>
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1 pl-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-3 items-center">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className={`w-full border px-4 py-3 rounded-lg focus:outline-none ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={120}
                    placeholder="How can we help?"
                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none pr-12 ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                    {formData.message.length}/120
                  </span>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-full text-white text-sm md:text-base shadow-sm ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#1763FF] hover:opacity-90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                <p className="text-[12px] text-gray-500 text-center">
                  By contacting us, you agree to our{" "}
                  <span className="underline">Terms of service</span> and{" "}
                  <span className="underline">Privacy Policy</span>
                </p>
              </form>
            </div>
          </div>
        </section>
      </ScrollMotionDiv>

      {/* Location & FAQ Section */}
      <ScrollMotionDiv delay={0.2}>
        <section
          style={{ fontFamily: "Sora, sans-serif" }}
          className="bg-white text-gray-800 px-6 py-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 px-4">
            <div className="rounded-[20px] overflow-hidden">
              <MapComponent />
            </div>

            {/* Location Info */}
            <div>
              <p className="bg-gradient-to-r from-[#022F8C] to-[#019CD4] text-white text-xs font-regular px-6 py-2 rounded-full shadow-md inline-block">
                Our Location
              </p>
              <h3 className="mt-4 text-3xl font-bold mb-4">
                Connecting Near and Far
              </h3>
              <h4 className="font-bold mb-2 mt-6">Headquarters</h4>
              <div className="font-light space-y-1">
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
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
          >
            <div className="mt-10">
              <p className="bg-gradient-to-r from-[#022F8C] to-[#019CD4] text-white text-xs font-regular px-6 py-2 rounded-full shadow-md inline-block">
                FAQ
              </p>
              <h3 className="text-3xl font-bold mb-4 mt-4">
                Have Any <br /> Questions For Us?
              </h3>
              <p className="font-light text-[#1A1A1A]">
                If you have a question, we're here to help. Just enter your
                email below and we’ll get back to you with the answers you need.
              </p>
            </div>

            {/* Accordion Section */}
            <div className=" rounded-md divide-y divide-blue-200">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center">
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
      </ScrollMotionDiv>

      {/* Email CTA */}
      <ScrollMotionDiv delay={0.4}>
        <section
          style={{ fontFamily: "Sora, sans-serif" }}
          className="bg-[#022F8C] min-h-[300px] w-full mx-auto  text-white py-8 px-4 flex items-center justify-center"
        >
          <div className=" text-center">
            <h2 className="text-xl font-light md:text-2xl mb-4">
              Simplify your workflow with speed you can trust.
            </h2>
            <form className="flex flex-col md:flex-row max-w-2xl mx-auto justify-center items-center gap-3">
              <div className="relative w-full md:w-2/3">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  <LuMail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="pl-10 p-3 rounded-md text-gray-400 w-full bg-white border-none outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded w-full md:w-auto"
              >
                Reach Us
              </button>
            </form>
          </div>
        </section>
      </ScrollMotionDiv>
    </div>
  );
}
