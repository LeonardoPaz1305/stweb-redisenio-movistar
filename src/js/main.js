// Imports
//=require jquery/dist/jquery.min.js
//=require swiper/swiper-bundle.min.js

$(document).ready(function () {
	if (document.querySelector(".navbar__hamburger")) {
		$(".navbar__hamburger").on("click", function (e) {
			e.preventDefault();
			$("body").addClass("stweb-navmobile-open");
			$(".navbar__side").toggleClass("show-menu");
		});
	}
	if (document.querySelector(".navbar__close-btn")) {
		$(".navbar__close-btn").on("click", function (e) {
			e.preventDefault();
			$("body").removeClass("stweb-navmobile-open");
			$(".navbar__side").toggleClass("show-menu");
		});
	}
	if (document.querySelector(".nav__search--form#input_content")) {
		$("#searchicon_js").on("click", function (e) {
			e.preventDefault();
			$("body").addClass("stweb-search-open");
			$("#input_content").addClass("active");
			$(".stweb-overlay-search").addClass("active");
		});
		$("#closeicon_js").on("click", function (e) {
			e.preventDefault();
			$("body").removeClass("stweb-search-open");
			$("#input_content").removeClass("active");
			$(".stweb-overlay-search").removeClass("active");
		});
	}
	if (document.querySelector(".stweb-header-notification")) {
		$(".stweb-header-notification .notification__button").on("click", function (e) {
			e.preventDefault();
			$(".stweb-header-notification").toggleClass("notification-active");
		});
		$(".stweb-header-notification #close-notification").on("click", function (e) {
			e.preventDefault();
			$(".stweb-header-notification").removeClass("notification-active");
		});
	}
});

//Swiper Banner
if (document.querySelector(".stweb__banner-hero .banner-hero")) {
	let swiper_bannerHero = new Swiper(".stweb__banner-hero .banner-hero", {
		spaceBetween: 0,
		breakpoints: {
			768: {
				spaceBetween: 15
			}
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction"
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

if (document.querySelector(".banner-hero--progress")) {
	const progressCircle = document.querySelector(".autoplay-progress svg");
	let swiper_banner_progress = new Swiper(".banner-hero--progress", {
		slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,
		// effect: "fade",		
		loopFillGroupWithBlank: false,
		speed: 750,
		breakpoints: {
			768: {
				spaceBetween: 15
			}
		},
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			renderBullet: function (index, className) {
				return '<span class="' + className + ' swiper-pagination-bullet--svg-animation autoplay-progress">' + (index + 1) + '<svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="10" stroke-width="10"></circle></svg></span>';
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});

	document.querySelector('.banner-hero--progress').addEventListener("mouseover", function () {
		swiper_banner_progress.autoplay.stop();
		document.querySelector('.swiper-pagination-bullet[aria-current="true"]').classList.remove('swiper-pagination-bullet-active')
	});

	document.querySelector('.banner-hero--progress').addEventListener("mouseout", function () {
		swiper_banner_progress.autoplay.start();
		document.querySelector('.swiper-pagination-bullet[aria-current="true"]').classList.add('swiper-pagination-bullet-active')
	});
}

//Swiper Equipos Home
if (document.querySelector(".stweb__carousel-equipment")) {
	let swiper_equipment = new Swiper(".stweb__carousel-equipment", {
		slidesPerView: 'auto',
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
}

if (document.querySelector(".stweb__fo-browse .fo-browse__carousel .swiper")) {
	let swiper_tips = new Swiper(".stweb__fo-browse .fo-browse__carousel .swiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: ".stweb__fo-browse .fo-browse__carousel .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__fo-browse .fo-browse__carousel .swiper-button-next",
			prevEl: ".stweb__fo-browse .fo-browse__carousel .swiper-button-prev",
		},
	});
}

//Collapse Header - Desktop
let menuDesktop_acc = document.getElementsByClassName("menu-desktop-collapsible__header");
let menuDesktop_i;

for (menuDesktop_i = 0; menuDesktop_i < menuDesktop_acc.length; menuDesktop_i++) {
	menuDesktop_acc[menuDesktop_i].onclick = function (e) {
		e.preventDefault();
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("menu-desktop-collapsible__body");
		var courseAccordion = document.getElementsByClassName("menu-desktop-collapsible__header");
		var courseAccordionActive = document.getElementsByClassName("menu-desktop-collapsible__header active");

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else {
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}

			for (var iii = 0; iii < coursePanel.length; iii++) {
				this.classList.remove("active");
				coursePanel[iii].style.maxHeight = null;
			}
			panel.style.maxHeight = panel.scrollHeight + "px";
			this.classList.add("active");
		}
	}
};


//Collapse Header - Mobile
let menuMobile_acc = document.getElementsByClassName("menu-collapsible__header");
let menuMobile_i;

for (menuMobile_i = 0; menuMobile_i < menuMobile_acc.length; menuMobile_i++) {
	menuMobile_acc[menuMobile_i].onclick = function (e) {
		e.preventDefault();
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("menu-collapsible__body");
		var courseAccordion = document.getElementsByClassName("menu-collapsible__header");
		var courseAccordionActive = document.getElementsByClassName("menu-collapsible__header active");

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else {
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}

			for (var iii = 0; iii < coursePanel.length; iii++) {
				this.classList.remove("active");
				coursePanel[iii].style.maxHeight = null;
			}
			panel.style.maxHeight = panel.scrollHeight + "px";
			this.classList.add("active");
		}
	}
};

//Collapse Footer
//this is the button
let acc = document.getElementsByClassName("collapsible__header");
let i;

for (i = 0; i < acc.length; i++) {
	//when one of the buttons are clicked run this function
	acc[i].onclick = function (e) {
		e.preventDefault();
		//variables
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("collapsible__body");
		var courseAccordion = document.getElementsByClassName("collapsible__header");
		var courseAccordionActive = document.getElementsByClassName("collapsible__header active");

		/*if pannel is already open - minimize*/
		if (panel.style.maxHeight) {
			//minifies current pannel if already open
			panel.style.maxHeight = null;
			//removes the 'active' class as toggle didnt work on browsers minus chrome
			this.classList.remove("active");
		} else { //pannel isnt open...
			//goes through the buttons and removes the 'active' css (+ and -)
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			//Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
			for (var iii = 0; iii < coursePanel.length; iii++) {
				this.classList.remove("active");
				coursePanel[iii].style.maxHeight = null;
			}
			//opens the specified pannel
			panel.style.maxHeight = panel.scrollHeight + "px";
			//adds the 'active' addition to the css.
			this.classList.add("active");
		}
	}//closing to the acc onclick function
}//closing to the for loop.

//Modal
let modal = document.querySelector(".stweb__modal");
let trigger = document.querySelector("#triggerModal");
let closeButton = document.querySelector(".close__button");
let closeBtnModal = document.querySelector("#closeModal");

function toggleModal() {
	modal.classList.toggle("show__modal");
	document.body.classList.toggle("overflow-hidden")
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
closeBtnModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Tabs Collapse
// -------- PASO 1 -------- //
const _tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');

// -------- PASO 3 -------- //
const toggleContent = function () {

	// Parte Uno
	if (!this.classList.contains("active")) {

		Array.from(_content).forEach(item => {
			item.classList.remove('active');
		});

		this.classList.add('active');

		// Parte Dos
		let currentTab = this.getAttribute('data-tab'),
			_tabContent = document.getElementById(currentTab);
		_tabContent.classList.add('active');
	}
};

// -------- PASO 2 -------- //
Array.from(_tabs).forEach(item => {
	item.addEventListener('click', toggleContent);
});