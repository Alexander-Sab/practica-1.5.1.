const userSwiper = function () {
  let breakpoint = window.matchMedia("(min-width: 530px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    myswiper = new Swiper(".swiper", {
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 16,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      keyboard: {
        enable: false,
        onlyInViewport: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
};
userSwiper();

/* выплывающие блоки */

let contenerSlidebBrend = document.querySelector(".contener-slide__brend");

let replica = document.createElement("replica");
replica.classList.add("div");
replica.style.display = "none";

/* блок lenovo */

let contenerLenovo = document.createElement("div");
contenerLenovo.classList.add("contener-slide__brend-logo");

let pictureLenovo = document.createElement("img");
pictureLenovo.classList.add("contener-slide__brend-logo--emblem");
pictureLenovo.src = "../img/lenovo.svg";

let buttoneLenovo = document.createElement("div");
buttoneLenovo.classList.add("buttone-open");

contenerSlidebBrend.appendChild(replica);
replica.append(contenerLenovo, pictureLenovo, buttoneLenovo);
contenerLenovo.prepend(pictureLenovo, buttoneLenovo);

/* блок samsung */

let contenerSamsung = document.createElement("div");
contenerSamsung.classList.add("contener-slide__brend-logo");

let pictureSamsung = document.createElement("img");
pictureSamsung.classList.add("contener-slide__brend-logo--emblem");
pictureSamsung.src = "../img/samsung.svg";

let buttoneSamsung = document.createElement("div");
buttoneSamsung.classList.add("buttone-open");

contenerSlidebBrend.appendChild(replica);
replica.append(contenerSamsung, pictureSamsung, buttoneSamsung);
contenerSamsung.prepend(pictureSamsung, buttoneSamsung);

/* блок Apple */

let contenerApple = document.createElement("div");
contenerApple.classList.add("contener-slide__brend-logo");

let pictureApple = document.createElement("img");
pictureApple.classList.add("contener-slide__brend-logo--emblem");
pictureApple.src = "../img/Apple.svg";

let buttoneApple = document.createElement("div");
buttoneApple.classList.add("buttone-open");
contenerSlidebBrend.appendChild(replica);
replica.append(contenerApple, pictureApple, buttoneApple);
contenerApple.prepend(pictureApple, buttoneApple);

// Кнопки
let buttonOpen = document.querySelector(".pressbutton");
let pressbuttonJackdawOpen = document.querySelector(
  ".pressbutton-jackdaw__icon"
);
pressbuttonJackdawOpen.src = "../icons/open.svg";
buttonOpen.appendChild(pressbuttonJackdawOpen);
let pressbuttonTexOpen = document.querySelector(
  ".pressbutton-jackdaw__icon-text"
);
pressbuttonTexOpen.textContent = "Показать все";
buttonOpen.appendChild(pressbuttonTexOpen);

let closebuttonIcon = document.querySelector(".pressbutton-jackdaw__icon");
let pressbuttonText = document.querySelector(".pressbutton-jackdaw__icon-text");

buttonOpen.addEventListener("click", function () {
  if (replica.style.display === "none") {
    replica.style.display = "flex";
    closebuttonIcon.src = "../icons/hide.svg";
    buttonOpen.appendChild(closebuttonIcon);
    pressbuttonText.textContent = "Скрыть";
    buttonOpen.appendChild(pressbuttonText);
  } else {
    replica.style.display = "none";
    pressbuttonJackdawOpen.src = "../icons/open.svg";
    buttonOpen.appendChild(pressbuttonJackdawOpen);
    pressbuttonTexOpen.textContent = "Показать все";
    buttonOpen.appendChild(pressbuttonTexOpen);
  }
});
