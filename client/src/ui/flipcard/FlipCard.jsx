import "./flipcard.css";

const FlipCard = ({
  title,
  summary,
  description,
  price
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-front">
        <h3 className="flip-card-title">
          {title}
        </h3>

        <p className="flip-card-summary">
          {summary}
        </p>

        <p className="flip-card-description">
          {description}
        </p>

        <div className="flip-card-price">
          {price}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;