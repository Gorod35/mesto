export class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
    }

    open() { // функция открытия попапа (добавляет класс открытия и слушатель на весь документ)
        this._popup.classList.add('popup__opened');
        document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
      }

    close() { // функция закрытия попапа (добавляет класс закрытия и удаляет слушатель со всего документа)
        this._popup.classList.remove('popup__opened');
        document.removeEventListener('keydown', (evt) => {this._handleEscClose(evt)});
      }

    _handleEscClose(evt) { // функция закрытия попапа по клавише ESC (если нажата ESC - ищет открытый попап и закрывает его)
        if (evt.key === 'Escape') {
            this.close();
        };
      };

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => { //добавляем слушатель событий
            if (evt.target.classList.contains('popup__opened')) { // если цель клика содержит класс открытого попапа
              this.close(); // закрываем попап
            }
            else if (evt.target.classList.contains('popup__close-btn')) { // также если цель клика содержит класс кнопки закрытия
              this.close(); // закрываем попам
            }
          })
    }
}