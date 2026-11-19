'use client'

import { useState } from "react"
import "@/styles/matcheditor.css"
import BlackButton from "@/components/global/BlackButton"

export default function MatchEditor({}) {
  const [scoreOne, setScoreOne] = useState(0)
  const [scoreTwo, setScoreTwo] = useState(0)

  return (
    <div id="matcheditor">
      <form>
        <div className="inputbar">
            <label>
                <p>{"team name 1"}</p>
            </label>
            <h2>
                <input type="number" min="0" max="10" value={scoreOne} onChange={(e) => setScoreOne(Number(e.target.value))} />
                <span>/</span>
                <input type="number" min="0" max="10" value={scoreTwo} onChange={(e) => setScoreTwo(Number(e.target.value))} />
            </h2>
            <label>
                <p>{"team name 1"}</p>
            </label>
        </div>
        <BlackButton>Save</BlackButton>
      </form>
    </div>
  )
}
