export type VoteType = "good" | "neutral" | "bad";
export type { Votes };
interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

