// ==============================HOME========================
var swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	centeredSlides: true,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// ==============================SHOP========================
var swiper = new Swiper('.shop-swiper', {
	slidesPerView: 1,
	spaceBetween: 10,

	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		921: {
			slidesPerView: 3,
			spaceBetween: 30, // Reduzindo o espaço entre slides para que não seja maior que a largura do swiper
		},
		1024: {
			loopPreventsSliding: true,
			navigation: true,
			slidesPerView: 4,
			spaceBetween: 30, // Reduzindo o espaço entre slides para que não seja maior que a largura do swiper
		},
	},
});

//==================================BARRA DE NAVEGAÇÃO===============================
const menuBtn = document.querySelector('.lnr-menu');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function () {
	menuBtn.classList.toggle('lnr-chevron-up');
	navList.classList.toggle('active');
};

//==================================SCROLL REVEAL===============================

const sr = ScrollReveal({
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: false,
});

sr.reveal('.home-container .home-search', { delay: 200, origin: 'left' });
sr.reveal('.services-container', { delay: 200, origin: 'top' });
sr.reveal('.experts-container', { delay: 200, origin: 'top' });
