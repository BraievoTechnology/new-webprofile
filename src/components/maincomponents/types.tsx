
export interface SocialLink {
  name: 'linkedin' | 'instagram' | 'facebook';
  url: string;
}

export interface CoFounder {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials?: SocialLink[];
}