import "./button.css";

const Button = ({
  label,
  children,
  variant = "primary",
  href = "",
  onClick,
  type = "button",
  target = "",
  rel = "",
  disabled = false,
  className = ""
}) => {
  const buttonLabel = label || children;
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={href}
        target={target || undefined}
        rel={rel || (target === "_blank" ? "noreferrer noopener" : undefined)}
        aria-label={typeof buttonLabel === "string" ? buttonLabel : undefined}
      >
        {buttonLabel}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={typeof buttonLabel === "string" ? buttonLabel : undefined}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
