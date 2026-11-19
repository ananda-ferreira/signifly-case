import { Team, Match, Member } from "@/lib/types";
import '@/styles/scoreboard.css'

interface BoardProps {
    teams: Team[],
    matches: Match[],
    members: Member[],
}

export default function ScoreBoard({teams, matches, members}: BoardProps) {

    
    if (teams.length === 0) return <p>No teams yet. Set up the tournament in admin mode.</p>
    
    const cellWidth = `calc((100% - ${teams?.length - 1}*var(--gap))/${teams?.length})`
    return (
        <div id="scoreboard">
            <table>
                <tbody>
                    <tr>
                        <td style={{width: cellWidth}} aria-disabled />
                        {teams.map((col) => (
                            <td style={{width: cellWidth}} key={col.id}>{col.name}</td>
                        ))}
                    </tr>
                    {teams.map((row) => (
                        <tr key={row.id + "row"}>
                            <td style={{width: cellWidth}}>
                                <div>{row.name}</div>
                                <small>{row.memberIds.map((idInTeam) => members.filter((m) => m.id === idInTeam)[0].name).join(" & ")}</small>
                            </td>
                            {teams.map((col) => {
                                const match = matches.filter((m) => m.teamOneId === row.id && m.teamTwoId === col.id)[0]
                                const cellColor = match ? (match.scoreOne > match.scoreTwo ? row.color : col.color) : 'transparent'

                                // no match: empty diagonal cells
                                if (row.id === col.id) return <td style={{width: cellWidth}} key={col.id} aria-disabled />
                                
                                // or match
                                return (
                                    <th key={col.id} style={{width: cellWidth, backgroundColor: cellColor}}>
                                        <span>{match?.scoreOne || ""}</span>
                                        <span>{match ? "/" : ""}</span>
                                        <span>{match?.scoreTwo || ""}</span>
                                    </th>
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