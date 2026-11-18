// lib/data.ts - temporary, replaced later by a real backend
import type { Team, Match, Member } from "./types";

export const TEAMS: Team[] = [
  { id: "a", name: "red", memberIds: ["mem1", "mem2"] },
  { id: "b", name: "blue", memberIds: ["mem3", "mem4"] },
  { id: "c", name: "yellow", memberIds: ["mem5", "mem6"] },
  { id: "d", name: "purple", memberIds: ["mem1", "mem1"] },
  { id: "e", name: "orange", memberIds: ["mem1", "mem1"] },
  { id: "f", name: "green", memberIds: ["mem1", "mem1"] },
  // ... 6 more
];


// export const MEMBERS: Record<string, string> = {
//   a1: "Paulina", a2: "Jonas",
//   b1: "Camille", b2: "Martina",
//   c1: "Jane", c2: "Julius",
// };

export const MEMBERS: Member[] = [
  { id: "mem1", name: "Paulina"},
  { id: "mem2", name: "Jonathan"},
  { id: "mem3", name: "Martina"},
  { id: "mem4", name: "Jenny"},
  { id: "mem5", name: "Julius"},
  { id: "mem6", name: "Jan"},
];

export const MATCHES: Match[] = [
  { id: "m1", teamOneId: "a", teamTwoId: "b", scoreOne: 10, scoreTwo: 3 },
  { id: "m2", teamOneId: "a", teamTwoId: "c", scoreOne: 2, scoreTwo: 10 },
];