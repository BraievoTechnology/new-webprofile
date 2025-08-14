"use client";
import PrimaryButton from "@/components/maincomponents/PrimaryButton";
import { Profile } from "@/components/maincomponents/ProfileCard";
import RotatingButton from "@/components/maincomponents/RotatingButton";
import StatCard from "@/components/maincomponents/StatCard";
import { TeamMemberCard } from "@/components/maincomponents/TeamMemberCard";
import { CoFounder } from "@/components/maincomponents/types";
import React from "react";
import { useState } from "react";
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

function AboutSection() {
  type StatsItem = { value: string; label: string; variant: "blue" | "gray" };
  const stats: StatsItem[] = [
    { value: "50+", label: "Live Client Project", variant: "blue" },
    {
      value: "30+",
      label: "In-House Products in Development",
      variant: "gray",
    },
    { value: "10+", label: "Team Members", variant: "blue" },
    { value: "2024", label: "Founded Year", variant: "gray" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const coFoundersData: CoFounder[] = [
    {
      id: 1,
      name: "Kaveeja Sachintha Perera",
      role: "Full-stack Developer",
      imageUrl:
        "https://www.trinitycollege.edu/wp-content/uploads/2023/03/Mens4-scaled.jpg",
      socials: [
        { name: "instagram", url: "#" },
        { name: "linkedin", url: "#" },
        { name: "facebook", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Kaveeja Sachintha Perera",
      role: "Full-stack Developer",
      imageUrl:
        "https://www.trinitycollege.edu/wp-content/uploads/2023/03/Mens4-scaled.jpg",
      socials: [
        { name: "instagram", url: "#" },
        { name: "linkedin", url: "#" },
        { name: "facebook", url: "#" },
      ],
    },
    {
      id: 3,
      name: "Kaveeja Sachintha Perera",
      role: "Full-stack Developer",
      imageUrl:
        "https://www.trinitycollege.edu/wp-content/uploads/2023/03/Mens4-scaled.jpg",
      socials: [
        { name: "instagram", url: "#" },
        { name: "linkedin", url: "#" },
        { name: "facebook", url: "#" },
      ],
    },
  ];

  const profilesData: Profile[] = [
    {
      id: 1,
      name: "Ava Johnson",
      title: "CEO & Visionary",
      imageUrl:
        "https://media.istockphoto.com/id/1144821476/photo/two-smiling-businessmen-shaking-hands-while-sitting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=fQs3Y6QKXvdbh4msnt3yO7dl4WcZ49wDQtepbpU59CE=",
      socials: [
        { name: "linkedin", url: "https://linkedin.com/in/avajohnson" },
        { name: "instagram", url: "https://instagram.com/avajohnson" },
      ],
    },
    {
      id: 2,
      name: "Liam Smith",
      title: "CTO & Engineer",
      imageUrl:
        "https://media.istockphoto.com/id/1144821476/photo/two-smiling-businessmen-shaking-hands-while-sitting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=fQs3Y6QKXvdbh4msnt3yO7dl4WcZ49wDQtepbpU59CE=",
      socials: [
        { name: "linkedin", url: "https://linkedin.com/in/liamsmith" },
        { name: "twitter", url: "https://twitter.com/liamsmith" },
      ],
    },
  ];

  const teamMembers = [
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
    {
      name: "Kaveeja Sachintha Perera",
      title: "Full-stack Developer",
      imageUrl:
        "https://shinemd.com/wp-content/uploads/2022/05/Treatments-For-Men-1.jpg",
      socials: [
        { platform: "instagram", url: "https://instagram.com" } as const,
        { platform: "linkedin", url: "https://linkedin.com" } as const,
        { platform: "facebook", url: "https://facebook.com" } as const,
      ],
    },
  ];

  return (
    <>
      <ScrollMotionDiv delay={0}>
        <section className="px-4 py-15 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-4/4 space-y-6 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <p
              style={{ fontFamily: "Sora, sans-serif" }}
              className="bg-gradient-to-r from-[#022F8C] to-[#019CD4] text-white text-xs font-regular px-6 py-2 rounded-full shadow-md inline-block"
            >
              Our Story. Our Vision.
            </p>

            <h1
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-4xl sm:text-5xl lg:text-[80px] text-gray-900 leading-tight font-regular"
            >
              The Innovation That Drives{" "}
              <span
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-[#022F8C] font-bold"
              >
                BraiEvo
              </span>{" "}
              <span
                style={{ fontFamily: "Sora, sans-serif" }}
                className="text-[#022F8C] font-bold"
              >
                Forward.
              </span>
            </h1>

            <p
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-[#1A1A1A] text-base sm:text-lg lg:text-xl font-light font-sora max-w-2xl mx-auto lg:mx-0"
            >
              At BraiEvo Technologies, we are more than just developers. We're
              innovators shaping the digital future. Our journey is rooted in
              passion, purpose, and precision, delivering AI-driven and scalable
              software solutions across industries.
            </p>

            <p
              style={{ fontFamily: "Lato, sans-serif" }}
              className="text-[#273B84] text-sm sm:text-base lg:text-[20px] font-regular"
            >
              Join us as we continue to build technology that transforms the
              world.
            </p>

            {/* <button className="mt-4 bg-gradient-to-r from-blue-800 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium shadow-md w-full sm:w-auto">
              Let's Build the Future Together
            </button> */}

            <PrimaryButton onClick={() => alert("Clicked!")}>
              Let's Build the Future Together
            </PrimaryButton>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex gap-2 ml-4 overflow-hidden">
            <img
              src="/assets/heroImg.png"
              alt="Team collaboration"
              className="w-full mt-20 max-w-sm sm:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <ScrollMotionDiv delay={0.2}>
        <section>
          <main className="-mt-15 container mx-auto px-6 py-16 md:py-24 text-center max-w-7xl">
            <h1
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-[70px] font-light text-gray-900 leading-tight"
            >
              Driven by Innovation. Powered by Purpose.
            </h1>
            <p
              style={{ fontFamily: "Sora, sans-serif" }}
              className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              At BraiEvo Technologies, we're a passionate team of engineers and
              innovators shaping next-gen solutions. We may be at the beginning,
              but our commitment to quality, creativity, and AI-driven
              technology is already making a difference.
            </p>

            {/* Stat strip */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                {
                  title: "Performs",
                  value: stats[0].value,
                  caption: stats[0].label,
                },
                {
                  title: "Engages",
                  value: "$2’259.56",
                  caption: "Raise Invest in 2024",
                },
                { title: "Tests", value: "5.0", caption: "Customer review" },
                {
                  title: "Produces",
                  value: stats[2].value,
                  caption: "Projects delivered",
                },
              ].map((item, idx) => (
                <ScrollMotionDiv key={idx} delay={0.3 + idx * 0.1}>
                  <div className="bg-white">
                    <div className="text-gray-800 text-lg font-medium pb-2 border-b border-gray-200">
                      {item.title}
                    </div>
                    <div className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {item.caption}
                    </div>
                  </div>
                </ScrollMotionDiv>
              ))}
            </div>
          </main>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <ScrollMotionDiv delay={0.4}>
        <section className="px-4 py-16 max-w-7xl mx-auto space-y-24">
          {/* Vision Section */}
          <ScrollMotionDiv delay={0.6}>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/assets/OurVision.png"
                  alt="Team discussing digital innovation"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2
                  style={{ fontFamily: "Sora, sans-serif" }}
                  className="text-3xl sm:text-4xl font-bold text-[#022F8C] mb-4"
                >
                  Our Vision
                </h2>
                <p
                  style={{ fontFamily: "Sora, sans-serif" }}
                  className="text-gray-700 text-base sm:text-lg leading-relaxed font-light"
                >
                  At BraiEvo Technologies, our vision is to lead the way in
                  digital innovation by creating intelligent, scalable, and
                  human-centered technology. We are driven by a passion to
                  empower businesses and individuals through impactful digital
                  solutions.
                </p>
              </div>
            </div>
          </ScrollMotionDiv>

          {/* Mission Section */}
          <ScrollMotionDiv delay={0.8}>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2
                  style={{ fontFamily: "Sora, sans-serif" }}
                  className="text-3xl sm:text-4xl font-bold text-[#022F8C] mb-4"
                >
                  Our Mission
                </h2>
                <p
                  style={{ fontFamily: "Sora, sans-serif" }}
                  className="text-gray-700 text-base sm:text-lg leading-relaxed font-light"
                >
                  Our mission is to deliver cutting-edge digital products and
                  services that solve real-world problems. We aim to empower
                  clients through smart, adaptive solutions developed by a
                  passionate team, grounded in purpose, and built for impact.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/assets/OurMission.png"
                  alt="Team discussing digital innovation"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-cover"
                />
              </div>
            </div>
          </ScrollMotionDiv>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <ScrollMotionDiv delay={1.0}>
        <section className="px-4 py-16 max-w-7xl mx-auto text-center">
          {/* Headings */}
          <h1
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-[70px] font-light text-[#1A1A1A] font-sora leading-tight sm:leading-[1.2]"
          >
            Empowering Innovation with <br />
            <span
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-[#1A1A1A] mt-4 block"
            >
              BraiEvo Technologies
            </span>
          </h1>

          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-[25px] text-gray-600 font-light max-w-3xl mx-auto mb-10 mt-6 leading-relaxed"
          >
            Discover how we blend creativity, technology, and expertise
            <br className="hidden sm:block" />
            to build smarter digital solutions for a better tomorrow.
          </p>

          <div className="relative w-full max-w-6xl mx-auto overflow-hidden shadow-lg aspect-video border-[6px] sm:border-[8px] border-[#787878] rounded-3xl sm:rounded-[40px]">
            {!isOpen ? (
              <>
                <img
                  src="https://media.istockphoto.com/id/1466459662/video/tracking-shot-cyclist-cycling-uphill-on-road-in-sunrise-mountains.jpg?s=640x640&k=20&c=bD22c_TNoQX08hFKhaLZUvCg1AgepEypRwIvUGrlBmc="
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition rounded-2xl"
                >
                  <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/njX2bu-_Vw4?autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <ScrollMotionDiv delay={1.2}>
        <section className="px-4 py-16 max-w-7xl mx-auto text-center">
          <h1
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-[70px] font-light text-[#1A1A1A] font-sora leading-tight"
          >
            Meet the Visionary Behind <br />
            <span className="text-[#1A1A1A] mt-4 block">BraiEvo</span>
          </h1>

          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-gray-600 font-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-sora mt-6 "
          >
            Empowering innovation through leadership, experience, and a bold
            vision for the future.
            <br className="hidden sm:block" />
          </p>

          <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden max-w-6xl mx-auto my-10 ">
            <div className="md:w-1/2">
              <img
                src="/assets/manImg.png"
                alt="Kaveeja Perera"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="md:w-2/4 p-8 bg-[#273B84] text-white flex flex-col justify-between rounded-[30px] -ml-8">
              <div>
                <p
                  style={{ fontFamily: "Sora, sans-serif" }}
                  className="text-left text-lg sm:text-xl leading-relaxed font-light font-sora"
                >
                  The founder and driving force behind BraiEvo Technologies,
                  Kaveeja is a passionate technologist with over 7 years of
                  experience in full-stack development, AI integration, and
                  software architecture. His journey began with a deep curiosity
                  for how technology can solve real-world problems, and it has
                  since evolved into a mission to build intelligent, scalable,
                  and impactful digital solutions.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-sora text-left">
                  Kaveeja Perera
                </h2>
                <p className="text-md font-light font-sora text-left">
                  Founder of BraiEvo Technologies
                </p>
              </div>
            </div>
          </div>
          <div className="flex ml-230 -mt-45">
            <RotatingButton />
          </div>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <ScrollMotionDiv delay={1.4}>
        <section className="px-4 py-16 max-w-7xl mx-auto text-center">
          <h1
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-[70px] font-light text-[#1A1A1A] font-sora leading-tight"
          >
            Meet Our Co-Founders <br />
            <span className="text-[#1A1A1A] mt-4 block">BraiEvo</span>
          </h1>

          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-gray-600 font-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-6 mb-10 font-sora"
          >
            Strategic thinkers and innovators leading BraiEvo's technology
            evolution.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollMotionDiv key={i} delay={1.6 + i * 0.1}>
                <TeamMemberCard key={i} member={member} />
              </ScrollMotionDiv>
            ))}
          </div>
        </section>
      </ScrollMotionDiv>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* max-w-[calc(var(--container-max)+(var(--container-pad)*2))] */}
      <ScrollMotionDiv delay={1.8}>
        <section className="px-4 py-16 max-w-7xl mx-auto text-center">
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-4xl sm:text-5xl font-light font-sora text-gray-900"
          >
            Our Team of Experts
          </h2>
          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-gray-600 mt-4 text-base sm:text-lg font-lato"
          >
            A Diverse Crew Of Developers, Designers, And Creators Powering Our
            Mission.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollMotionDiv key={i} delay={2.0 + i * 0.1}>
                <TeamMemberCard key={i} member={member} />
              </ScrollMotionDiv>
            ))}
          </div>
        </section>
      </ScrollMotionDiv>
    </>
  );
}

export default AboutSection;
