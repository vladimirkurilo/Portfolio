//NAVBAR
$(window).scroll(function() {
	if ($(this).scrollTop() > 750) {
		$('.navbar_active').fadeIn();
	} else {
		$('.navbar_active').fadeOut();
	}
});


//HAMBURGER MENU
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu__item'),
	hamburger = document.querySelector('.hamburger');
  
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});
  
	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		})
	})
  })


//TEXT TYPING
 
$('#text__2').typeIt({
	strings: ["Я web-разработчик", "из города Минск."],
	speed: 50,
	autoStart: false
});

//SKILLS RATING
const counters = document.querySelectorAll('.skills__ratings-counter'),
	  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});


//TABS
(function($) {
	$(function() {
	  
	  $('ul.projects__tabs').on('click', 'li:not(projects__tab_active)', function() {
		$(this)
		  .addClass('projects__tab_active').siblings().removeClass('projects__tab_active')
		  .closest('div.tabs').find('div.projects__content').removeClass('projects__content_active').eq($(this).index()).addClass('projects__content_active');
	  });
	  
	});
	})(jQuery);

//SMOOT SCROLL
$(document).ready(function(){
	$("#menu, #links, #logo").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//MODAL
$('.modal__close').on('click', function() {
	$('.overlay, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('.overlay, #thanks').fadeIn('slow');

		$('form').trigger('reset');
	});
	return false;
});

//WOW JS

new WOW().init();
