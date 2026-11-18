export interface Member {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
//   color: string;        // hex; UI uses it for recognition
  memberIds: string[];  // 1-4 members
}

export interface Match {
  id: string;
  teamOneId: string;
  teamTwoId: string;
  scoreOne: number;
  scoreTwo: number;
//   playedAt: string;     // ISO timestamp
}

export interface Tournament {
  id: string;
  name: string;
  teamIds: string[];       // 0-8 teams
  matches: Match[];        // 0-2 matches per pair (round robin)
}

// Derived, never stored:
export interface Standing {
  teamId: string;
  won: number;
  lost: number;
  played: number;
  points: number;       // e.g. 3 for win, 0 for loss; extend for draws if needed
  scoreDiff: number;   // tie-breaker
}