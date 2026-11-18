import LeaderBoard from "@/components/LeaderBoard";
import ScoreBoard from "@/components/ScoreBoard";
import { TEAMS, MATCHES, MEMBERS } from "@/lib/data";

export default function Home() {
  return (
      <main id="home">
        <div className="boardwrapper">
          <ScoreBoard teams={TEAMS} matches={MATCHES} members={MEMBERS} />
          <LeaderBoard standings={null}/>
          {/* <ToggleLeaderBoardBtn /> */}
        </div>
        <div className="adminbtn">

        </div>
      </main>
  )
}