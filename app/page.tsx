import LeaderBoard from "@/components/LeaderBoard";
import ScoreBoard from "@/components/ScoreBoard";
import { TEAMS, MATCHES, MEMBERS } from "@/lib/data";
import { calculateStandings } from "@/lib/stats";

export default function Home() {

  const standings = calculateStandings(TEAMS, MATCHES)

  return (
      <main id="home">
        <div className="boardwrapper">
          <ScoreBoard teams={TEAMS} matches={MATCHES} members={MEMBERS} />
          <LeaderBoard standings={standings} teams={TEAMS}/>
          {/* <ToggleLeaderBoardBtn /> */}
        </div>
        <div className="adminbtn">

        </div>
      </main>
  )
}