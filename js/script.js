'use strict';
const hamburger = document.querySelector('.burger-menu');
const hammenu = document.querySelector('.nav-list');
const navSkills = document.getElementById('skills');
const navPortfolio = document.getElementById('portfolio');
const navVideo = document.getElementById('video');
const navPrice = document.getElementById('price');
const navContacts = document.getElementById('contacts');
const portfolioBtns = document.querySelector('.portfolio__btns');
const portfolioBtn = document.querySelectorAll('.portfolio__btns-btn');
const portfolioImages = document.querySelectorAll('.portfolio__album-img');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const languagesSwitch = document.querySelectorAll('.lang__btn');
const key = document.querySelectorAll('[data-i18]');

function toggleMenu() {
  hamburger.classList.toggle('active');
  hammenu.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
navPortfolio.addEventListener('click', menuBye);
navPrice.addEventListener('click', menuBye);
navContacts.addEventListener('click', menuBye);
navVideo.addEventListener('click', menuBye);
navSkills.addEventListener('click', menuBye);

function menuBye() {
  hammenu.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// Download photos and change images

function preloadImages () {
  seasons.forEach((season) => {
    for (let i = 0; i < 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i + 1}.jpg`;
    }
  })
}
preloadImages();

portfolioBtns.addEventListener('click', changeImage);

function changeImage (event) {
  if (event.target.classList.contains('portfolio__btns-btn')) {
      portfolioImages.forEach((img, index) => {
        img.setAttribute('src', `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
      })
    portfolioBtn.forEach(element => element.classList.remove('portfolio__btn-active'));
    event.target.classList.add('portfolio__btn-active');
  }
}

//translate
languagesSwitch.forEach((link) => link.addEventListener('click', switchLang));
let lang = document.querySelector('.lang-switch__active').textContent;

function switchLang(event) {
    if (!(event.target.classList.contains('lang-switch__active'))) {
        document.querySelector('.lang-switch__active').classList.remove('lang-switch__active');
        event.target.classList.add('lang-switch__active');
        lang = event.target.textContent;
        translatePage(lang);
    }
}


function translatePage(lang) {
    key.forEach((element) => {
      if (element.placeholder) {
          element.placeholder = i18Obj[lang][element.dataset.i18];
      } else {
          element.textContent = i18Obj[lang][element.dataset.i18];
      }
    });
}


const themeElements = ['.skills', '.portfolio', '.video', '.price', '.contacts', 'body', '.hero__btn', '.contacts-form__block-button', '.contacts-form__block-message', '.contacts-form__block-tel', '.contacts-form__block-email'];
const svgElements = ['.header__logo'];
const otherElements = ['.section__line-title', '.portfolio__btn-active'];
const lightHr = document.querySelectorAll('.section__line-title');
const bgLightTop = ['.hero', '.header'];
const bgLightBottom = ['.contacts'];
const switchTheme = ['.switch_theme'];
const socialBtns = document.querySelectorAll( '.social' );
document.querySelector('.switch_theme').addEventListener('click', changeTheme);

function changeTheme() {
    themeElements.forEach((element) => document.querySelector(element).classList.toggle('light-theme'));
    svgElements.forEach((element) => document.querySelector(element).classList.toggle('light-theme_logo'));
    bgLightBottom.forEach((element) => document.querySelector(element).classList.toggle('light-theme__bg-bottom'));
    bgLightTop.forEach((element) => document.querySelector(element).classList.toggle('light-theme__bg-top'));
    switchTheme.forEach((element) => document.querySelector(element).classList.toggle('light-theme__switch_theme'));
    for (let item of socialBtns) {
      item.classList.toggle('light-theme_social');
    }
    for (let item of lightHr) {
      item.classList.toggle('light-theme_other');
    }
}

localStorage.setItem("greeted", true);

if (localStorage.getItem("greeted") !== true) {
  console.log(`hi`);
}


const i18Obj = {
  'en': {
    'rolling': 'Rolling Scopes School',
    'github': 'github',
    'email': 'E-mail',
    'phone': 'Phone',
    'message_textarea': 'Message',
    'title': 'Portfolio',
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'standard': 'Standard',
    'price_std': '500 $',
    'premium': 'Premium',
    'price_prem': '700 $',
    'gold': 'Gold',
    'price_gold': '1000 $',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'rolling': 'Роллинг Скорпс Скхул =)',
    'github': 'гитхаб',
    'email': 'Емеил',
    'phone': 'Телефон',
    'message_textarea': 'Сообщение',
    'title': 'Портфолио',
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'standard': 'Стандарт',
    'price_std': '500 $',
    'premium': 'Премиум',
    'price_prem': '700 $',
    'gold': 'Золотой',
    'price_gold': '1000 $',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}