/* ======= show & hidden navList in mobile navigation ======= */
let navMenu = document.querySelector('.nav-list');
let closeMenu = document.querySelector('.close-menu');
let toggleMenu = document.querySelector('.toggle-menu');
let navItems = document.querySelectorAll('.nav-item');

toggleMenu.onclick = function () {
  navMenu.classList.add('active-head');
}

closeMenu.onclick = function () {
  navMenu.classList.remove('active-head');
}

navItems.forEach((item) => {
  item.onclick = function () {
    navMenu.classList.remove('active-head');
  }
})

/* ========== header scroll ============ */
window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    document.querySelector('header').classList.add('header-scroll');
  } else {
    document.querySelector('header').classList.remove('header-scroll');
  }
})

/* =========== Type Js ============= */
let typed = new Typed('.home-type', {
  strings: ['a Designer.', 'a Web Developer.', 'a Programmer.'],
  typeSpeed: 150,
  loop: true,
  cursorChar: '✨',
  startDelay: 1000,
  backSpeed: 50,
});


/* =========== mixitup Resume ============ */
let mixerResume = mixitup('.resume-content', {
  selectors: {
    target: '.resume-item',
  },
  animation: {
    duration: 300,
  },
});

/* ============= Link Active resume =============== */
let filterResume = document.querySelectorAll('.resume-filter');

function activeResume() {
  filterResume.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

filterResume.forEach((item) => item.addEventListener('click', activeResume));


/* =========== Swiper testimonial ============= */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* ============== Client ============= */
let clientFilter = document.querySelectorAll('.clients .content .left ul li');

function activeClient() {
  clientFilter.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

clientFilter.forEach((item) => item.addEventListener('click', activeClient));


/* =========== mixitup client ============ */
let mixClient = mixitup('.clients .content .right', {
  selectors: {
    target: '.clients .content .right .item',
  },
  animation: {
    duration: 300,
  },
})


/* =========== mixitup pricing ============ */
let mixPrice = mixitup('.pricing .content', {
  selectors: {
    target: '.pricing .content .item',
  },
  animation: {
    duration: 300,
  },
})

let pricingFilter = document.querySelectorAll('.pricing .filter span');

function activePrice() {
  pricingFilter.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

pricingFilter.forEach((item) => item.addEventListener('click', activePrice));