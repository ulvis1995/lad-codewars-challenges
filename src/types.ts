export interface Challenge {
  id: string;
  name: string;
  slug: string;
  category: string;
  publishedAt: string | null;
  approvedAt: string | null;
  languages: string[];
  url: string;
  rank: { id: number | null; name: string | null; color: string | null };
  createdAt: string;
  createdBy?: {
    username: string;
    url: string;
  };
  approvedBy?: {
    username: string;
    url: string;
  };
  description: string;
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  voteScore: number;
  tags: string[];
  contributorsWanted: boolean;
  unresolved: { issues: number; suggestions: number };
}

export interface Language {
  id: string;
  name: string;
}

// Props

export interface ChallengeListProps {
  chooseKyu: string | null;
  chooseLanguage: string | null;
}

export interface FiltersProps {
  handleChangeKyu: (value: string | null) => void;
  handleChangeLanguage: (value: string | null) => void;
}
