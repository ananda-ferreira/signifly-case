'use client';

import { useMemo } from "react";
import LeaderBoard from "@/components/LeaderBoard";
import MatchEditor from "@/components/MatchEditor";
import ScoreBoard from "@/components/ScoreBoard";
import { TEAMS, MEMBERS } from "@/lib/data";
import { calculateStandings } from "@/lib/stats";
import { useEditMode } from "@/context/EditModeProvider";

export default function Home() {
  const { isEditMode, matches } = useEditMode();
  const standings = useMemo(() => calculateStandings(TEAMS, matches), [matches]);

  return (
      <main id="home">
        <div className="boardwrapper">
          <ScoreBoard teams={TEAMS} members={MEMBERS} />
          <LeaderBoard standings={standings} teams={TEAMS}/>
        </div>
        {isEditMode && (
            <MatchEditor teams={TEAMS} />
        )}
      </main>
  );
}