import "./logo.css";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`.trim()}>
      <span className="logo-code">CODE</span>
      <span className="logo-he">HE</span>
      <span className="logo-r">{`{R}`}</span>
      <sup className="logo-llc">LLC</sup>
    </div>
  );
};

export default Logo;