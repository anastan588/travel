const BUTTON_LEFT = document.querySelector(".left-image");
const BUTTON_RIGHT = document.querySelector(".right-image");
const SLIDER = document.querySelector(".destinations-wrapper");
const CIRCLE_FIRST = document.querySelector(".first-circle");
const CIRCLE_SECOND = document.querySelector(".second-circle");
const CIRCLE_THIRD = document.querySelector(".third-circle");

const spainHTML = document.querySelector(".left-image").innerHTML;
const japanHTML = document.querySelector(".central-image").innerHTML;
const usaHTML = document.querySelector(".right-image").innerHTML;

const passiveCircleHTML = document.querySelector(".first-circle").innerHTML;
const activeCircleHTML = document.querySelector(".second-circle").innerHTML;

const BUTTON_LEFT_mobile = document.querySelector(".left-arrow-mobile");
const BUTTON_RIGHT_mobile = document.querySelector(".right-arrow-mobile");
const SLIDER_mobile = document.querySelector(".destinations-mobile");
const CIRCLE_FIRST_mobile = document.querySelector(".first-circle-mobile");
const CIRCLE_SECOND_mobile = document.querySelector(".second-circle-mobile");
const CIRCLE_THIRD_mobile = document.querySelector(".third-circle-mobile");

const spainHTML_mobile = document.querySelector(".mobile-left-image").innerHTML;
const japanHTML_mobile = document.querySelector(
  ".mobile-central-image"
).innerHTML;
const usaHTML_mobile = document.querySelector(".mobile-right-image").innerHTML;

const passiveCircleHTML_mobile = document.querySelector(
  ".first-circle-mobile"
).innerHTML;
const activeCircleHTML_mobile = document.querySelector(
  ".second-circle-mobile"
).innerHTML;

let currentCentral = "japan";

const firstCircleHandler = () => {
  if (currentCentral === "japan") {
    moveRight();
  }
  if (currentCentral === "usa") {
    moveLeft();
  }
};

const secondCircleHandler = () => {
  if (currentCentral === "usa") {
    moveRight();
  }
  if (currentCentral === "spain") {
    moveLeft();
  }
};

const thirdCircleHandler = () => {
  if (currentCentral === "spain") {
    moveRight();
  }
  if (currentCentral === "japan") {
    moveLeft();
  }
};

const removeListeners = () => {
  BUTTON_LEFT.removeEventListener("click", moveRight);
  BUTTON_RIGHT.removeEventListener("click", moveLeft);
  CIRCLE_FIRST.removeEventListener("click", firstCircleHandler);
  CIRCLE_SECOND.removeEventListener("click", secondCircleHandler);
  CIRCLE_THIRD.removeEventListener("click", thirdCircleHandler);

  BUTTON_LEFT_mobile.removeEventListener("click", moveRight);
  BUTTON_RIGHT_mobile.removeEventListener("click", moveLeft);
  CIRCLE_FIRST_mobile.removeEventListener("click", firstCircleHandler);
  CIRCLE_SECOND_mobile.removeEventListener("click", secondCircleHandler);
  CIRCLE_THIRD_mobile.removeEventListener("click", thirdCircleHandler);
};

const addListeners = () => {
  BUTTON_LEFT.addEventListener("click", moveRight);
  BUTTON_RIGHT.addEventListener("click", moveLeft);
  CIRCLE_FIRST.addEventListener("click", firstCircleHandler);
  CIRCLE_SECOND.addEventListener("click", secondCircleHandler);
  CIRCLE_THIRD.addEventListener("click", thirdCircleHandler);

  BUTTON_LEFT_mobile.addEventListener("click", moveRight);
  BUTTON_RIGHT_mobile.addEventListener("click", moveLeft);
  CIRCLE_FIRST_mobile.addEventListener("click", firstCircleHandler);
  CIRCLE_SECOND_mobile.addEventListener("click", secondCircleHandler);
  CIRCLE_THIRD_mobile.addEventListener("click", thirdCircleHandler);
};

const updateSliderMobile = (central) => {
  switch (central) {
    case "japan":
      document.querySelector(".mobile-left-edge").innerHTML = usaHTML_mobile;
      document.querySelector(".mobile-left-image").innerHTML = spainHTML_mobile;
      document.querySelector(".mobile-central-image").innerHTML =
        japanHTML_mobile;
      document.querySelector(".mobile-right-image").innerHTML = usaHTML_mobile;
      document.querySelector(".mobile-right-edge").innerHTML = spainHTML_mobile;
      document.querySelector(".first-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;
      document.querySelector(".second-circle-mobile").innerHTML =
        activeCircleHTML_mobile;
      document.querySelector(".third-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;

      break;
    case "spain":
      document.querySelector(".mobile-left-edge").innerHTML = japanHTML_mobile;
      document.querySelector(".mobile-left-image").innerHTML = usaHTML_mobile;
      document.querySelector(".mobile-central-image").innerHTML =
        spainHTML_mobile;
      document.querySelector(".mobile-right-image").innerHTML =
        japanHTML_mobile;
      document.querySelector(".mobile-right-edge").innerHTML = usaHTML_mobile;
      document.querySelector(".first-circle-mobile").innerHTML =
        activeCircleHTML_mobile;
      document.querySelector(".second-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;
      document.querySelector(".third-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;

      break;
    case "usa":
      document.querySelector(".mobile-left-edge").innerHTML = spainHTML_mobile;
      document.querySelector(".mobile-left-image").innerHTML = japanHTML_mobile;
      document.querySelector(".mobile-central-image").innerHTML =
        usaHTML_mobile;
      document.querySelector(".mobile-right-image").innerHTML =
        spainHTML_mobile;
      document.querySelector(".mobile-right-edge").innerHTML = japanHTML_mobile;
      document.querySelector(".first-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;
      document.querySelector(".second-circle-mobile").innerHTML =
        passiveCircleHTML_mobile;
      document.querySelector(".third-circle-mobile").innerHTML =
        activeCircleHTML_mobile;

      break;
  }
};

const updateSliderDesktop = (central) => {
  switch (central) {
    case "japan":
      document.querySelector(".left-edge").innerHTML = usaHTML;
      document.querySelector(".left-image").innerHTML = spainHTML;
      document.querySelector(".central-image").innerHTML = japanHTML;
      document.querySelector(".right-image").innerHTML = usaHTML;
      document.querySelector(".right-edge").innerHTML = spainHTML;
      document.querySelector(".first-circle").innerHTML = passiveCircleHTML;
      document.querySelector(".second-circle").innerHTML = activeCircleHTML;
      document.querySelector(".third-circle").innerHTML = passiveCircleHTML;
      break;
    case "spain":
      document.querySelector(".left-edge").innerHTML = japanHTML;
      document.querySelector(".left-image").innerHTML = usaHTML;
      document.querySelector(".central-image").innerHTML = spainHTML;
      document.querySelector(".right-image").innerHTML = japanHTML;
      document.querySelector(".right-edge").innerHTML = usaHTML;
      document.querySelector(".first-circle").innerHTML = activeCircleHTML;
      document.querySelector(".second-circle").innerHTML = passiveCircleHTML;
      document.querySelector(".third-circle").innerHTML = passiveCircleHTML;
      break;
    case "usa":
      document.querySelector(".left-edge").innerHTML = spainHTML;
      document.querySelector(".left-image").innerHTML = japanHTML;
      document.querySelector(".central-image").innerHTML = usaHTML;
      document.querySelector(".right-image").innerHTML = spainHTML;
      document.querySelector(".right-edge").innerHTML = japanHTML;
      document.querySelector(".first-circle").innerHTML = passiveCircleHTML;
      document.querySelector(".second-circle").innerHTML = passiveCircleHTML;
      document.querySelector(".third-circle").innerHTML = activeCircleHTML;
      break;
  }
};

const moveLeft = () => {
  let nextCentral = currentCentral;
  switch (currentCentral) {
    case "japan":
      nextCentral = "usa";
      break;
    case "usa":
      nextCentral = "spain";
      break;
    case "spain":
      nextCentral = "japan";
      break;
  }
  if (window.innerWidth > 390) {
    updateSliderMobile(nextCentral);
    SLIDER.classList.add("transition-left");
  }
  if (window.innerWidth <= 390) {
    updateSliderDesktop(nextCentral);
    SLIDER_mobile.classList.add("transition-left-mobile");
  }
  currentCentral = nextCentral;

  removeListeners();
};

const moveRight = () => {
  let nextCentral = currentCentral;
  switch (currentCentral) {
    case "japan":
      nextCentral = "spain";
      break;
    case "spain":
      nextCentral = "usa";
      break;
    case "usa":
      nextCentral = "japan";
      break;
  }

  if (window.innerWidth > 390) {
    updateSliderMobile(nextCentral);
    SLIDER.classList.add("transition-right");
  }
  if (window.innerWidth <= 390) {
    updateSliderDesktop(nextCentral);
    SLIDER_mobile.classList.add("transition-right-mobile");
  }
  currentCentral = nextCentral;

  removeListeners();
};

addListeners();

SLIDER.addEventListener("animationend", (myEvent) => {
  updateSliderDesktop(currentCentral);
  if (myEvent.animationName === "move-left") {
    SLIDER.classList.remove("transition-left");
  }
  if (myEvent.animationName === "move-right") {
    SLIDER.classList.remove("transition-right");
  }

  addListeners();
});

SLIDER_mobile.addEventListener("animationend", (myEvent) => {
  updateSliderMobile(currentCentral);
  if (myEvent.animationName === "move-left-mobile") {
    SLIDER_mobile.classList.remove("transition-left-mobile");
  }
  if (myEvent.animationName === "move-right-mobile") {
    SLIDER_mobile.classList.remove("transition-right-mobile");
  }

  addListeners();
});

/*-----------------------------*/
