import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, className = '', external = false }) => {
  const baseClass = `custom-button button-${variant} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClass} 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
