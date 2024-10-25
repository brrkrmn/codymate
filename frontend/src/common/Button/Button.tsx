type ComponentProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

const Button = ({ children, onClick }: ComponentProps) => {
  return (
    <button
      onClick={onClick}
      className="w-fit px-4 h-8 transition flex items-center justify-center border-small border-divider rounded-full shadow-medium hover:shadow-large *:bg-clip-text *:bg-textGradient *:text-foreground-50 *:font-light"
    >
      {children}
    </button>
  );
};

export default Button;
