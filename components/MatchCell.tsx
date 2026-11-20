'use client';

import { useEditMode } from "@/context/EditModeProvider";
import { Team } from "@/lib/types";

interface MatchCellProps {
  rowTeam: Team;
  colTeam: Team;
  cellWidth: string;
}

export default function MatchCell({ rowTeam, colTeam, cellWidth }: MatchCellProps) {
  const { isEditMode, selectedMatch, selectedRowTeam, selectedColTeam, setSelectedCell, matches } = useEditMode();

  // Get the cell's match 
  const match = matches.find(m => m.teamOneId === rowTeam.id && m.teamTwoId === colTeam.id) || null;

  // Border logic
  const isSelected = isEditMode && 
    ((match && selectedMatch?.id === match.id) ||
     (!match && selectedRowTeam?.id === rowTeam.id && selectedColTeam?.id === colTeam.id));
  
  const winColor = match ? (match.scoreOne > match.scoreTwo ? rowTeam.color : colTeam.color) : 'transparent';
  const cellColor = isEditMode ? 'transparent' : winColor;
  const cellBorder = isSelected ? 'solid 2px' : 'none';
  const cellBorderColor = isSelected ? 'black' : 'transparent';

  // Diagonal cells (team vs itself)
  if (rowTeam.id === colTeam.id) {
    return <td style={{width: cellWidth}} key={colTeam.id} aria-disabled>•</td>;
  }

  return (
    <th
      key={colTeam.id}
      style={{
        width: cellWidth,
        backgroundColor: cellColor,
        border: cellBorder,
        borderColor: cellBorderColor,
        transition: 'background-color 0.2s, border-color 0.3s',
        cursor: isEditMode ? 'pointer' : 'default'
      }}
      onClick={() => isEditMode && setSelectedCell(match, rowTeam, colTeam)}
    >
      <span>{match?.scoreOne || ""}</span>
      <span>{match ? "/" : ""}</span>
      <span>{match?.scoreTwo || ""}</span>
    </th>
  );
}
