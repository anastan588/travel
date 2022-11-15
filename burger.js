const BURGER_IMAGE = document.querySelector(".burger_image");
const BURGER_MENU_CLOSE_ICON = document.querySelector(
  ".burger_menu_close_icon"
);
const BURGER_MENU = document.querySelector(".burger_menu");
const OVERLAY_MOBILE = document.querySelector(".overlay-mobile");
const BURGER_NAV_ITEMS = document.querySelectorAll(".burger_nav_item");

function openBurgerMenu() {
  BURGER_MENU.classList.add("open");
  OVERLAY_MOBILE.classList.add("open");
}

BURGER_IMAGE.addEventListener("click", openBurgerMenu);

function closeBurgerMenu() {
  BURGER_MENU.classList.remove("open");
  OVERLAY_MOBILE.classList.remove("open");
}

BURGER_MENU_CLOSE_ICON.addEventListener("click", closeBurgerMenu);
BURGER_NAV_ITEMS.forEach((el) => el.addEventListener("click", closeBurgerMenu));
OVERLAY_MOBILE.addEventListener("click", closeBurgerMenu);

//*Самооценка работы*//
console.log(`Количество баллов за выполнение пунктов требований: 125
Итоговая оценка: 100

1. Слайдер изображений в секции destinations +50

- на десктоп варианте при клике на урезанную картинку слева или справа изображение 
меняется по принципу карусели (например если нажать правую картинку 
  та что была в центре на уезжает налево, а та что была видна наполовину 
  оказывается справа). Слайдер может быть как конечным так и бесконечным - 
  данный критерий не должен влиять на оценку + 20

- Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует 
свой кружочек, который становится активным при нахождении соответствующего 
ему слайда в центре. На мобильном варианте картинка одна, 
но поверх нее появляются стрелочки навигации 
(можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20

- Анимации плавного перемещения для слайдера +10

2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает 
сверстанный логин попап + 50

- логин попап соответствует верстке его закрытие происходит при клике вне попапа +25

- логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In 
показывается браузерный алерт с введенными данными (для реализации можно 
 использовать тег ) +25

3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку 
Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто 
  меняет его наполнение). +25`);
