export type AccessLevel = 1 | 2;

export interface UserProfile {
  displayName: string;
  email: string;
  teamId: string | null;
  accessLevel: AccessLevel;
}

export interface Idea {
  content: string;
  author: string;
  timestamp: number;
}