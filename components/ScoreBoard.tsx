import { Team, Member } from "@/lib/types";
import '@/styles/scoreboard.css'
import MatchCell from "./MatchCell";

interface BoardProps {
    teams: Team[],
    members: Member[],
}

export default function ScoreBoard({teams, members}: BoardProps) {
    if (teams.length === 0) return <p>No teams yet. Set up the tournament in the backend.</p>;
    
    const cellWidth = `calc((100% - ${teams?.length - 1}*var(--gap))/${teams?.length})`;
    
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
                            {teams.map((col) => (
                                <MatchCell key={`${row.id}-${col.id}`} rowTeam={row} colTeam={col} cellWidth={cellWidth} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
