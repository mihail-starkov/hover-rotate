## Скрипт поворота элемента в 3D окружении
###Использование:
#### Обязательная структура HTML-разметки:<br>

`<div class="cards">`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="card">`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="card-item"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`</div>`<br>
`</div>`<br><br>
где,
* тег с классом "cards" является контейнером для вложенных элементов 
* тег с классом "card" является оберткой элемента, относительно этого тега будет производиться 3D эффект
* тег с классом "card-item" является тем элементом, который будем поворачивать
<br>Нужные классы можно передать через настройки скрипта
#### CSS правила
Для тега с классом "card": <br><br>
`perspective     : 1000px;`<br>
`transform-style : preserve-3d;`<br><br>
#### JS settings:
`cardsClass: 'cards'` - CSS класс для контейнера<br>
`cardClass: 'card',` - CSS класс для обертки<br>
`cardItemClass: 'card-item',` - CSS класс для элемента<br>
`angle: 5,` - коэффициент изменения угла наклона элемента<br>
`animateRotate: true,` - включение скрипта(`true/false`)<br>

####Пример:
Запуск скрипта с настройками по умолчанию:<br> 
`window.onload = ()=> hoverRotate.init();`<br><br>
Запуск скрипта с новыми настройками:<br>
`window.onload = ()=> hoverRotate.init({`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`cardClass: 'wrap-card',`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;передан новый класс для обертки элемента<br>
&nbsp;&nbsp;&nbsp;&nbsp;`angle: 10,`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;передан коэфициент для изменения угла наклона<br>
`});`

