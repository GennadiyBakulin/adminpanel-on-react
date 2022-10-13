import "../../css/radio/radio.css";

export const Radio = function Radio() {
  return (
    <div>
      <label className="radio">
        <input className="radio__area" type="radio" name="radio-button" />
        <span className="radio__text" />
      </label>
      <label className="radio">
        <input className="radio__area" type="radio" name="radio-button" />
        <span className="radio__text" />
      </label>
    </div>
  );
};
