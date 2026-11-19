'use client';

import { useState, useEffect } from "react"
import "@/styles/matcheditor.css"
import BlackButton from "@/components/global/BlackButton"
import { useEditMode } from "../context/EditModeProvider";
import { Match, Team } from "@/lib/types";

interface MatchEditorProps {
  teams: Team[];
}

export default function MatchEditor({ teams }: MatchEditorProps) {
  const { selectedMatch, selectedRowTeam, selectedColTeam } = useEditMode();
  const [scoreOne, setScoreOne] = useState(0)
  const [scoreTwo, setScoreTwo] = useState(0)

  useEffect(() => {
    if (selectedMatch) {
      setScoreOne(selectedMatch.scoreOne);
      setScoreTwo(selectedMatch.scoreTwo);
    } else {
      setScoreOne(0);
      setScoreTwo(0);
    }
  }, [selectedMatch]);

  const teamOneLabel = selectedMatch 
    ? teams.find(t => t.id === selectedMatch.teamOneId)?.name || selectedMatch.teamOneId
    : selectedRowTeam?.name || "Team 1";

  const teamTwoLabel = selectedMatch 
    ? teams.find(t => t.id === selectedMatch.teamTwoId)?.name || selectedMatch.teamTwoId
    : selectedColTeam?.name || "Team 2";

  return (
    <div id="matcheditor">
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("Save:", { scoreOne, scoreTwo });
      }}>
        <div className="inputbar">
            <label>
                <p>{teamOneLabel}</p>
            </label>
            <h2>
                <input 
                  type="number" 
                  min="0" 
                  max="10" 
                  value={scoreOne} 
                  onChange={(e) => setScoreOne(Number(e.target.value))} 
                  disabled={!selectedMatch && !selectedRowTeam} />
                <span>/</span>
                <input 
                  type="number" 
                  min="0" 
                  max="10" 
                  value={scoreTwo} 
                  onChange={(e) => setScoreTwo(Number(e.target.value))} 
                  disabled={!selectedMatch && !selectedRowTeam} />
            </h2>
            <label>
                <p>{teamTwoLabel}</p>
            </label>
        </div>
        <BlackButton buttonType="submit">Save</BlackButton>
      </form>
    </div>
  )
}
