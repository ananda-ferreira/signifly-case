'use client';

import { createContext, useContext, useState } from 'react';
import { Match, Team } from '@/lib/types';
import { MATCHES } from '@/lib/data';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  selectedMatch: Match | null;
  selectedRowTeam: Team | null;
  selectedColTeam: Team | null;
  matches: Match[];
  setMatches: (matches: Match[]) => void;
  setSelectedCell: (match: Match | null, rowTeam: Team | null, colTeam: Team | null) => void;
}

const EditModeContext = createContext<EditModeContextType | null>(null);

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedRowTeam, setSelectedRowTeam] = useState<Team | null>(null);
  const [selectedColTeam, setSelectedColTeam] = useState<Team | null>(null);
  const [matches, setMatches] = useState<Match[]>(MATCHES);
  
  const setSelectedCell = (match: Match | null, rowTeam: Team | null, colTeam: Team | null) => {
    setSelectedMatch(match);
    setSelectedRowTeam(rowTeam);
    setSelectedColTeam(colTeam);
  };
  
  const toggleEditMode = () => setIsEditMode(prev => !prev);

  return (
    <EditModeContext.Provider value={{ 
      isEditMode, 
      toggleEditMode, 
      selectedMatch, 
      selectedRowTeam, 
      selectedColTeam,
      matches,
      setMatches,
      setSelectedCell 
    }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) throw new Error('useEditMode must be used within EditModeProvider');
  return context;
}
