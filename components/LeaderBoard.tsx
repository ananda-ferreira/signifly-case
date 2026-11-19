import { Standing, Team } from "@/lib/types"
import '@/styles/leaderboard.css'

export default function LeaderBoard({standings, teams}: {standings: Standing[], teams: Team[]}) {

  return (
    <div id="leaderboard">
      <table>
        <tbody>
          <tr>
            <td className="placecol" aria-disabled />
            <td>Team</td>
            <td>W / L</td>
            <td>Total Points</td>
          </tr>
            {standings && standings.map((row, i) => {
              const team = teams.filter((t) => t.id === row.teamId)[0]
              return (
              <tr key={row.teamId} style={{backgroundColor: team.color}}>
                <th className="placecol">{i+1}</th>
                <td>{team.name}</td>
                <td>
                  <span>{row.won}</span>
                  <span> / </span>
                  <span>{row.lost}</span>
                </td>
                <td>{row.points}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
  )
}

