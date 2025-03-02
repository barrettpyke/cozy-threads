import LoadingSpinner from './LoadingSpinner';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
  className,
}) => {
  return (
    <button
      className={`w-50 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-bold py-4 px-6 rounded-none ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex justify-center items-center gap-2">
        {isLoading && <LoadingSpinner width={1} height={1} />}
        {label}
      </div>
    </button>
  );
};

export default Button;
