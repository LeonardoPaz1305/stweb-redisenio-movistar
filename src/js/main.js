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

//Swiper Banner home
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

//Swiper Banner home v2
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

//Swiper Banner internas
if (document.querySelector(".stweb__cp-banner-hero .banner-hero__container")) {
	let swiper_bannerCplanes = new Swiper(".stweb__cp-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__ho-banner-hero .banner-hero__container")) {
	let swiper_bannerHInternet = new Swiper(".stweb__ho-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__fo-banner-hero .banner-hero__container")) {
	let swiper_bannerFOptica = new Swiper(".stweb__fo-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

////////////////////////

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

//Swiper navegar Fibra Optica
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

//Swiper navegar Hogar Internet
if (document.querySelector(".stweb__ho-browse .ho-browse__carousel .swiper")) {
	let swiper_tips = new Swiper(".stweb__ho-browse .ho-browse__carousel .swiper", {
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
			el: ".stweb__ho-browse .ho-browse__carousel .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__ho-browse .ho-browse__carousel .swiper-button-next",
			prevEl: ".stweb__ho-browse .ho-browse__carousel .swiper-button-prev",
		},
	});
}

//Swiper Include Plans
if(document.querySelector(".plans-include")){
	let swiper_plansintFibra = new Swiper("#intFibra", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	});
	let swiper_plansintFibraTv = new Swiper("#intFibraTv", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	let swiper_plansintFibraFijo = new Swiper("#intFibraFijo", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	let swiper_plansplanesTrio = new Swiper("#planesTrio", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});

	let swiper_plnAppMov = new Swiper("#plnAppMov", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
}

//Swiper planes Fibra Optica
if (document.querySelector(".stweb__tabs-Planes .fo-plan__carousel .swiper")) {

	document.querySelectorAll(".tab-panel .nav-item").forEach(function(el) {
		let idTabs = el.getAttribute("data-tab");
		let sliderPlans;

		const enableSliderProgramas = function() {
			sliderPlans = new Swiper("#"+idTabs+" .fo-plan__swiper", {
				slidesPerView: 1,
				spaceBetween: 10,
				breakpoints: {
					576: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
					1200: {
						slidesPerView: 5,
						spaceBetween: 0,
						centerInsufficientSlides: true
					},
				},
				navigation: {
					nextEl: "#"+idTabs+" .fo-plan__carousel .swiper-button-next",
					prevEl: "#"+idTabs+" .fo-plan__carousel .swiper-button-prev",
				},			
			});

			sliderPlans.update();
			sliderPlans.updateSlides();
			sliderPlans.updateSlidesClasses()
		}
		
        const breakpoint = window.matchMedia("(min-width: 600px)");
        const breakpointChecker = function() {
            if (breakpoint.matches === true) {
				return enableSliderProgramas();
            } else if (breakpoint.matches === false) {
                sliderPlans = new Swiper("#"+idTabs+" .fo-plan__swiper");
				sliderPlans.destroy();
            }
        }

		breakpoint.addListener(breakpointChecker);
        breakpointChecker();
	});
}

//Swiper planes hogar internet
if (document.querySelector(".stweb__tabs-Planes .ho-plan__carousel .swiper")) {

	document.querySelectorAll(".tab-panel .nav-item").forEach(function(el) {
		let idTabs = el.getAttribute("data-tab");
		let sliderPlans;
		
        const breakpoint = window.matchMedia("(min-width: 600px)");
        const breakpointChecker = function() {
            if (breakpoint.matches === true) {
				return enableSliderProgramas();
            } else if (breakpoint.matches === false) {
                sliderPlans = new Swiper("#"+idTabs+" .ho-plan__swiper");
				sliderPlans.destroy();
            }
        }

		const enableSliderProgramas = function() {
			sliderPlans = new Swiper("#"+idTabs+" .ho-plan__swiper", {
				slidesPerView: 1,
				spaceBetween: 10,
				breakpoints: {
					576: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
					1200: {
						slidesPerView: 5,
						spaceBetween: 0,
						centerInsufficientSlides: true
					},
				},
				navigation: {
					nextEl: "#"+idTabs+" .ho-plan__carousel .swiper-button-next",
					prevEl: "#"+idTabs+" .ho-plan__carousel .swiper-button-prev",
				},			
			});

			sliderPlans.update();
			sliderPlans.updateSlides();
			sliderPlans.updateSlidesClasses()
		}

		breakpoint.addListener(breakpointChecker);
        breakpointChecker();
	});
}

//Swiper cambio planes
if (document.querySelector(".stweb__cp-plan-carousel .plan__swiper")) {
	let sliderPlans;
	const breakpoint = window.matchMedia("(min-width: 575.98px)");
	const breakpointChecker = function() {
		if (breakpoint.matches === true) {
			return enableSliderProgramas();
		} else if (breakpoint.matches === false) {
			sliderPlans = new Swiper(".stweb__cp-plan-carousel .plan__swiper")
			sliderPlans.destroy();
		}
	}

	const enableSliderProgramas = function() {
		sliderPlans = new Swiper(".plan__swiper", {
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 0,
					centerInsufficientSlides: true
				},
			},
			navigation: {
				nextEl: ".stweb__cp-plan-carousel .swiper-button-next",
				prevEl: ".stweb__cp-plan-carousel .swiper-button-prev",
			},			
		});

		sliderPlans.update();
		sliderPlans.updateSlides();
		sliderPlans.updateSlidesClasses()
	}

	breakpoint.addListener(breakpointChecker);
	breakpointChecker();
}


if (document.querySelector(".stweb__tabs-Planes .fo-plan__carousel .plan-box")) {
	$(".fo-plan__carousel .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

if (document.querySelector(".stweb__tabs-Planes .ho-plan__carousel .plan-box")) {
	$(".ho-plan__carousel .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//Ver mas cambio planes 
if (document.querySelector(".stweb__cp-plan-carousel .plan-box")) {
	$(".stweb__cp-plan-carousel .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisInfoBox1 = $this.parents('.plan-box').find('.info-promo');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisInfoBox1.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisInfoBox1.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//Modal
if (document.querySelector(".stweb__modal")) {
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
}


//Tabs
// -------- PASO 1 -------- //
const _tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');
//const _decosmart = document.querySelector('#decoSmartSection');
//const _idTabPlans = document.querySelector('#hoTabsPlans');

// -------- PASO 3 -------- //
const toggleContent = function () {

	// Parte Uno
	if (!this.classList.contains("active")) {

		Array.from(_content).forEach(item => {
			item.classList.remove('active');
		});

		this.classList.add('active');
		
		/*if (_decosmart) {
			if (_tabs[3].classList.contains("active")) {
				_decosmart.classList.add('active');
			}
			if (_idTabPlans && _tabs[1].classList.contains("active")) {
				_decosmart.classList.add('active');
			}
		}*/

		// Parte Dos
		let currentTab = this.getAttribute('data-tab'),
			_tabContent = document.getElementById(currentTab);
		_tabContent.classList.add('active');
	}
};

// -------- PASO 2 -------- //
Array.from(_tabs).forEach(item => {
	console.log(_tabs)
	item.addEventListener('click', toggleContent);
});

//Collapse Header - Desktop
let menuDesktop_acc = document.getElementsByClassName("menu-desktop-collapsible__header");
let menuDesktop_i;

for (menuDesktop_i = 0; menuDesktop_i < menuDesktop_acc.length; menuDesktop_i++) {
	menuDesktop_acc[menuDesktop_i].onclick = function (e) {
		e.preventDefault();
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("menu-desktop-collapsible__body");
		var courseAccordion = document.getElementsByClassName("menu-desktop-collapsible__header");
		var hmCourseAccordionActive = document.getElementsByClassName("menu-desktop-collapsible__header active");

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else {
			for (var ii = 0; ii < hmCourseAccordionActive.length; ii++) {
				hmCourseAccordionActive[ii].classList.remove("active");
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
if (document.getElementsByClassName("menu-collapsible__header")) {
	let menuMobile_acc = document.getElementsByClassName("menu-collapsible__header");
	let menuMobile_i;

	for (menuMobile_i = 0; menuMobile_i < menuMobile_acc.length; menuMobile_i++) {
		menuMobile_acc[menuMobile_i].onclick = function (e) {
			e.preventDefault();
			var panel = this.nextElementSibling;
			var coursePanel = document.getElementsByClassName("menu-collapsible__body");
			var courseAccordion = document.getElementsByClassName("menu-collapsible__header");
			var hdCourseAccordionActive = document.getElementsByClassName("menu-collapsible__header active");

			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
				this.classList.remove("active");
			} else {
				for (var ii = 0; ii < hdCourseAccordionActive.length; ii++) {
					hdCourseAccordionActive[ii].classList.remove("active");
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
}

//Collapse Footer
if (document.querySelector(".stweb__footer")) {
	let acc = document.querySelectorAll(".stweb__footer .collapsible__header");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function (e) {
			e.preventDefault();
			var panel = this.nextElementSibling;
			var coursePanel = document.getElementsByClassName("collapsible__body");
			var courseAccordion = document.getElementsByClassName("collapsible__header");
			var courseAccordionActive = document.getElementsByClassName("collapsible__header active");

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
	}
}

//Collapse FAQ
if (document.querySelector("#faq-collapsible")) {
	let faq_acc = document.querySelectorAll("#faq-collapsible .collapsible__header");
	let faq_i;

	for (faq_i = 0; faq_i < faq_acc.length; faq_i++) {
		faq_acc[faq_i].onclick = function (e) {
			e.preventDefault();
			var panel = this.nextElementSibling;
			var coursePanel = document.getElementsByClassName("collapsible__body");
			var courseAccordion = document.getElementsByClassName("collapsible__header");
			var faqCourseAccordionActive = document.getElementsByClassName("collapsible__header active");

			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
				this.classList.remove("active");
			} else {
				for (var faq_ii = 0; faq_ii < faqCourseAccordionActive.length; faq_ii++) {
					faqCourseAccordionActive[faq_ii].classList.remove("active");
				}
				for (var faq_iii = 0; faq_iii < coursePanel.length; faq_iii++) {
					this.classList.remove("active");
					coursePanel[faq_iii].style.maxHeight = null;
				}
				panel.style.maxHeight = panel.scrollHeight + "px";
				this.classList.add("active");
			}
		}
	}
}

if (document.querySelector(".stweb__pt-tabs-Planes .pt-plan__carousel .swiper")) {
	let swiper_planes1 = new Swiper(".stweb__pt-tabs-Planes .pt-plan__carousel .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});
}
//Swipper Include Plan Trio
if(document.querySelector(".stweb__pt-tabs-Planes .plans-include")){
	let swiper_plansintFibra = new Swiper("#intPlanTrio", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
}

//Swiper tips Plan Trio
if (document.querySelector(".stweb__pt-browse .pt-browse__carousel .swiper")) {
	let swiper_tips = new Swiper(".stweb__pt-browse .pt-browse__carousel .swiper", {
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
			el: ".stweb__pt-browse .pt-browse__carousel .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__pt-browse .pt-browse__carousel .swiper-button-next",
			prevEl: ".stweb__pt-browse .pt-browse__carousel .swiper-button-prev",
		},
	});

	if (document.querySelector(".stweb__pt-tabs-Planes .plan-box")) {
		$(".box__footer .link--more").click(function () {
			var $this = $(this);
			var $thisPlanBox = $this.parents('.plan-box');
			var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
			var $thisText1 = $this.find(".text-1");
			if ($thisPlanBox.hasClass("active")) {
				$thisPlanBox2.slideUp();
				$thisText1.text("Ver más")
				//console.log("call to action");
			} else {
				$thisPlanBox2.slideDown();
				$thisText1.text("Ver menos")
			}
			$thisPlanBox.toggleClass("active");
		});
	};
}

//OFERTAS PLANES
if (document.querySelector(".stweb__op-tabs-Planes .banner-hero__container")) {
	let swiper_bannerCplanes = new Swiper(".stweb__op-tabs-Planes .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__op-tabs-Planes .op-plan__carousel .swiper")) {
	let swiper_planes1 = new Swiper(".stweb__op-tabs-Planes .op-plan__carousel .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});
}

if (document.querySelector(".stweb__op-tabs-Planes .plan-box")) {
	$(".stweb__op-tabs-Planes .plan-box .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más beneficios")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//INTERNET 5G
if (document.querySelector(".stweb__5g-downloader .swiper")) {
	let swiper_internet_5g = new Swiper(".stweb__5g-downloader .swiper", {
		slidesPerView: 1,
		spaceBetween: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 5000
		}
	});
}

// PLANES DUO SWIPER
if (document.querySelector(".stweb__pd-tabs-Planes .pd-plan__carousel .swiper")) {
	let swiper_planes1 = new Swiper(".stweb__pd-tabs-Planes .pd-plan__carousel .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		},
		navigation: {
			nextEl: ".stweb__pd-tabs-Planes .pd-plan__carousel .swiper-button-next",
			prevEl: ".stweb__pd-tabs-Planes .pd-plan__carousel .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__pd-tabs-Planes .pd-plan__carousel-2 .swiper")) {
	let swiper_planes2 = new Swiper(".stweb__pd-tabs-Planes .pd-plan__carousel-2 .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
		},
		navigation: {
			nextEl: ".stweb__pd-tabs-Planes .pd-plan__carousel-2 .swiper-button-next",
			prevEl: ".stweb__pd-tabs-Planes .pd-plan__carousel-2 .swiper-button-prev",
		},
	});
}

// PLANES DUO DESPLEGABLE VER MAS
if (document.querySelector(".stweb__pd-tabs-Planes .plan-box")) {
	$(".stweb__pd-tabs-Planes .plan-box .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//Swipper Include Plan Postpago
if(document.querySelector(".stweb__pp-tabs-Planes .plans-include")){
	let swiper_plansintFibra = new Swiper("#intPlanPostpago", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
}

//Swiper  Plan Postpago
if (document.querySelector(".stweb__pp-tabs-Planes .plan-box")) {
	$(".box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//Swiper Include - Planes Duo
if(document.querySelector(".stweb__pd-tabs-Planes .plans-include")){
	let swiper_plansintFibra = new Swiper("#intPlanDuo", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	let swiper_plansintFibraTv = new Swiper("#intPlanDuoTv", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
	let swiper_plansintFibraFijo = new Swiper("#intPlanDuoFijo", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});

	let swiper_plansintPlanDuoTrio = new Swiper("#intPlanDuoTrio", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
}

//swiper step App Movistar
if (document.querySelector(".stweb__cp-step-app .step-app__container")) {
	let swiperStepApp = new Swiper(".stweb__cp-step-app .step-app__container", {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		},
		pagination: {
			el: ".stweb__cp-step-app .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__cp-step-app .step-app__container .swiper-button-next",
			prevEl: ".stweb__cp-step-app .step-app__container .swiper-button-prev"
		},
	});
}


// PLANES MOVISTAR TV SWIPER
if (document.querySelector(".mtv-plan__carousel-1 .swiper")) {
	let swiper_planes1 = new Swiper(".mtv-plan__carousel-1 .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			}
		},
		navigation: {
			nextEl: ".mtv-plan__carousel .swiper-button-next",
			prevEl: ".mtv-plan__carousel .swiper-button-prev",
		},
	});
}

if (document.querySelector(".mtv-plan__carousel-2 .swiper")) {
	let swiper_planes2 = new Swiper(".mtv-plan__carousel-2 .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			}
		},
		navigation: {
			nextEl: ".mtv-plan__carousel-2 .swiper-button-next",
			prevEl: ".mtv-plan__carousel-2 .swiper-button-prev",
		},
	});
}

if (document.querySelector(".mtv-plan__carousel-3 .swiper")) {
	let swiper_planes2 = new Swiper(".mtv-plan__carousel-3 .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		},
		navigation: {
			nextEl: ".mtv-plan__carousel-2 .swiper-button-next",
			prevEl: ".mtv-plan__carousel-2 .swiper-button-prev",
		},
	});
}

//Swipper Include Plan Postpago
if(document.querySelector(".stweb__mtv-tabs-Planes .plans-include")){
	let swiper_mtvIntPlan1 = new Swiper("#intPlan1", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	let swiper_mtvIntPlan2 = new Swiper("#intPlan2", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
}

// PLANES MOVISTAR TV DESPLEGABLE VER MAS
if (document.querySelector(".stweb__mtv-tabs-Planes .plan-box")) {
	$(".stweb__mtv-tabs-Planes .plan-box .box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.plan-box');
		var $thisPlanBox2 = $this.parents('.plan-box').find('.box__description');
		var $thisText1 = $this.find(".text-1");
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

if (document.querySelector(".exclusive--carousel .swiper")) {
	let swiper_planes2 = new Swiper(".exclusive--carousel .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		},
		pagination: {
			el: ".exclusive--carousel .swiper-pagination",
		}
	});
}

//Collapse FAQ Movistar TV
if (document.querySelector("#infaq-collapsible")) {
	let infaq_acc = document.querySelectorAll("#infaq-collapsible .collapsible__header");
	let infaq_i;

	for (infaq_i = 0; infaq_i < infaq_acc.length; infaq_i++) {
		infaq_acc[infaq_i].onclick = function (e) {
			e.preventDefault();
			var panel = this.nextElementSibling;
			var coursePanel = document.getElementsByClassName("collapsible__body");
			var courseAccordion = document.getElementsByClassName("collapsible__header");
			var faqCourseAccordionActive = document.getElementsByClassName("collapsible__header active");

			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
				this.classList.remove("active");
			} else {
				for (var infaq_ii = 0; infaq_ii < faqCourseAccordionActive.length; infaq_ii++) {
					faqCourseAccordionActive[infaq_ii].classList.remove("active");
				}
				for (var infaq_iii = 0; infaq_iii < coursePanel.length; infaq_iii++) {
					this.classList.remove("active");
					coursePanel[infaq_iii].style.maxHeight = null;
				}
				panel.style.maxHeight = panel.scrollHeight + "px";
				this.classList.add("active");
			}
		}
	}
}