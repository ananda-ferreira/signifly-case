import type { Match, Standing, Team } from "./types";

/**
 * Calculates standings for all teams based on a list of matches.
 * Each win = 3 points, loss = 0 points.
 * scoreDiff = total points scored - total points taken
 */
export function calculateStandings(teams: Team[], matches: Match[]): Standing[] {
  const standingsMap = new Map<string, Standing>();

  // Initialize standings for all teams zeroed
  for (const team of teams) {
    standingsMap.set(team.id, {
      teamId: team.id,
      won: 0,
      lost: 0,
      played: 0,
      points: 0,
      scoreDiff: 0,
    });
  }

  // Process both teams for each match
  for (const match of matches) {
    const { teamOneId, teamTwoId, scoreOne, scoreTwo } = match;

    const teamOneStanding = standingsMap.get(teamOneId);
    const teamTwoStanding = standingsMap.get(teamTwoId);

    if (!teamOneStanding || !teamTwoStanding) continue;

    // count of games played
    teamOneStanding.played += 1;
    teamTwoStanding.played += 1;

    // for tie-break
    teamOneStanding.scoreDiff += scoreOne - scoreTwo;
    teamTwoStanding.scoreDiff += scoreTwo - scoreOne;

    if (scoreOne > scoreTwo) {
      teamOneStanding.won += 1;
      teamTwoStanding.lost += 1;
      teamOneStanding.points += 3;
    } else if (scoreOne < scoreTwo) {
      teamTwoStanding.won += 1;
      teamOneStanding.lost += 1;
      teamTwoStanding.points += 3;
    }
    // If draw, no points are awarded and no win/loss (points could be extended for draws)
  }

  return Array.from(standingsMap.values());
}
