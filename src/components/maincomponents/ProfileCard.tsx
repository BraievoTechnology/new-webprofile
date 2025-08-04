import React from 'react';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export interface SocialLink {
  name: 'linkedin' | 'instagram' | 'facebook' | 'twitter';
  url: string;
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  socials: SocialLink[];
}

interface ProfileCardProps {
  profile: Profile;
}

const iconMap = {
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  facebook: FiFacebook,
  twitter: FiTwitter,
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { name, title, imageUrl, socials } = profile;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100 shadow-sm"
      />
      <h3 className="text-xl font-semibold text-[#1A1A1A]">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{title}</p>

      <div className="flex justify-center space-x-4 mt-4">
        {socials.map((social, index) => {
          const Icon = iconMap[social.name];
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
