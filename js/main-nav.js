let navMain = document.querySelector('.main-nav');
let navButton = document.querySelector ('.main-nav__button');

navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function() {
  if(navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navButton.classList.remove('main-nav__button--open');
    navButton.classList.add('main-nav__button--close');
  } else {
    navMain.classList.add('main-nav--closed');
    navButton.classList.remove('main-nav__button--close');
    navButton.classList.add('main-nav__button--open');
  }
});
