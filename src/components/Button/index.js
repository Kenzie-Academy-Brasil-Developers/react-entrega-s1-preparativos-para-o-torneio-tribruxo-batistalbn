import "./style.css";

const Button = ({ showResults, text }) => {
  return (
    <div>
      <button className="buttonIniciar" onClick={showResults}>
        {text}
      </button>
    </div>
  );
};

export default Button;
