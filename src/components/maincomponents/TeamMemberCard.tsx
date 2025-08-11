import React, { useState } from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";
import { IconButton } from "./Button";

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  socials?: {
    platform: "instagram" | "linkedin" | "facebook";
    url: string;
  }[];
}

export const TeamMemberCard: React.FC<{ member: TeamMember }> = ({
  member,
}) => {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-4 text-center relative group">
      <div className="overflow-hidden rounded-2xl -mb-2 relative">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-auto object-cover rounded-2xl"
        />

        {member.socials?.length > 0 && (
          <div
            // className="absolute flex -bottom-18 right-5"
            className="flex justify-end -mt-8 -mr-20"
            onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}
          >
            <div className="relative ">
              {/* Arrow Button */}
              <IconButton
                icon={
                  <FiArrowUpRight className="text-white w-20 h-auto bg-gradient-to-br from-[#019CD4] to-[#022F8C] border-[3px] border-white rounded-full " />
                }
                url="#"
              />
            </div>

            {/* Social Icons */}
            <div
              className={`relative bottom-15 -left-25 transition-opacity duration-300 ${
                showSocials ? "opacity-100" : "opacity-0"
              }`}
            >
              {member.socials.map((social, idx) => {
                const Icon =
                  social.platform === "instagram"
                    ? FiInstagram
                    : social.platform === "linkedin"
                    ? FiLinkedin
                    : FiFacebook;

                return (
                  <IconButton
                    key={idx}
                    icon={
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Icon className="text-[#273B84] w-5 h-5" />
                      </div>
                    }
                    url={social.url}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.title}</p>
    </div>
  );
};
