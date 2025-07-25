export interface ButtonProps {
  name: string;
  onClick: () => void;
}

export interface IconButtonProps {
  name: string;
   icon?: React.ReactNode;
  onClick: () => void;
}