$(document).ready(function() {

// Скрипт меню бургер ====================================

// $('.header__burger').click(function(event){
//     $('.header__burger,.header-menu').toggleClass('active');
//     $('body').toggleClass('lock');
// });

// Скрипт меню бургер ====================================



// Скрипт настройки ibg ====================================

function ibg(){
    
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
};

ibg();

// Скрипт настройки ibg ====================================



// Скрипт работы с табами ====================================


// $("body").on("click", ".tab__navitem", (function(t) {
//     var e = $(this).index();
//     if ($(this).hasClass("parent")) e = $(this).parent().index();
//     $(this).hasClass("active") || 
//     ($(this).closest(".tabs").find(".tab__navitem").removeClass("active"), 
//     $(this).addClass("active"), 
//     $(this).closest(".tabs").find(".tab__item").removeClass("active").eq(e).addClass("active"), 
//     $(this).closest(".tabs").find(".slick-slider").length > 0 && $(this).closest(".tabs").find(".slick-slider").slick("setPosition"))
// }));


// Скрипт работы с табами ====================================




// Скрипт работы с картой  ====================================

// function map(n){
// 	google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
// 		var map = this;
// 		var ov = new google.maps.OverlayView(); 
// 		ov.onAdd = function() { 
// 			var proj = this.getProjection(); 
// 			var aPoint = proj.fromLatLngToContainerPixel(latlng);
// 			aPoint.x = aPoint.x+offsetX;
// 			aPoint.y = aPoint.y+offsetY;
// 			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
// 			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
// 		}
// 		ov.draw = function() {};
// 		ov.setMap(this);
// 	};
// 	var markers = new Array();
// 	var infowindow = new google.maps.InfoWindow({
// 		//pixelOffset: new google.maps.Size(-230,250)
// 	});
// 	var locations = [
// 		[new google.maps.LatLng(53.819055,27.8813694)],
// 		[new google.maps.LatLng(53.700055,27.5513694)],
// 		[new google.maps.LatLng(53.809055,27.5813694)],
// 		[new google.maps.LatLng(53.859055,27.5013694)],
// 	]
// 	var options = {
// 		zoom: 3,
// 		panControl:false,
// 		mapTypeControl:false,
// 		center: locations[0][0],
// 		styles:[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
// 		scrollwheel:false,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}; 
// 	var map = new google.maps.Map(document.getElementById('map'), options);
// 	var icon={
// 		url:'img/icons/map.svg',
// 		scaledSize: new google.maps.Size(24, 29),
// 		anchor: new google.maps.Point(12, 15)
// 	}
// 	for (var i = 0; i < locations.length; i++) {
// 		var marker = new google.maps.Marker({
// 			icon:icon,
// 			position: locations[i][0],
// 			map: map,
// 		});
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				for (var m = 0; m < markers.length; m++) {
// 					markers[m].setIcon(icon);
// 				}
// 					var cnt=i+1;
// 				infowindow.setContent($('.contacts-map-item_'+cnt).html());
// 				infowindow.open(map, marker);
// 				marker.setIcon(icon);
// 				map.setCenterWithOffset(marker.getPosition(),0,0);
// 				setTimeout(function(){
// 					baloonstyle();
// 				},10);
// 			}
// 		})(marker, i));
// 		markers.push(marker);
// 	}

// 	if(n){
// 			var nc=n-1;
// 		setTimeout(function(){
// 			google.maps.event.trigger(markers[nc], 'click');
// 		},500);
// 	}
// }
// function baloonstyle(){
// 	$('.gm-style-iw').parent().addClass('baloon');
// 	$('.gm-style-iw').prev().addClass('baloon-style');
// 	$('.gm-style-iw').next().addClass('baloon-close');
// 	$('.gm-style-iw').addClass('baloon-content');
// }
// if($("#map").length>0){
// 	map(1);
// }

// Скрипт работы с картой  ====================================

// goto  =======================================

// $('.goto').click(function () {
// 	var el = $(this).attr('href').replace('#', '');
// 	var offset = 0;
// 	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

// 	if ($('.menu__body').hasClass('active')) {
// 		$('.menu__body,.icon-menu').removeClass('active');
// 		$('body').removeClass('lock');
// 	}
// 	return false;
// });


// goto  =======================================

// slick slider настройка  ==============================

$('.spotsblock__bottom').slick({
    arrows: false,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 9,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 6
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

// slick slider настройка  ==============================


        
    $(".form-mainblock").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: ""
      },
      errorClass: "err",
      errorElement: "em"
    });
    $(".form-release").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: ""
      },
      errorClass: "err",
      errorElement: "em"
    });
    $(".form-release_two").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: ""
      },
      errorClass: "err",
      errorElement: "em"
    });

    $(".contact__form").validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        }
      },
      messages: {
        username: "",
        email: "",
        phone: ""
      },
      errorClass: "err",
      errorElement: "em"
    });

    // звездный рейтинг  ======================
    const ratingItemsList = document.querySelectorAll('.star__item');
    const RatingItemsArray = Array.prototype.slice.call(ratingItemsList);

    RatingItemsArray.forEach(item =>
      item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
        )
      );
    // звездный рейтинг  ======================


    $('.btn').on('click', function() {
      $('.modal').addClass('active');
      $('body').toggleClass('lock');
  });

  $('.modal__btn').on('click', function() {
    $('.modal').removeClass('active');
  })
});