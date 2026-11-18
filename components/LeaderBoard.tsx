import { Standing } from "@/lib/types"
import '@/styles/leaderboard.css'

export default function LeaderBoard({standings}: {standings: Standing[]}) {
  
  return (
    <div id="leaderboard">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>team</th>
            <th>won</th>
            <th>lost</th>
            <th>points</th>
          </tr>
        </thead>
        <tbody>
            {!standings ? <tr>
              <td>No matches yet.</td>
            </tr>
            : standings.map((row) => (
              <tr key={row.teamId}>

              </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  )
}

