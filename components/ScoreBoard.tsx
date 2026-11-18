import { Team, Match, Member } from "@/lib/types";
import '@/styles/scoreboard.css'

interface BoardProps {
    teams: Team[],
    matches: Match[],
    members: Member[],
}

export default function ScoreBoard({teams, matches, members}: BoardProps) {

    console.log("teams ", teams);
    console.log("matches ", matches);
    
    if (teams.length === 0) return <p>No teams yet. Set up the tournament in admin mode.</p>
    
    return (
        <div id="scoreboard">
            <table>
                <thead >
                    <tr>
                        <th>Matches</th>
                        {teams.map((col) => (
                            <th key={col.id}>{col.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {teams.map((row) => (
                        <tr key={row.id + "row"}>
                            <th>
                                <span>{row.name}</span>
                                <span>{"\n"}</span>
                                <span>{row.memberIds.map((idInTeam) => members.filter((m) => m.id === idInTeam)[0].name).join(", ")}</span>
                            </th>
                            {teams.map((col) => {
                                const match = matches.filter((m) => m.teamOneId === row.id && m.teamTwoId === col.id)[0]
                                
                                // no match: empty diagonal cells
                                if (row.id === col.id) return <td key={col.id} aria-disabled />
                                
                                // or match
                                return (
                                    <td key={col.id} >
                                        <span>{match?.scoreOne || ""}</span>
                                        <span>-</span>
                                        <span>{match?.scoreTwo || ""}</span>
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function ColorChip({ color }: { color: string }) {
  return <span className="color-chip" style={{ background: color }} aria-hidden />;
}