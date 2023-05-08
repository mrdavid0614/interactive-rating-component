import PropTypes from "prop-types";

export default function RatingButton({ text, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rating-button ${isActive ? "selected" : ""}`}
    >
      {text}
    </button>
  );
}

RatingButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
