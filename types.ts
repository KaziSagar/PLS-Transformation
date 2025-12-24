
export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  imageUrl: string;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}
