'use strict';
/**
 * Объект HoverRotate
 * @property {{}} settings DTO объект с настройками скрипта
 * @method
 * @method
 * @method
 * @method
 */
const hoverRotate = {
  /**
   * DTO
   * @property {string} cardClass - CSS класс контейнера с элементами
   * @property {string} cardClass - CSS класс обертка элемента
   * @property {string} cardItemClass - CSS класс элемент
   * @property {number} angle - угол наклона элемента
   */
  settings: {
    cardsClass: 'cards',
    cardClass: 'card',
    cardItemClass: 'card-item',
    angle: 5,
  },
  /**
   * Инициализация скрипта
   * @param {{}} userSettings Переданные настройки от пользователя
   */
  init(userSettings = {}) {
    this.settings = Object.assign(this.settings, userSettings);
    
    const cards = document.querySelector(`.${this.settings.cardsClass}`);
    
    cards.addEventListener('mousemove', (e) => {
      this.startRotate(e)
    });
    cards.addEventListener('mouseout', (e) => {
      this.stopRotate(e)
    });
  },
  /**
   * Метод определяющий, на нужном ли элементе произошло событие
   * @param {event} e событие, которое произошло на элементе
   * @return {HTMLElement} возвращает нужный элемент, на котором произошло событие
   */
  isSoughtElement(e) {
    if (e.target.className === this.settings.cardItemClass) {
      return e.target;
    } else if (e.target.className === this.settings.cardClass) {
      return e.target.children[0];
    } else {
      return false;
    }
  },
  /**
   * Метод поворота элемента
   * @param {event} e событие полученное обработчиком
   */
  startRotate(e) {
    const card = this.isSoughtElement(e);
    if (card) {
      let halfHeight = card.offsetHeight / 2,
          halfWidth  = card.offsetWidth / 2;
      card.style.transform = `
       rotateX(${-(e.offsetY - halfHeight) / this.settings.angle}deg)
       rotateY(${(e.offsetX - halfWidth) / this.settings.angle}deg)`;
    }
  },
  /**
   * Метод отмены поворота и возврата в исходное состояние
   * @param {event} e событие полученное обработчиком
   */
  stopRotate(e) {
    const card = this.isSoughtElement(e);
    if (card) {
      card.style.transform = 'rotate(0)';
    }
  },
};

hoverRotate.init();