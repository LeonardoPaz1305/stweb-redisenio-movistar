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
			nextEl: ".stweb__banner-hero .swiper-button-next",
			prevEl: ".stweb__banner-hero .swiper-button-prev",
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
			nextEl: ".banner-hero--progress .swiper-button-next",
			prevEl: ".banner-hero--progress .swiper-button-prev",
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
			nextEl: ".stweb__cp-banner-hero .swiper-button-next",
			prevEl: ".stweb__cp-banner-hero .swiper-button-prev",
		},
	});
}

//Swiper Banner internas planes postpago roaming
if (document.querySelector(".stweb__pr-banner-hero .banner-hero__container")) {
	let swiper_bannerHero = new Swiper(".stweb__pr-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

//Swiper Banner internas planes postpago 
if (document.querySelector(".stweb__pp-banner-hero .banner-hero__container")) {
	let swiper_bannerHero = new Swiper(".stweb__pp-banner-hero .banner-hero__container", {
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
			nextEl: ".stweb__ho-banner-hero .swiper-button-next",
			prevEl: ".stweb__ho-banner-hero .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__fo-banner-hero .banner-hero__container")) {
	let swiper_bannerFOptica = new Swiper(".stweb__fo-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".stweb__fo-banner-hero .swiper-button-next",
			prevEl: ".stweb__fo-banner-hero .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__op2-banner-hero .banner-hero__container")) {
	let swiper_bannerOfertas2 = new Swiper(".stweb__op2-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".stweb__op2-banner-hero .swiper-button-next",
			prevEl: ".stweb__op2-banner-hero .swiper-button-prev",
		},
	});
}

// ////////////////////////

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
		pagination: {
			el: ".stweb__op2-better-phones .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__op2-better-phones .swiper-button-next",
			prevEl: ".stweb__op2-better-phones .swiper-button-prev",
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
if (document.querySelector(".plans-include")) {
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

	let swiper_plnOffer2 = new Swiper("#plnOffer2", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
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

	let swiper_FibraEnt = new Swiper("#FibraEnt", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
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

	let swiper_duoEnt = new Swiper("#duoEnt", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
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

	let swiper__trioEnt = new Swiper("#trioEnt", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
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
if (document.querySelector(".stweb__fo-tabs-Planes .fo-plan__carousel .swiper")) {

	document.querySelectorAll(".tab-panel .nav-item").forEach(function (el) {
		let idTabs = el.getAttribute("data-tab");
		let sliderPlans;

		const enableSliderProgramas = function () {
			sliderPlans = new Swiper("#" + idTabs + " .fo-plan__swiper", {
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
					nextEl: "#" + idTabs + " .fo-plan__carousel .swiper-button-next",
					prevEl: "#" + idTabs + " .fo-plan__carousel .swiper-button-prev",
				},
			});

			sliderPlans.update();
			sliderPlans.updateSlides();
			sliderPlans.updateSlidesClasses()
		}

		const breakpoint = window.matchMedia("(min-width: 600px)");
		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				return enableSliderProgramas();
			} else if (breakpoint.matches === false) {
				sliderPlans = new Swiper("#" + idTabs + " .fo-plan__swiper");
				sliderPlans.destroy();
			}
		}

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	});
}

//Swiper planes hogar internet
if (document.querySelector(".stweb__tabs-Planes .ho-plan__carousel .swiper")) {

	document.querySelectorAll(".tab-panel .nav-item").forEach(function (el) {
		let idTabs = el.getAttribute("data-tab");
		let sliderPlans;

		const breakpoint = window.matchMedia("(min-width: 600px)");
		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				return enableSliderProgramas();
			} else if (breakpoint.matches === false) {
				sliderPlans = new Swiper("#" + idTabs + " .ho-plan__swiper");
				sliderPlans.destroy();
			}
		}

		const enableSliderProgramas = function () {
			sliderPlans = new Swiper("#" + idTabs + " .ho-plan__swiper", {
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
					nextEl: "#" + idTabs + " .ho-plan__carousel .swiper-button-next",
					prevEl: "#" + idTabs + " .ho-plan__carousel .swiper-button-prev",
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
	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			return enableSliderProgramas();
		} else if (breakpoint.matches === false) {
			sliderPlans = new Swiper(".stweb__cp-plan-carousel .plan__swiper")
			setTimeout(function () {
				sliderPlans.destroy();
			}, 500)
		}
	}

	const enableSliderProgramas = function () {
		sliderPlans = new Swiper(".stweb__cp-plan-carousel .plan__swiper", {
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

//Swiper ofertas planes 
if (document.querySelector(".stweb__op2-plan-carousel .plan__swiper")) {
	let sliderPlansOp2;
	const breakpoint = window.matchMedia("(min-width: 575.98px)");
	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			return enableSliderProgramas();
		} else if (breakpoint.matches === false) {
			sliderPlansOp2 = new Swiper(".stweb__op2-plan-carousel .plan__swiper")
			setTimeout(function () {
				sliderPlansOp2.destroy();
			}, 500)
		}
	}

	const enableSliderProgramas = function () {
		sliderPlansOp2 = new Swiper(".stweb__op2-plan-carousel .plan__swiper", {
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
				nextEl: ".stweb__op2-plan-carousel .swiper-button-next",
				prevEl: ".stweb__op2-plan-carousel .swiper-button-prev",
			},
		});

		sliderPlansOp2.update();
		sliderPlansOp2.updateSlides();
		sliderPlansOp2.updateSlidesClasses()
	}

	breakpoint.addListener(breakpointChecker);
	breakpointChecker();
}

//tabs plan roaming PASO 1
const _tabsRoaming = document.querySelectorAll('[data-tabR]');
const _contentRoaming = document.getElementsByClassName('available');

// tabs plan roaming PASO 3 
const toggleContentRoaming = function () {

	// Parte Uno
	if (!this.classList.contains('available')) {

		Array.from(_contentRoaming).forEach(item => {
			item.classList.remove('available');
		});

		this.classList.add('available');

		// Parte Dos
		let currentTabR = this.getAttribute('data-tabR'),
			_tabContent = document.getElementById(currentTabR);
		_tabContent.classList.add('available');
	}
};

// -------- tabs plan roaming PASO 2 -------- //
Array.from(_tabsRoaming).forEach(item => {
	console.log(_tabsRoaming)
	item.addEventListener('click', toggleContentRoaming);
});

//Swiper  Plan Roaming
if (document.querySelector(".stweb__pr-better-zona .better-zona__equipment")) {
	$(".box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.better-zona__equipment');
		var $thisPlanBox2 = $this.parents('.better-zona__equipment').find('.hidden-country');
		var $thisText1 = $this.find('.text-1');
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown({
				start: function () {
					$(this).css({
						display: 'flex'
					})
				}
			});
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};


//tabs plan roaming - Tips Viaje PASO 1
const _tabsRoamingTravel = document.querySelectorAll('[data-tabRT]');
const _contentRoamingTravel = document.getElementsByClassName('availableTravel');

// tabs plan roaming - Tips Viaje PASO 3 
const toggleContentRoamingTravel = function () {

	// Parte Uno
	if (!this.classList.contains('availableTravel')) {

		Array.from(_contentRoamingTravel).forEach(item => {
			item.classList.remove('availableTravel');
		});

		this.classList.add('availableTravel');

		// Parte Dos
		let currentTabR = this.getAttribute('data-tabRT'),
			_tabContent = document.getElementById(currentTabR);
		_tabContent.classList.add('availableTravel');
	}
};

// -------- tabs plan roaming - Tips Viaje PASO 2 -------- //
Array.from(_tabsRoamingTravel).forEach(item => {
	console.log(_tabsRoamingTravel)
	item.addEventListener('click', toggleContentRoamingTravel);
});

//Swiper  Plan Roaming - Tips Viaje
if (document.querySelector(".stweb__pr-tips-travel .better-zona__equipmentTravel")) {
	$(".box__footer .link--more").click(function () {
		var $this = $(this);
		var $thisPlanBox = $this.parents('.better-zona__equipmentTravel');
		var $thisPlanBox2 = $this.parents('.better-zona__equipmentTravel').find('.hidden-box');
		var $thisText1 = $this.find('.text-travel');
		if ($thisPlanBox.hasClass("active")) {
			$thisPlanBox2.slideUp();
			$thisText1.text("Ver más")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown({
				start: function () {
					$(this).css({
						display: 'flex'
					})
				}
			});
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//tabs plan roaming - Activa tu Roaming PASO 1
const _tabsRoamingMobile = document.querySelectorAll('[data-tabRM]');
const _contentRoamingMobile = document.getElementsByClassName('availableMobile');

// tabs plan roaming - Activa tu Roaming PASO 3 
const toggleContentRoamingMobile = function () {

	// Parte Uno
	if (!this.classList.contains('availableMobile')) {

		Array.from(_contentRoamingMobile).forEach(item => {
			item.classList.remove('availableMobile');
		});

		this.classList.add('availableMobile');

		// Parte Dos
		let currentTabR = this.getAttribute('data-tabRM'),
			_tabContent = document.getElementById(currentTabR);
		_tabContent.classList.add('availableMobile');
	}
};

// -------- tabs plan roaming - Activa tu Roaming PASO 2 -------- //
Array.from(_tabsRoamingMobile).forEach(item => {
	console.log(_tabsRoamingMobile)
	item.addEventListener('click', toggleContentRoamingMobile);
});

//swiper planes entretenimiento
if (document.querySelector(".stweb__dp-tabs-plans .plan__swiper")) {

	document.querySelectorAll(".tab-panel .nav-item").forEach(function (el) {
		let idTabs = el.getAttribute("data-tab");
		let sliderPlans;

		const enableSliderProgramas = function () {
			sliderPlans = new Swiper("#" + idTabs + " .plan__swiper", {
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
					nextEl: "#" + idTabs + " .dp-plan__carousel .swiper-button-next",
					prevEl: "#" + idTabs + " .dp-plan__carousel .swiper-button-prev",
				},
			});

			sliderPlans.update();
			sliderPlans.updateSlides();
			sliderPlans.updateSlidesClasses()
		}

		const breakpoint = window.matchMedia("(min-width: 600px)");
		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				return enableSliderProgramas();
			} else if (breakpoint.matches === false) {
				sliderPlans = new Swiper("#" + idTabs + " .plan__swiper");
				sliderPlans.destroy();
			}
		}

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	});
}

//Swiper disneyplu sinopsis
if (document.querySelector(".stweb__dp-sinopsis")) {
	let swiper_bannerHero = new Swiper(".stweb__dp-sinopsis .swiper", {
		pagination: {
			el: ".swiper-pagination"
		},
		navigation: {
			nextEl: ".stweb__dp-sinopsis .swiper-button-next",
			prevEl: ".stweb__dp-sinopsis .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__fo-tabs-Planes .fo-plan__carousel .plan-box")) {
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
			$thisText1.text("Ver más beneficios")
			//console.log("call to action");
		} else {
			$thisPlanBox2.slideDown();
			$thisInfoBox1.slideDown();
			$thisText1.text("Ver menos")
		}
		$thisPlanBox.toggleClass("active");
	});
};

//ver mas entretenimiento
if (document.querySelector(".dp-plan__carousel .plan-box")) {
	$(".dp-plan__carousel .box__footer .link--more").click(function () {
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

if (document.querySelector(".stweb__op2-plan-carousel .plan-box")) {
	$(".stweb__op2-plan-carousel .box__footer .link--more").click(function () {
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
const _decosmart = document.querySelector('#decoSmartSection');
const _idTabPlans = document.querySelector('#hoTabsPlans');

// -------- PASO 3 -------- //
const toggleContent = function () {

	// Parte Uno
	if (!this.classList.contains("active")) {

		Array.from(_content).forEach(item => {
			item.classList.remove('active');
		});

		this.classList.add('active');
		
		if (_decosmart) {

			if (_tabs[3].classList.contains("active")) {
				_decosmart.classList.add('active');
			}
			if (_idTabPlans && _tabs[1].classList.contains("active")) {
				_decosmart.classList.add('active');
			}
		}

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

//Collapse sinopsis
if (document.querySelector("#sinopsisCollapse")) {
	let faq_acc = document.querySelectorAll("#sinopsisCollapse .collapsible__header");
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
if (document.querySelector(".stweb__pt-tabs-Planes .plans-include")) {
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

if (document.querySelector("#offers-collapsible")) {
	let faq_acc = document.querySelectorAll("#offers-collapsible .collapsible__header");
	let faq_i;

	for (faq_i = 0; faq_i < faq_acc.length; faq_i++) {
		faq_acc[faq_i].onclick = function (e) {
			e.preventDefault();
			var panel = this.nextElementSibling;
			var coursePanel = document.querySelectorAll("#offers-collapsible .collapsible__body")
			var courseAccordion = document.querySelectorAll("#offers-collapsible .collapsible__header");
			var faqCourseAccordionActive = document.querySelectorAll("#offers-collapsible .collapsible__header.active");

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

//PLANES ROAMING
if (document.querySelector(".stweb__pr-tabs-Planes .pr-plan__carousel .swiper")) {
	let swiper_planes1 = new Swiper(".stweb__pr-tabs-Planes .pr-plan__carousel .swiper", {
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
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
		},
		navigation: {
			nextEl: ".stweb__pr-tabs-Planes .pr-plan__carousel .swiper-button-next",
			prevEl: ".stweb__pr-tabs-Planes .pr-plan__carousel .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__pr-tabs-Planes .pr-plan__carousel-2 .swiper")) {
	let swiper_planes2 = new Swiper(".stweb__pr-tabs-Planes .pr-plan__carousel-2 .swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			992: {
				slidesPerView: 4,
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
			nextEl: ".stweb__pr-tabs-Planes .pr-plan__carousel-2 .swiper-button-next",
			prevEl: ".stweb__pr-tabs-Planes .pr-plan__carousel-2 .swiper-button-prev",
		},
	});
}

// PLANES ROAMING DESPLEGABLE VER MAS
if (document.querySelector(".stweb__pr-tabs-Planes .plan-box")) {
	$(".stweb__pr-tabs-Planes .plan-box .box__footer .link--more").click(function () {
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

//swiper Planes Roaming - Activar Roaming
if (document.querySelector(".stweb__pr-step-app .step-app__container")) {
	let swiperStepApp = new Swiper(".stweb__pr-step-app .step-app__container", {
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
			el: ".stweb__pr-step-app .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__pr-step-app .step-app__container .swiper-button-next",
			prevEl: ".stweb__pr-step-app .step-app__container .swiper-button-prev"
		},
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
if (document.querySelector(".stweb__pp-tabs-Planes .plans-include")) {
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

//Swiper Plan Postpago
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
if (document.querySelector(".stweb__pd-tabs-Planes .plans-include")) {
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

//swiper step App Movistar disneyplus
if (document.querySelector(".stweb__dp-step-app .step-app__container")) {
	let swiperStepApp = new Swiper(".stweb__dp-step-app .step-app__container", {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
				centerInsufficientSlides: true
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
				centerInsufficientSlides: true
			}
		},
		pagination: {
			el: ".stweb__dp-step-app .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__dp-step-app .step-app__container .swiper-button-next",
			prevEl: ".stweb__dp-step-app .step-app__container .swiper-button-prev"
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
if (document.querySelector(".stweb__mtv-tabs-Planes .plans-include")) {
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

//Contador Regresivo
if (document.querySelector('.stweb__op2-banner-timer')) {
	document.addEventListener('DOMContentLoaded', () => {

		//=== VARIABLES === //
		const DATE_TARGET = new Date('06/01/2023 11:59 PM');
		// DOM for render
		const SPAN_DAYS = document.querySelector('#days .number');
		const SPAN_HOURS = document.querySelector('#hours .number');
		const SPAN_MINUTES = document.querySelector('#minutes .number');
		const SPAN_SECONDS = document.querySelector('#seconds .number');
		// Milliseconds for the calculations
		const MILLISECONDS_OF_A_SECOND = 1000;
		const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
		const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
		const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

		//=== FUNCTIONS ===//
		function updateCountdown() {
			// Calcs
			const NOW = new Date()
			const DURATION = DATE_TARGET - NOW;
			const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
			const REMAINING_HOURS = Math.floor(DURATION / MILLISECONDS_OF_A_HOUR); //Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
			const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
			const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

			// Render
			if (DATE_TARGET.getTime() > NOW.getTime()) {
				SPAN_DAYS.textContent = (REMAINING_DAYS < 10) ? '0' + REMAINING_DAYS : REMAINING_DAYS;
				SPAN_HOURS.textContent = (REMAINING_HOURS < 10) ? '0' + REMAINING_HOURS : REMAINING_HOURS;
				SPAN_MINUTES.textContent = (REMAINING_MINUTES < 10) ? '0' + REMAINING_MINUTES : REMAINING_MINUTES;
				SPAN_SECONDS.textContent = (REMAINING_SECONDS < 10) ? '0' + REMAINING_SECONDS : REMAINING_SECONDS;
			} else {
				SPAN_DAYS.textContent = '00';
				SPAN_HOURS.textContent = '00';
				SPAN_MINUTES.textContent = '00';
				SPAN_SECONDS.textContent = '00';
			}
		}

		//=== INIT ===//
		updateCountdown();
		// Refresh every second
		setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
	});
}

//Entretenimiento
if(document.querySelector(".stweb__et-favorite-device")){
	let benefitEnt = new Swiper(".stweb__et-favorite-device .swiper", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				centerInsufficientSlides: true
			}
		}
	});
}

//swiper step App Movistar Entretenimiento
if (document.querySelector(".stweb__et-step-app .step-app__container")) {
	let swiperStepApp = new Swiper(".stweb__et-step-app .step-app__container", {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
				centerInsufficientSlides: true
			}
		},
		pagination: {
			el: ".stweb__et-step-app .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".stweb__et-step-app .step-app__container .swiper-button-next",
			prevEl: ".stweb__et-step-app .step-app__container .swiper-button-prev"
		},
	});
}

// PREPLAN - PAGE
if (document.querySelector(".stweb__preplan-banner-hero .banner-hero__container")) {
	let swiper_bannerPreplan = new Swiper(".stweb__preplan-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".stweb__preplan-banner-hero .swiper-button-next",
			prevEl: ".stweb__preplan-banner-hero .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__preplan-plans .plan__swiper")) {
	let swiper_preplanPlanes = new Swiper(".stweb__preplan-plans .plan__swiper", {
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
			nextEl: ".stweb__preplan-plans .swiper-button-next",
			prevEl: ".stweb__preplan-plans .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__preplan-plans .plan-box")) {
	$(".stweb__preplan-plans .plan-box .box__footer .link--more").click(function () {
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

if (document.querySelector(".stweb__preplan-plans .extra-plans-slider")) {
	let swiper_preplanExtraBenefit = new Swiper(".stweb__preplan-plans .extra-plans-slider", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			}
		}
	});
};

if (document.querySelector(".stweb__preplan-join .join-steps-slider")) {
	let swiper_preplanJoinSteps = new Swiper(".stweb__preplan-join .join-steps-slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 40,
			}
		},
		navigation: {
			nextEl: ".stweb__preplan-join .swiper-button-next",
			prevEl: ".stweb__preplan-join .swiper-button-prev",
		},
	});
};

// PREPAGO - PAGE
if (document.querySelector(".stweb__prepago-banner-hero .banner-hero__container")) {
	let swiper_bannerPrepago = new Swiper(".stweb__prepago-banner-hero .banner-hero__container", {
		spaceBetween: 0,
		navigation: {
			nextEl: ".stweb__prepago-banner-hero .swiper-button-next",
			prevEl: ".stweb__prepago-banner-hero .swiper-button-prev",
		},
	});
}

if (document.querySelector(".stweb__prepago-freedom .extra-benefit-slider")) {
	let swiper_prepagoExtraBenefit = new Swiper(".stweb__prepago-freedom .extra-benefit-slider", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		centerInsufficientSlides: true,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 24,
			}
		}
	});
};