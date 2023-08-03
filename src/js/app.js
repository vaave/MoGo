const body = document.querySelector('body');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;

   if (scrollPos > 0) {
      header.classList.add("scroll");
   } else {
      header.classList.remove("scroll");
   };
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((menuLink) => {
   menuLink.addEventListener('click', function() {

     if (window.innerWidth < 769) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
     }

     const activeItem = document.querySelector('.menu__link.clicked');

     if (activeItem) {
       activeItem.classList.remove('clicked');
     }

     this.classList.add('clicked');
   });

});

const observer = new IntersectionObserver((entries) => {
   console.log(entries);
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       document.querySelectorAll('.menu__link').forEach((link) => {
         let id = link.getAttribute('href').replace('#', '');
         if (id === entry.target.id) {
           link.classList.add('clicked');
         } else {
           link.classList.remove('clicked');
         }
       });
     }
   });
   }, {
   threshold: 0.6
});
 
document.querySelectorAll('.section, .footer').forEach(section => { observer.observe(section)} );


const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(el => {
   el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
         control.setAttribute('aria-expanded', true);
         content.setAttribute('aria-hidden', false);
      } else {
         control.setAttribute('aria-expanded', false);
         content.setAttribute('aria-hidden', true);
      }
   })
});


$(document).ready(function() {

   $('.hero__inner').slick({
      arrows: false,
      autoplay: false,
      infinite: false,
      speed: 1500,
   });

   $('.hero__stat-item').click(function() {
      var index = $(this).index();
      $('.hero__inner').slick('slickGoTo', index);
   });
    
   $('.hero__inner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.hero__stat-item').removeClass('active');
      $('.hero__stat-item').eq(nextSlide).addClass('active');
   });

   $('.review').slick({
      autoplay: false,
      speed: 1000,
   });

});

