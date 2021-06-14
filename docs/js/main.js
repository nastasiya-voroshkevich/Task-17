/** task 6
     * Написать JS-код, который позволит привязать к любому элементу высплывающее окно (попап), которое будет
     * появляться по клику или наведению. Повторный клик или уход должен скрывать тултип.
     * Инициализация по аттрибутам
     * <input type="email"
        data-popup="Этот адрес будет использоваться...." - текст тултипа
        data-popup-side="right | top | bottom | left" - положение (по умолчанию - право)
        data-popup-handler="click | hover" - способ вызова - по умолчанию клик
        >
     * Предусмотеть, что если пользователь зашел с телефона - необходимо игнорировать свойство data-popup-handler -
     * там всегда должен быть клик
     * Как определить с помощью JS мобильное устройство - самостоятельно поискать в интернете
     */

//let inputs = document.querySelectorAll("input");
let tooltip;
if (detectMob()) {
  document.addEventListener("click", function (e) {
 
      if (!tooltip) {
        let anchorElem = e.target.closest("[data-popup]");
  
        tooltip = showTooltip(anchorElem, anchorElem.dataset.popup);
        function showTooltip(anchorElem, html) {
          let tooltipElem = document.createElement("div");
          tooltipElem.className = "popup";
          tooltipElem.innerHTML = html;
          document.body.append(tooltipElem);
  
          let coords = anchorElem.getBoundingClientRect();
  
          if (e.target.dataset.popupSide === "top") {
            let left =
              coords.left +
              (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
            if (left < 0) left = 0;
  
            let top = coords.top - tooltipElem.offsetHeight - 5;
            if (top < 0) {
              top = coords.top + anchorElem.offsetHeight;
            }
            tooltipElem.style.left = left + "px";
            tooltipElem.style.top = top + "px";
          }
          if (e.target.dataset.popupSide === "bottom") {
            let left =
              coords.left +
              (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
            if (left < 0) left = 0;
  
            let top = coords.top + anchorElem.offsetHeight + 5;
            if (top < 0) {
              top = coords.top - anchorElem.offsetHeight;
            }
  
            tooltipElem.style.left = left + "px";
            tooltipElem.style.top = top + "px";
          }
  
          if (e.target.dataset.popupSide === "right") {
            let left = coords.left + anchorElem.offsetWidth + 5;
            //if (left < 0) left = 0;
  
            let top = coords.top - anchorElem.offsetHeight;
            // if (top < 0) {
            //   top = coords.top + anchorElem.offsetHeight ;
            // }
  
            tooltipElem.style.left = left + "px";
            tooltipElem.style.top = top + "px";
          }
          if (e.target.dataset.popupSide === "left") {
            let left = coords.left -  tooltipElem.offsetWidth -5 ;
            // if (left < 0) left = 0;
  
            let top = coords.top - anchorElem.offsetHeight;
            // if (top < 0) {
            //   top = coords.top + anchorElem.offsetHeight ;
            // }
  
            tooltipElem.style.left = left + "px";
            tooltipElem.style.top = top + "px";
          }
  
          return tooltipElem;
        }
        if (!anchorElem) return;
      } else {
        tooltip.remove();
        tooltip = false;
      }
    
  });
} else {

document.addEventListener("mouseover", function (e) {
  if (e.target.dataset.popupHandler === "hover") {
    let anchorElem = e.target.closest("[data-popup]");
    console.log(anchorElem);
    if (!anchorElem) return;
    tooltip = showTooltip(anchorElem, anchorElem.dataset.popup);
    function showTooltip(anchorElem, html) {
      let tooltipElem = document.createElement("div");
      tooltipElem.className = "popup";
      tooltipElem.innerHTML = html;
      document.body.append(tooltipElem);

      let coords = anchorElem.getBoundingClientRect();

      if (e.target.dataset.popupSide === "top") {
        let left =
          coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
          top = coords.top + anchorElem.offsetHeight;
        }
        tooltipElem.style.left = left + "px";
        tooltipElem.style.top = top + "px";
      }
      if (e.target.dataset.popupSide === "bottom") {
        let left =
          coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top + anchorElem.offsetHeight + 5;
        if (top < 0) {
          top = coords.top - anchorElem.offsetHeight;
        }

        tooltipElem.style.left = left + "px";
        tooltipElem.style.top = top + "px";
      }

      if (e.target.dataset.popupSide === "right") {
        let left = coords.left + anchorElem.offsetWidth + 5;
        //if (left < 0) left = 0;

        let top = coords.top - anchorElem.offsetHeight;
        // if (top < 0) {
        //   top = coords.top + anchorElem.offsetHeight ;
        // }

        tooltipElem.style.left = left + "px";
        tooltipElem.style.top = top + "px";
      }
      if (e.target.dataset.popupSide === "left") {
        let left = coords.left - tooltipElem.offsetWidth - 5;
        // if (left < 0) left = 0;

        let top = coords.top - anchorElem.offsetHeight;
        // if (top < 0) {
        //   top = coords.top + anchorElem.offsetHeight ;
        // }

        tooltipElem.style.left = left + "px";
        tooltipElem.style.top = top + "px";
      }

      return tooltipElem;
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.popupHandler === "click") {
    if (!tooltip) {
      let anchorElem = e.target.closest("[data-popup]");

      tooltip = showTooltip(anchorElem, anchorElem.dataset.popup);
      function showTooltip(anchorElem, html) {
        let tooltipElem = document.createElement("div");
        tooltipElem.className = "popup";
        tooltipElem.innerHTML = html;
        document.body.append(tooltipElem);

        let coords = anchorElem.getBoundingClientRect();

        if (e.target.dataset.popupSide === "top") {
          let left =
            coords.left +
            (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
          if (left < 0) left = 0;

          let top = coords.top - tooltipElem.offsetHeight - 5;
          if (top < 0) {
            top = coords.top + anchorElem.offsetHeight;
          }
          tooltipElem.style.left = left + "px";
          tooltipElem.style.top = top + "px";
        }
        if (e.target.dataset.popupSide === "bottom") {
          let left =
            coords.left +
            (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
          if (left < 0) left = 0;

          let top = coords.top + anchorElem.offsetHeight + 5;
          if (top < 0) {
            top = coords.top - anchorElem.offsetHeight;
          }

          tooltipElem.style.left = left + "px";
          tooltipElem.style.top = top + "px";
        }

        if (e.target.dataset.popupSide === "right") {
          let left = coords.left + anchorElem.offsetWidth + 5;
          //if (left < 0) left = 0;

          let top = coords.top - anchorElem.offsetHeight;
          // if (top < 0) {
          //   top = coords.top + anchorElem.offsetHeight ;
          // }

          tooltipElem.style.left = left + "px";
          tooltipElem.style.top = top + "px";
        }
        if (e.target.dataset.popupSide === "left") {
          let left = coords.left - anchorElem.offsetWidth - 5;
          // if (left < 0) left = 0;

          let top = coords.top - anchorElem.offsetHeight;
          // if (top < 0) {
          //   top = coords.top + anchorElem.offsetHeight ;
          // }

          tooltipElem.style.left = left + "px";
          tooltipElem.style.top = top + "px";
        }

        return tooltipElem;
      }
      if (!anchorElem) return;
    } else {
      tooltip.remove();
      tooltip = false;
    }
  }
});
document.addEventListener("mouseout", function (e) {
     if (tooltip) {
      tooltip.remove();
      tooltip = false;
    }
  
});
 }
function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

/** task 5
     * Некая сеть фастфудов предлагает несколько видов гамбургеров:

     маленький (50 рублей, 20 калорий)
     большой (100 рублей, 40 калорий)
     Гамбургер может быть с одним из нескольких видов начинок (обязательно):

     сыром (+ 10 рублей, + 20 калорий)
     салатом (+ 20 рублей, + 5 калорий)
     картофелем (+ 15 рублей, + 10 калорий)
     Дополнительно, гамбургер можно посыпать приправой (+ 15 рублей, 0 калорий) и полить майонезом
     (+ 20 рублей, + 5 калорий). Напишите программу, расчиытвающую стоимость и калорийность гамбургера.

     Код должен быть защищен от ошибок.
     Представьте, что вашим классом будет пользоваться другой программист.
     Если он передает неправильный тип гамбургера, например, или неправильный вид добавки,
     должно выбрасываться исключение (ошибка не должна молча игнорироваться).
     */

/** task 5
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */

class Hamburger {
  static SIZE_SMALL = { cost: 50, calories: 20, weight: 200 };
  static SIZE_LARGE = { cost: 100, calories: 40, weight: 400 };
  static STUFFING_CHEESE = { cost: 10, calories: 20, weight: 15 };
  static STUFFING_SALAD = { cost: 20, calories: 5, weight: 30 };
  static STUFFING_POTATO = { cost: 15, calories: 10, weight: 40 };
  static TOPPING_MAYO = { cost: 20, calories: 5, weight: 20 };
  static TOPPING_SPICE = { cost: 50, calories: 0, weight: 5 };

  /**
   * Класс, объекты которого описывают параметры гамбургера.
   *
   * @constructor
   * @param size        Размер
   * @param stuffing    Начинка
   * @throws {Error}  При неправильном использовании
   */

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppingArr = [];

    if (
      this.size !== Hamburger.SIZE_SMALL &&
      this.size !== Hamburger.SIZE_LARGE
    ) {
      console.log("Такого размера нет");
    }
    if (
      this.stuffing !== Hamburger.STUFFING_CHEESE &&
      this.stuffing !== Hamburger.STUFFING_SALAD &&
      this.stuffing !== Hamburger.STUFFING_POTATO
    ) {
      console.log("Такой начинки нет");
    }
  }

  /**
   * Добавить добавку к гамбургеру. Можно добавить несколько
   * добавок, при условии, что они разные.
   *
   * @param topping     Тип добавки
   * @throws {Error}  При неправильном использовании
   */
  addTopping(topping) {
    this.topping = topping;
    if (
      (this.topping == Hamburger.TOPPING_MAYO ||
        this.topping === Hamburger.TOPPING_SPICE) &&
      this.toppingArr.includes(this.topping, 0) !== true
    ) {
      this.toppingArr.push(this.topping);
    } else if (this.toppingArr.includes(this.topping, 0) === true) {
      console.log("добавка есть, больше нельзя");
    }

    if (
      this.topping !== Hamburger.TOPPING_MAYO &&
      this.topping !== Hamburger.TOPPING_SPICE
    ) {
      console.log("Такой добавки нет");
    }
  }

  /**
   * Убрать добавку, при условии, что она ранее была
   * добавлена.
   *
   * @param topping   Тип добавки
   * @throws {Error}  При неправильном использовании
   */
  removeTopping(topping) {
    this.topping = topping;
    if (
      this.toppingArr.includes(this.topping, 0) === true &&
      (this.topping === Hamburger.TOPPING_MAYO ||
        this.topping === Hamburger.TOPPING_SPICE)
    ) {
      this.toppingArr.splice(this.toppingArr.indexOf(this.topping, 0), 1);
    }

    if (
      this.topping !== Hamburger.TOPPING_MAYO &&
      this.topping !== Hamburger.TOPPING_SPICE
    ) {
      console.log("Такой добавки нет");
    }
  }

  /**
   * Получить список добавок.
   *
   * @return {Array} Массив добавленных добавок, содержит константы
   *                 Hamburger.TOPPING_*
   */
  getToppings() {
    return this.toppingArr;
  }

  /**
   * Узнать размер гамбургера
   */
  getSize() {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера
   */
  getStuffing() {
    return this.stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @return {Number} Цена в тугриках
   */
  calculatePrice() {
    this.summ = 0;
    this.sumArr = 0;
    for (let i = 0; i < this.toppingArr.length; i++) {
      this.sumArr += Number(this.toppingArr[i].cost);
    }
    this.summ = this.size.cost + this.stuffing.cost + Number(this.sumArr);
    return this.summ;
  }

  /**
   * Узнать калорийность
   * @return {Number} Калорийность в калориях
   */
  calculateCalories() {
    this.sum = 0;
    this.summArr = 0;
    for (let i = 0; i < this.toppingArr.length; i++) {
      this.summArr += Number(this.toppingArr[i].calories);
    }
    this.sum =
      this.size.calories + this.stuffing.calories + Number(this.summArr);

    return this.sum;
  }
}
// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: " + hamburger.calculateCalories());
// сколько стоит
console.log("Price: " + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log("Price with sauce: " + hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log(
  "Is hamburger large: " + (hamburger.getSize() === Hamburger.SIZE_LARGE)
); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log(`Have ${hamburger.getToppings().length} toppings`); // 1

