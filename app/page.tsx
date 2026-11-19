'use client';

import LeaderBoard from "@/components/LeaderBoard";
import MatchEditor from "@/components/MatchEditor";
import ScoreBoard from "@/components/ScoreBoard";
import { TEAMS, MATCHES, MEMBERS } from "@/lib/data";
import { calculateStandings } from "@/lib/stats";
import { useEditMode } from "@/context/EditModeProvider";

export default function Home() {
  const { isEditMode } = useEditMode();
  const standings = calculateStandings(TEAMS, MATCHES);

  return (
      <main id="home">
        <div className="boardwrapper">
          <ScoreBoard teams={TEAMS} matches={MATCHES} members={MEMBERS} />
          <LeaderBoard standings={standings} teams={TEAMS}/>
        </div>
        {isEditMode && (
          <div>
            <MatchEditor teams={TEAMS} />
          </div>
        )}
      </main>
  );
}