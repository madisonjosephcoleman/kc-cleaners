import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, className = '', external = false }) => {
  const baseClass = `custom-button button-${variant} ${className}`;

  if (href) {
    const isMailto = href.startsWith('mailto:');
    return (
      <a 
        href={href} 
        className={baseClass} 
        onClick={onClick}
        {...(!isMailto && { target: external ? "_blank" : "_self" })}
        {...(external && { rel: "noopener noreferrer" })}
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
