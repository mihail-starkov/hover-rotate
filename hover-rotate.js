'use strict';
/**
 * Объект HoverRotate
 * @property {{}} settings DTO объект с настройками скрипта
 * @method init Инициализация скрипта
 * @method isSoughtElement Метод определяющий, на нужном ли элементе произошло событие
 * @method startRotate Метод поворота элемента
 * @method stopRotate Метод отмены поворота и возврата в исходное состояние
 */
const hoverRotate = {
  /**
   * DTO
   * @property {string} cardClass - CSS класс контейнера с элементами
   * @property {string} cardClass - CSS класс обертка элемента
   * @property {string} cardItemClass - CSS класс элемент
   * @property {number} angle - коэффициент изменения угла наклона элемента
   * @property {boolean} animateRotate - включение/отключение анимации поворота
   */
  settings: {
    cardsClass: 'cards',
    cardClass: 'card',
    cardItemClass: 'card-item',
    angle: 5,
    animateRotate: true,
  },
  /**
   * Инициализация скрипта
   * @param {{}} userSettings Переданные настройки от пользователя
   */
  init(userSettings = {}) {
    this.settings = Object.assign(this.settings, userSettings);
    
    const cards = document.querySelector(`.${this.settings.cardsClass}`);
    
    cards.addEventListener('mousemove', (e) => {
      this.animateRotateStart(e)
    });
    cards.addEventListener('mouseout', (e) => {
      this.animateRotateStop(e)
    });
  },
  /**
   * Метод определяющий, на нужном ли элементе произошло событие
   * @param {event} e событие, которое произошло на элементе
   * @return {HTMLElement || boolean} возвращает нужный элемент,
   * на котором произошло событие либо false если нет нужного элемента
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
   * @param {Event} e событие полученное обработчиком
   */
  animateRotateStart(e) {
    const card = this.isSoughtElement(e);
    if (card && this.settings.animateRotate) {
      let halfHeight = card.offsetHeight / 2,
          halfWidth  = card.offsetWidth / 2;
      card.style.transform = `
       rotateX(${-(e.offsetY - halfHeight) / this.settings.angle}deg)
       rotateY(${(e.offsetX - halfWidth) / this.settings.angle}deg)`;
    }
  },
  /**
   * Метод отмены поворота и возврата в исходное состояние
   * @param {Event} e событие полученное обработчиком
   */
  animateRotateStop(e) {
    const card = this.isSoughtElement(e);
    if (card && this.settings.animateRotate) {
      card.style.transform = 'rotate(0)';
    }
  },
};
hoverRotate.init();