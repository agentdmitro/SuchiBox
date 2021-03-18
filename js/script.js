

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
  $('.header__list').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});


let btn = document.querySelector('.arrow')
//
function magic() {
  if (window.pageYOffset > 700) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
};

// When scrolling, we run the function
window.onscroll = magic

$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 120) $(".tools").css({top: '0', position: 'relative'});
  else $(".tools").css({top: '0px', position: 'fixed', width: '100%'});
});


$('.tags__list-li').on('click', function(event){
	$(this).toggleClass('active');
});

$('.tags__item').on('click', function(event){
    $(this).toggleClass('active');
});



var swiper = new Swiper('.swiper-container', {
     loop: true,
     centeredSlides: true,
     slidesPerView: 1.4,
      spaceBetween: 32,
      pagination: {
        el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        140: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.1,
          spaceBetween: 16,
          centeredSlides: false,
        },
        1000: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1665: {
            slidesPerView: 1.2,
        },
        1666: {
            slidesPerView: 1.4,
        },
        1800: {
            slidesPerView: 1.6,
        },
        2100: {
            slidesPerView: 1.4,
        },
      }
});



$('a.open-product').click(function (e) {
  e.preventDefault();
  $('.popup.popup-product').toggleClass('show');
  $('.bg-menu').toggleClass('show');
});

$('a.open-login').click(function (e) {
  e.preventDefault();
  $('.popup.popup-login').toggleClass('show');
  $('.bg-menu2').toggleClass('show');
});

$('.bg-menu').click(function () {
  $('.popup').removeClass('show');
  $('.bg-menu').removeClass('show');
});
$('.close').click(function () {
  $('.popup').removeClass('show');
  $('.bg-menu').removeClass('show');
});

$('.bg-menu2').click(function () {
  $('.popup').removeClass('show');
  $('.bg-menu2').removeClass('show');
});
$('.close').click(function () {
  $('.popup').removeClass('show');
  $('.bg-menu2').removeClass('show');
});

$('.popup__amount-item').click(function(){
	if(!$(this).hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
});



