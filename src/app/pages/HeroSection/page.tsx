"use client";

import PrimaryButton from "@/components/maincomponents/PrimaryButton";

export default function HeroSection() {
  return (
    <>
      <section className="px-4 py-20 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Subheading */}
        <p
          style={{ fontFamily: "Sora, sans-serif" }}
          className="text-gray-600 text-[20px] sm:text-[28px] md:text-[36px] mb-2 font-extralight"
        >
          Welcome to BraiEvo
        </p>

        {/* Main heading */}
        <h1
          style={{ fontFamily: "Sora, sans-serif" }}
          className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[75px] text-[#383838] leading-tight mb-6 max-w-6xl font-extralight"
        >
          CRAFTING{" "}
          <span className="font-bold text-[#022F8C] font-sora block sm:inline">
            SMART DIGITAL EXPERIENCES
          </span>{" "}
          WITH
          <br className="hidden sm:block" />
          <span className="font-sora block sm:inline">
            PURPOSE AND PRECISION.
          </span>
        </h1>

        {/* CTA button */}
        <div className="mb-10">
          <PrimaryButton onClick={() => alert("Clicked!")}>
            Get a Free Consultation
          </PrimaryButton>
        </div>

        {/* Illustration */}
        <div className="relative w-full max-w-full px-2 sm:px-0">
          <img
            src="/assets/landingPageImage.png"
            alt="Hero Illustration"
            width={1200}
            height={700}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className="bg-white py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-[#022F8C] mt-[-4rem] mb-6 font-light font-sora"
          >
            Innovate with Purpose, Build <br className="hidden sm:block" />
            with Intelligence
          </h2>

          {/* Subheading */}
          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-16 font-light font-sora"
          >
            From Early-Stage Startups To Scaling Enterprises, We Craft
            Intelligent Digital Solutions That Drive Results. Explore How Our
            Services Are Designed To Elevate Your Vision Through Smart
            Technology, Intuitive Design, And Strategic Innovation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col space-y-24 mt-25">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center -mt-20">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/card1.png"
                alt="Strategic Innovation Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold text-gray-900 mb-4 "
              >
                Digital Product Development
              </h3>
              <p
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl "
              >
                We design and develop high-performing web and mobile
                applications, delivering end-to-end solutions with seamless user
                experiences.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center -mt-20">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/card2.png"
                alt="Enterprise & Business Solutions"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold text-gray-900 mb-4"
              >
                Enterprise & Business Solutions
              </h3>
              <p
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl"
              >
                Empowering businesses with scalable ERP systems, data-driven
                insights, and robust integrations tailored to your operational
                needs.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center -mt-20">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/card3.png"
                alt="Strategic Innovation Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold text-gray-900 mb-4 "
              >
                Strategic Innovation Services
              </h3>
              <p
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl "
              >
                We help businesses evolve through strategic innovation,
                combining technology trends with agile execution to ensure
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
