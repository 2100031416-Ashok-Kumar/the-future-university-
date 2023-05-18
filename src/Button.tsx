// Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  size: 'big' | 'small';
  variant: 'primary' | 'danger';
  onClick: () => void;
  children: React.ReactNode; // Add the children prop with React.ReactNode type
}

const Button: React.FC<ButtonProps> = ({ size, variant, onClick, children }) => {
  const buttonClassName = `button ${size} ${variant}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
