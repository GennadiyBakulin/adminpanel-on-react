import "../../css/input/input.css"

export const Inputs = () => {
  return (
    <div>
      <div className="input-wrapper">
        <div className="input">
          <label className="input__title">
            Дата и время заказа
            <span className="input__field">
              <input
                className="input__field-text"
                type="text" placeholder="Введите" />
              <button className="button button_size_small button_icon-only">
                {/*
                  <svg className="icon"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                  </svg>  */}
              </button>
              {/* <svg
                  className="icon icon_color-theme-black"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                    stroke="none"
                  />
                  <path
                    d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                    stroke="none"
                  />
                </svg>  */}
              </span>
          </label>
        </div>
        <div className="input input_incorrect">
          <label className="input__title">Дата и время заказа
            <span className="input__field">
                <input
                  className="input__field-text"
                  type="text"
                  placeholder="Введите"
                  value="06.12.2021" />
                <button className="button button_size_small button_icon-only">
                  {/* <svg
                    className="icon"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                  </svg> */}
                </button>
              {/* <svg
                  className="icon icon_color-theme-black"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                    stroke="none"
                  />
                  <path
                    d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                    stroke="none"
                  />
                </svg> */}
              </span>
          </label>
        </div>
        <div className="input input_disabled">
          <label className="input__title"
          >Дата и время заказа
            <span className="input__field">
                <input
                  className="input__field-text"
                  type="text"
                  placeholder="Введите"
                  value="06.12.2021"
                  disabled />
                <button className="button button_size_small button_icon-only">
                  {/* <svg
                    className="icon"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                  </svg> */}
                </button>
              {/* <svg
                  className="icon icon_color-theme-black"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                    stroke="none"
                  />
                  <path
                    d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                    stroke="none"
                  />
                </svg> */}
              </span>
          </label>
        </div>
      </div>
    </div>
  )
}