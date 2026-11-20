# Signifly Foosball Tournament

A web app for managing Signifly's foosball tournament with an interactive scoreboard, leaderboard, and admin editing capabilities.

## Features

- **Interactive Scoreboard**: Visual representation of all matches in a round-robin tournament
- **Leaderboard**: Real-time standings based on match results
- **Admin Mode**: Toggle to enable score editing
- **Match Editor**: Edit existing matches or add new ones
- **Instant Updates**: Changes reflect immediately across both boards
- **Responsive Design**: Works on desktop and mobile

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel via GitHub

## Design Decisions

- **Table Structure**: Round-robin tournament layout for clear match visualization
- **Color Scheme**: Monochrome design with team-specific color accents for quick recognition inspired by traditional games

## Implementation Process

1. **Data Modeling** → 2. **Static UI** → 3. **Admin Mode** → 4. **Data Manipulation**

## Project Structure

```
signifly/
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Main page with boards
├── components/
│   ├── Header.tsx          # Includes Toggle button
│   ├── ScoreBoard.tsx      # Match table
│   ├── LeaderBoard.tsx     # Standings table
│   ├── MatchEditor.tsx     # Edit UI
│   └── global/
│       └── BlackButton.tsx # Reusable button
├── context/
│   └── EditModeProvider.tsx # Edit state, cell selections, matches
├── lib/
│   ├── data.ts             # Placeholder data
│   ├── stats.ts            # Standings calculation
│   └── types.ts            # TypeScript interfaces
├── styles/
│   ```
└── package.json
```

## Data Flow

**Types** (`lib/types.ts`):
- `Team`: id, name, color, memberIds
- `Member`: id, name
- `Match`: id, teamOneId, teamTwoId, scoreOne, scoreTwo
- `Standing`: teamId, won, lost, played, points, scoreDiff

**Placeholder Data** (`lib/data.ts`):
- Static arrays for teams, members, and matches
- Standings are computed dynamically from matches

**State Management** (`context/EditModeProvider.tsx`):
- Edit mode toggle
- Selected cell (match + row/column teams)
- Matches data (with update functionality)

**Components**:
- ScoreBoard: Displays matches
- MatchCell:  Interactive cells of scoreboard
- LeaderBoard: Shows standings with smooth animations
- MatchEditor: Edits scores, creates new matches
- Header: Admin mode toggle button

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

1. Click **"Admin Mode"** button to enable editing
2. Click any cell to select it
3. Edit scores in the Match Editor
4. Click **"Save"** to update
5. Click **"Exit Edit Mode"** to finish

**Note**: Data is stored in-memory and resets on page reload (placeholder implementation for demo purposes).