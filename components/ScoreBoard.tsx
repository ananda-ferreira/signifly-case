'use client';

import { Team, Match, Member } from "@/lib/types";
import '@/styles/scoreboard.css'
import { useEditMode } from "../context/EditModeProvider";

interface BoardProps {
    teams: Team[],
    members: Member[],
}

export default function ScoreBoard({teams, members}: BoardProps) {
    const { matches, isEditMode, selectedMatch, selectedRowTeam, selectedColTeam, setSelectedCell } = useEditMode();
    
    if (teams.length === 0) return <p>No teams yet. Set up the tournament in admin mode.</p>
    
    const cellWidth = `calc((100% - ${teams?.length - 1}*var(--gap))/${teams?.length})`

    const handleCellClick = (match: Match | null, rowTeam: Team, colTeam: Team) => {
      if (!isEditMode) return;
      setSelectedCell(match, rowTeam, colTeam);
    };
    
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
                                
                                // Check if this cell is selected (existing match or new match)
                                const isSelected = isEditMode && 
                                    ((match && selectedMatch && selectedMatch.id === match.id) || 
                                     (!match && selectedRowTeam?.id === row.id && selectedColTeam?.id === col.id));
                                
                                // dynamic styling 
                                const winColor = match ? (match.scoreOne > match.scoreTwo ? row.color : col.color) : 'transparent'
                                const cellColor = isEditMode ? 'transparent' : winColor
                                const cellBorder = isSelected ? 'solid 2px' : 'none';
                                const cellBorderColor = isSelected ? 'black' : 'transparent';
                                
                                // no match: empty diagonal cells
                                if (row.id === col.id) return <td style={{width: cellWidth}} key={col.id} aria-disabled>•</td>
                                
                                // match exists, show scores
                                return (
                                    <th 
                                      key={col.id} 
                                      style={{
                                        width: cellWidth, 
                                        // boxSizing: 'border-box',
                                        backgroundColor: cellColor, 
                                        border: cellBorder,
                                        borderColor: cellBorderColor,
                                        transition: 'background-color 0.2s, border-color 0.3s', 
                                        cursor: isEditMode ? 'pointer' : 'default'
                                        }}
                                      onClick={() => handleCellClick(match, row, col)}
                                    >
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