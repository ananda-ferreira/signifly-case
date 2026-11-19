'use client';

import { createContext, useContext, useState } from 'react';

const EditModeContext = createContext<{ isEditMode: boolean; toggleEditMode: () => void } | null>(null);

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => setIsEditMode(prev => !prev);

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) throw new Error('useEditMode must be used within EditModeProvider');
  return context;
}
