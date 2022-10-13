import "../../css/checkbox/checkbox.css"

export const Checkbox = () => {
  return (
    <div>
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" name="checkbox-button" />
        {/* <svg
            className="checkbox__icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
          </svg> */}
      </label>
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" name="checkbox-button" />
        {/* <svg
            className="checkbox__icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
          </svg> */}
      </label>
    </div>
  )
}