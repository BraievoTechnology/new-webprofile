import Image from "next/image";
import { Clock, Globe, BookOpen, Coffee, Award, Heart } from "lucide-react";
import Button from "@/components/maincomponents/PrimaryButton";
import ViewPositionsButton from "@/components/maincomponents/ViewPositionsButton";
import careerImage from "../../../../public/assets/Career-page-rightside.png";
import JobCard from "@/components/maincomponents/JobCard";

const benefits = [
  {
    icon: <Clock size={24} className="text-[#022F8C]" />,
    title: "Flexible Working Hours",
    description:
      "Work when you're most productive with our flexible scheduling options.",
  },
  {
    icon: <Globe size={24} className="text-[#022F8C]" />,
    title: "Remote Work Options",
    description:
      "Work from anywhere in the world with our distributed team structure.",
  },
  {
    icon: <BookOpen size={24} className="text-[#022F8C]" />,
    title: "Learning & Development",
    description:
      "Continuous learning with education stipends and regular workshops.",
  },
  {
    icon: <Coffee size={24} className="text-[#022F8C]" />,
    title: "Collaborative Culture",
    description:
      "Join a supportive team that values collaboration and innovation.",
  },
  {
    icon: <Award size={24} className="text-[#022F8C]" />,
    title: "Career Growth",
    description:
      "Clear paths for advancement and opportunities to grow your skills.",
  },
  {
    icon: <Heart size={24} className="text-[#022F8C]" />,
    title: "Comprehensive Benefits",
    description:
      "Health insurance, retirement plans, and wellness programs for your wellbeing.",
  },
];

const jobs = [
  {
    id: "1",
    title: "Full Stack Developer",
    category: "Web Development",
    jobType: "Full-time" as const,
    description:
      "Work across our entire stack to build complete web applications. You'll be responsible for both frontend and backend development, working with modern technologies.",
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    category: "Design",
    jobType: "Part-time" as const,
    description:
      "Design beautiful, user-friendly interfaces and collaborate closely with our development team.",
    postedAt: "5 days ago",
  },
];

export default function Hero() {
  return (
    <section className="px-4 py-12 bg-white md:py-20">
      <div className="container flex flex-col items-center px-4 mx-auto md:px-8 lg:px-20 md:flex-row">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-[90px] font-meduim leading-tight">
            Join Our Team of <span className="text-[#022F8C]">Innovators</span>
          </h1>
          <p className="mt-6 sm:mt-8 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-[30px] font-light text-[#1A1A1A] max-w-lg mx-auto md:mx-0">
            Build the future with us. We're looking for talented individuals who
            are passionate about creating cutting-edge technology solutions.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-12">
            <ViewPositionsButton jobs={[]} />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-[500px] md:max-w-none">
          <Image
            src={careerImage}
            alt="Career opportunities illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Why join our team */}

      <div className="px-4 mx-auto md:px-8 lg:px-60 mt-[164px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[70px] font-light text-[#1A1A1A]">
            Why Join Our Team?
          </h2>
          <p className="max-w-2xl mt-[32px] mb-[80px] mx-auto text-[24px] text-[#1A1A1A]">
            We offer more than just a job. Join us and be part of a company that
            values innovation, growth, and well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-[32px] h-[237px] transition-shadow rounded-lg bg-gray-50 hover:shadow-md"
            >
              <div className="mb-[32px]">{benefit.icon}</div>
              <h3 className="mb-[32px] text-[24px] font-semibold text-[#1A1A1A]">
                {benefit.title}
              </h3>
              <p className="text-[#1A1A1A] font-light text-[18px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}

      <div className="px-4 mx-auto md:px-8 lg:px-60 mt-[164px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[70px] font-light text-[#1A1A1A]">
            Open Positions
          </h2>
          <p className="max-w-2xl mt-[32px] mb-[80px] mx-auto text-[24px] text-[#1A1A1A]">
            Discover Your Next Career Opportunity And Team Of Passionate
            Innovators Building The Future Of Technology
          </p>
        </div>

        {/* Featured Opportunities */}
        <div className="mt-[124px] text-center">
          <h3 className="text-[42px] font-bold text-[#1A1A1A] mb-[32px]">
            Featured Opportunities
          </h3>

          {/* No positions available */}
          <div className="flex flex-col items-center justify-center p-12 border border-blue-100 shadow-sm bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 mb-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h4 className="mb-2 text-2xl font-semibold text-gray-800">
              No Positions Available
            </h4>
            <p className="max-w-md text-gray-600">
              We’re not hiring at the moment, but exciting opportunities are on
              the horizon. Stay tuned and check back soon!
            </p>
          </div>

          {/* Original job cards (commented for later use) */}
          {/*
  <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
    {jobs.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </div>
  */}
        </div>
      </div>
    </section>
  );
}
