interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer inline-block';
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600'
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;