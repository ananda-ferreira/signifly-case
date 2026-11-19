// temporary, replaced later by a real backend
import type { Team, Match, Member } from "./types";

export const TEAMS: Team[] = [
  { id: "a", name: "Yellow", color: "hsl(52, 100%, 75%)", memberIds: ["mem1", "mem2"] },
  { id: "b", name: "Red", color: "hsl(0, 100%, 77%)", memberIds: ["mem3", "mem4"] },
  { id: "c", name: "Purple", color: "hsl(272, 100%, 80%)", memberIds: ["mem5", "mem6"] },
  { id: "d", name: "Green", color: "hsl(92, 100%, 78%)", memberIds: ["mem7", "mem8"] },
  { id: "e", name: "Blue", color: "hsl(222, 100%, 72%)", memberIds: ["mem1", "mem2"] },
  { id: "f", name: "Beige", color: "hsl(33, 100%, 89%)", memberIds: ["mem3", "mem4"] },
  { id: "g", name: "Orange", color: "hsl(30, 100%, 74%)", memberIds: ["mem5", "mem6"] },
  { id: "h", name: "Grey", color: "hsl(0, 0%, 71%)", memberIds: ["mem7", "mem8"] },
];

export const MEMBERS: Member[] = [
  { id: "mem1", name: "Paulina"},
  { id: "mem2", name: "Jonathan"},
  { id: "mem3", name: "Martina"},
  { id: "mem4", name: "Jenny"},
  { id: "mem5", name: "Julius"},
  { id: "mem6", name: "Suzana"},
  { id: "mem7", name: "Rasmus"},
  { id: "mem8", name: "Maurice"},
];

export const MATCHES: Match[] = [
  { id: "m1", teamOneId: "a", teamTwoId: "b", scoreOne: 10, scoreTwo: 3 },
  { id: "m2", teamOneId: "a", teamTwoId: "c", scoreOne: 10, scoreTwo: 5 },
  { id: "m3", teamOneId: "b", teamTwoId: "a", scoreOne: 10, scoreTwo: 1 },
];