
import LeaderBoard from "@/components/LeaderBoard";
import MatchEditor from "@/components/MatchEditor";
import ScoreBoard from "@/components/ScoreBoard";
import { TEAMS, MEMBERS } from "@/lib/data";

export default function Home() {

  return (
      <main id="home">
        <div className="boardwrapper">
          <ScoreBoard teams={TEAMS} members={MEMBERS} />
          <LeaderBoard teams={TEAMS} />
        </div>
        <MatchEditor teams={TEAMS} />
      </main>
  );
}