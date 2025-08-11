"use client";

import { useState } from "react";
import { Briefcase, Clock, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import PrimaryButton from "@/components/maincomponents/PrimaryButton";
type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

interface JobCardProps {
  id: string;
  title: string;
  category: string;
  jobType: JobType;
  description: string;
  postedAt: string;
}

const jobTypeColors: Record<JobType, string> = {
  "Full-time": "bg-green-100 text-green-700",
  "Part-time": "bg-yellow-100 text-yellow-700",
  Contract: "bg-blue-100 text-blue-700",
  Internship: "bg-purple-100 text-purple-700",
};

export default function JobCard({
  id,
  title,
  category,
  jobType,
  description,
  postedAt,
}: JobCardProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-5 transition-shadow duration-300 bg-white shadow rounded-xl hover:shadow-lg">
      {/* Featured Position */}
      <div className="flex items-center gap-[16px] mb-2 text-[20px] font-light text-[#022F8C]">
        <span className="flex justify-center  items-center align text-[#022F8C]">
          <Star size={24} />
        </span>
        Featured Position
      </div>

      {/* Title & Job Type */}
      <div className="flex items-center justify-between mt-[32px]">
        <h3 className="text-[24px] font-semibold">{title}</h3>
        <span
          className={clsx(
            "px-5 py-2 rounded-full text-sm font-normal",
            jobTypeColors[jobType]
          )}
        >
          {jobType}
        </span>
      </div>

      {/* Category */}
      <div className="flex items-center gap-2 mt-[24px] text-[20px] text-gray-500">
        <div className="flex items-center gap-[16px]">
          <Briefcase size={24} />
          {category}
        </div>
      </div>

      {/* Description */}
      <p className="mt-[64px] text-[20px] text-gray-600">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-[64px] text-[20px] text-gray-500">
        <div className="flex items-center gap-[16px]">
          <Clock size={24} />
          Posted {postedAt}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="font-normal text-[#022F8C] transition-colors"
        >
          View Details →
        </button>
      </div>

      {/* Apply Now Button */}
      <PrimaryButton
        onClick={() => router.push(`/apply/${id}`)}
        className="w-full mt-[40px]"
      >
        Apply Now
      </PrimaryButton>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md p-6 transition-all duration-300 transform scale-100 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold">{title} — Details</h3>
            <p className="text-sm text-gray-600">
              {/* Placeholder: Replace with actual job details from backend */}
              This is where the job details will go.
            </p>
            <div className="flex justify-end mt-5">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm transition bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
