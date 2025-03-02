type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, className }) => {
  return (
    <button
      className={`w-40 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-bold py-3 px-4 rounded-none ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
