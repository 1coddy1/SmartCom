"use strict";

// <Подключение библиотек>
// <Подключение библиотек/>
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {} // <Меню гамбургер>


var hamburgerMenu = document.querySelector('.main__hamburger');
var hamburgerActive = document.querySelector('.main__hamburger-active');
var body = document.querySelector('body');
hamburgerMenu.addEventListener('click', function () {
  hamburgerActive.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
}); // <Меню гамбургер/>
// <Аккордеон>

var accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('hide');
  });
}); // <Аккордеон/>
// <Прелоадер>

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}; // <Прелоадер>