import "../../css/set-dropdowns/delete-records/delete-records.css"
import "../../css/set-dropdowns/go-to-page/go-to-page.css"
import "../../css/set-dropdowns/multiple-status/multiple-status.css"
import "../../css/set-dropdowns/single-status/single-status.css"
import "../../css/set-dropdowns/theme-switcher/theme-switcher.css"

export const Dropdowns = () => {
  return (
    <div className="dropdowns-wrapper">
      <div className="go-to-page">
        <div className="input">
          <label className="input__title">
            Номер страницы
            <span className="input__field">
                  <input
                    className="input__field-text"
                    type="text"
                    placeholder="Введите" />
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
      <div className="delete-records">
        Удалить n записей?
        <button className="button button_theme-blue-transparent button_size_small">
          Удалить
        </button>
        <button className="button button_theme-blue button_size_small">
          Отмена
        </button>
      </div>
      <div className="theme-switcher">
        Выберите тему
        <button className="button button_theme-blue-transparent button_size_small">
          {/* <svg
              className="icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg> */}
          Светлая
        </button>
        <button className="button button_theme-blue button_size_small">
          {/* <svg
              className="icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                stroke="none"
              />
            </svg> */}
          Тёмная
        </button>
      </div>
      <div className="multiple-status">
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/* <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg> */}
          <span className="checkbox__text">Новый</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/* <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg> */}
          <span className="checkbox__text">Расчет</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/* <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg> */}
          <span className="checkbox__text">Подтвержден</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/* <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg> */}
          <span className="checkbox__text">Отложен</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/* <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg> */}
          <span className="checkbox__text">Выполнен</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          {/*
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"/>
            </svg> */}
          <span className="checkbox__text">Отменен</span>
        </label>
      </div>
      <div className="single-status">
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Новый</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Расчёт</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text"
        >Подтверждён</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Отложен</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Выполнен</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Отменён</span>
        </label>
      </div>
    </div>
  )
}