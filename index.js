let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link-header');
let search = document.querySelector('.header__search');

// Бургер-меню

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Слайдер

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Архитектурное строение'
  }
});

// Табы

document.querySelectorAll('.work__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work__link').forEach(function(btn){
      btn.classList.remove('work__link--active')
    });

    e.currentTarget.classList.add('work__link--active');

    document.querySelectorAll('.work-wrap').forEach(function(tabsBtn){
      tabsBtn.classList.remove('work-wrap--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('work-wrap--active');
  });
});

// Аккордион

new Accordion('.questions__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// Поиск

let headerSearch = document.querySelector('.btn-form');
let searchForm = document.querySelector('.search');
let searchClosed = document.querySelector('.search__closed');
console.log(headerSearch);
console.log(searchForm);
console.log(searchClosed);

headerSearch.addEventListener('click', function() {

  headerSearch.classList.add('header__search--active');

  searchForm.classList.add('search--active');

  document.body.classList.toggle('stop-scroll');

})


searchClosed.addEventListener('click', function() {

  headerSearch.classList.remove('header__search--active');

  searchForm.classList.remove('search--active');

  document.body.classList.remove('stop-scroll');

})
