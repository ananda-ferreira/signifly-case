
import "@/styles/matcheditor.css"

export default function MatchEditor({}) {
  return (
    <div id="matcheditor">
      <form>
        <div className="inputbar">
            <label>
                <p>{"team name 1"}</p>
            </label>
            <h2>
                <input type="number" />
                <span>/</span>
                <input type="number" />
            </h2>
            <label>
                <p>{"team name 1"}</p>
            </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
