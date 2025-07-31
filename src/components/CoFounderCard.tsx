
import React from 'react';
import { CoFounder } from './types';
import { ArrowUpRightIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './icons';

interface CoFounderCardProps {
  founder: CoFounder;
}

const SocialIcon: React.FC<{ name: 'linkedin' | 'instagram' | 'facebook' }> = ({ name }) => {
    const iconClass = "w-6 h-6 text-white";
    switch (name) {
        case 'linkedin':
            return <LinkedInIcon className={iconClass} />;
        case 'instagram':
            return <InstagramIcon className={iconClass} />;
        case 'facebook':
            return <FacebookIcon className={iconClass} />;
        default:
            return null;
    }
};

const CoFounderCard: React.FC<CoFounderCardProps> = ({ founder }) => {
  const { name, role, imageUrl, socials } = founder;

  return (
    <div className="text-center flex flex-col items-center">
      <div className="relative group w-full max-w-sm">
        <img
          src={imageUrl}
          alt={`Portrait of ${name}`}
          className="w-full aspect-[4/5] object-cover rounded-2xl bg-gray-200"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl flex items-center justify-center">
          {socials && socials.length > 0 ? (
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 hover:bg-gray-900/90 backdrop-blur-sm p-3 rounded-full transition-colors"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors">
              <ArrowUpRightIcon className="w-8 h-8" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 mt-1">{role}</p>
      </div>
    </div>
  );
};

export default CoFounderCard;
