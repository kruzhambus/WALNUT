function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


let navbar = document.querySelector('.navbar');
let burgerMenu = document.querySelector('.burger-menu');
let btnBurger = document.querySelector('.btn-burger');
let menuClose = document.querySelector('.menu-close')
let body = document.querySelector('body');


let menuOpen = false;
btnBurger.addEventListener('click', () => {
	if (!menuOpen) {
		navbar.classList.add('dsp');
		burgerMenu.classList.add('show');
		body.classList.add('ofhd');
		menuOpen = true;
	}
})

menuClose.addEventListener('click', () => {
	if (menuOpen) {
		navbar.classList.remove('dsp');
		burgerMenu.classList.remove('show');
		body.classList.remove('ofhd');
		menuOpen = false;
	}
})


const swiper = new Swiper('.swiper', {

	spaceBetween: 30,
	direction: 'horizontal',
	  // Navigation arrows
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
});


const aboutSwiper = new Swiper('.producer-swiper', {
	direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const newsSwiper = new Swiper('.news-swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
	  979: {  
		slidesPerView: 3,
	  },
	  600: {
		slidesPerView: 2,
	  },
	  480: {
		slidesPerView: 1,
	  },
	  320: {
		slidesPerView: 1,
	  },
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
  
  