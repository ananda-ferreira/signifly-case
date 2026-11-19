'use client'
import React from 'react';
import '@/styles/blackbutton.css'

interface ButtonProps {
  children: React.ReactNode;
  handleOnClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  cName?: string;
  buttonType?: "button" | "submit" | "reset";
}

export default function BlackButton({ 
  children, 
  handleOnClick, 
  disabled, 
  style, 
  cName,
  buttonType
}: ButtonProps) {
  return (
    <button
      type={buttonType || "button"}
      className={`blackbutton ${cName || ''}`}
      onClick={handleOnClick}
      style={style}
      disabled={disabled}
    >
      <p>{children}</p>
    </button>
  );
}
