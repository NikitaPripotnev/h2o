$(function() {

		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#popup-thanks-js').addClass('is-visible');
			$(".submitForm-js1").val("Отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#popup-thanks-js').addClass('is-visible');
			$(".submitForm-js2").val("Отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js3").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#popup-thanks-js').addClass('is-visible');
			$(".submitForm-js3").val("Отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js4").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".submitForm-js4").val("Отправлено");
			$('#my-popup-order-js').removeClass('is-visible');
			$('#popup-thanks-js').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js5").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".submitForm-js5").val("Отправлено");
			$('#my-popup-question-js').removeClass('is-visible');
			$('#popup-thanks-js').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});










$("[data-fancybox]").fancybox({
				touch: {
						vertical: false

				}
		});




	/*открытие модального окна СПАСИБО ТЕСТ*/
	//open popup
	$('.cd-popup-trigger-thanks-js').on('click', function(event){
		event.preventDefault();
		$('#popup-thanks-js').addClass('is-visible');
	});

	/*открытие модального окна политика конфиденциальности*/
	//open popup
	$('.cd-popup-trigger-privace-js').on('click', function(event){
		event.preventDefault();
		$('#popup-privace-js').addClass('is-visible');
	});
	


	/*открытие модального окна по кнопке заказать */
	//open popup
	$('.cd-popup-trigger-order-js').on('click', function(event){
		event.preventDefault();
		$('#my-popup-order-js').addClass('is-visible');
	});


	/*открытие модального окна по кнопке задать вопроc */
	//open popup
	$('.cd-popup-trigger-question-js').on('click', function(event){
		event.preventDefault();
		$('#my-popup-question-js').addClass('is-visible');
	});




	


	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.simplebar-content') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
		}
	});



	//masked input
	$(function($) {
		$.mask.definitions['~']='[+-]';
		$('.maskTel-js').mask('+7(999)999-99-99');
	});



	//Custom select
	$(".custom-select").each(function() {
		var classes = $(this).attr("class"),
				id      = $(this).attr("id"),
				name    = $(this).attr("name");
		var template =  '<div class="' + classes + '">';
				template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
				template += '<div class="custom-options">';
				$(this).find("option").each(function() {
					template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
				});
		template += '</div></div>';
		
		$(this).wrap('<div class="custom-select-wrapper"></div>');
		//$(this).hide();
		$(this).after(template);
	});
	$(".custom-option:first-of-type").hover(function() {
		$(this).parents(".custom-options").addClass("option-hover");
	}, function() {
		$(this).parents(".custom-options").removeClass("option-hover");
	});
	$(".custom-select-trigger").on("click", function(event) {
		$(".errorForm").hide();
		$(".errorForm2-1").hide();
		$('.custom-select-trigger').removeClass('redError');
		$('html').one('click',function() {
			$(".custom-select").removeClass("opened");
		});
		$(this).parents(".custom-select").toggleClass("opened");
		event.stopPropagation();
	});
	$(".custom-option").on("click", function() {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".custom-select").removeClass("opened");
		$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
	});




 //form validation


 	//header form
	$('.submitForm-js1').click(function(e){
		if($(".mainForm__tel-js1 input").val()==''){
			e.preventDefault();
			$(".errorForm0").show();
			$('.mainForm__tel-js1 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js1 input").on('change',function () {
		$(".errorForm0").hide();
		$('.mainForm__tel-js1 input').removeClass('redError');
	});	



	//advantages form
	$('.submitForm-js2').click(function(e){
		if(!$(".custom-option").hasClass('selection')){
			e.preventDefault();
			$(".errorForm").show();
			$('.custom-select-trigger').addClass('redError');
		};

		if($(".mainForm__tel-js2 input").val()==''){
			e.preventDefault();
			$(".errorForm2").show();
			$('.mainForm__tel-js2 input').addClass('redError');
		}
	});
		
	$(".mainForm__tel-js2 input").on('change',function () {
		$(".errorForm2").hide();
		$('.mainForm__tel-js2 input').removeClass('redError');
	});
				



	//cases form
	$('.submitForm-js3').click(function(e){
		if(!$(".formOrder__form-js3 .custom-option").hasClass('selection')){
			e.preventDefault();
			$(".errorForm2-1").show();
			$('.formOrder__form-js3 .custom-select-trigger').addClass('redError');
		};

		if($(".mainForm__tel-js3 input").val()==''){
			e.preventDefault();
			$(".errorForm3").show();
			$('.mainForm__tel-js3 input').addClass('redError');
		}
	});
		
	$(".mainForm__tel-js3 input").on('change',function () {
		$(".errorForm3").hide();
		$('.mainForm__tel-js3 input').removeClass('redError');
	});
			


	//order form
	$('.submitForm-js4').click(function(e){
		if($(".mainForm__name-js4 input").val()==''){
			e.preventDefault();
			$(".errorForm4-1").show();
			$('.mainForm__name-js4 input').addClass('redError');
		}
	});

	$(".mainForm__name-js4 input").on('click',function () {
		$(".errorForm4-1").hide();
		$('.mainForm__name-js4 input').removeClass('redError');
	});	


	$('.submitForm-js4').click(function(e){
		if($(".mainForm__tel-js4 input").val()==''){
			e.preventDefault();
			$(".errorForm4-2").show();
			$('.mainForm__tel-js4 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js4 input").on('change',function () {
		$(".errorForm4-2").hide();
		$('.mainForm__tel-js4 input').removeClass('redError');
	});	

	//question form
	$('.submitForm-js5').click(function(e){
		if($(".mainForm__name-js5 input").val()==''){
			e.preventDefault();
			$(".errorForm5-1").show();
			$('.mainForm__name-js5 input').addClass('redError');
		}
	});

	$(".mainForm__name-js5 input").on('click',function () {
		$(".errorForm5-1").hide();
		$('.mainForm__name-js5 input').removeClass('redError');
	});	


	$('.submitForm-js5').click(function(e){
		if($(".mainForm__tel-js5 input").val()==''){
			e.preventDefault();
			$(".errorForm5-2").show();
			$('.mainForm__tel-js5 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js5 input").on('change',function () {
		$(".errorForm5-2").hide();
		$('.mainForm__tel-js5 input').removeClass('redError');
	});	



	$('.submitForm-js5').click(function(e){
		if($(".mainForm__textarea-js5 textarea").val()==''){
			e.preventDefault();
			$(".errorForm5-3").show();
			$('.mainForm__textarea-js5 textarea').addClass('redError');
		}
	});

	$(".mainForm__textarea-js5 textarea").on('click',function () {
		$(".errorForm5-3").hide();
		$('.mainForm__textarea-js5 textarea').removeClass('redError');
	});	



	// SERVICES SLIDER BEGIN	
	$(function(){
		
		// vars
		var slider, btn, tabC, prevIndex, objTab = {};
		
		btn = $(".btn");
		tabC = $(".tabContent");
		
		prevIndex = 0;
		
		btn.on("click", function() {
			
			var th, thIndex;
			
			th = $(this);
			thIndex = th.index();
				 
			if(!th.hasClass("active")) {
				if(prevIndex != thIndex && prevIndex !== 'undefined') {
					btn.eq(prevIndex).removeClass("active");
					tabC.eq(prevIndex).removeClass("show");
				}
				btn.eq(thIndex).addClass("active");
				tabC.eq(thIndex).addClass("show");
				prevIndex = thIndex;
				
				//slick position filter
				//if you have problem with slick in tabs, use next option
				//magic option
				tabC.eq(thIndex).find(".slider").slick('setPosition');
			}
		});
		
		slider = $(".slider");
		
		slider.slick({
			dots: true,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
		
	});

	// SERVICES SLIDER END


	// CASES SLIDER BEGIN
	var $gallery = $('#js-cases-slider');
	var slideCount = null;

	$gallery.on('init', function(event, slick){
		slideCount = slick.slideCount;
		setSlideCount();
		setCurrentSlideNumber(slick.currentSlide);
	});

		$gallery.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			autoplay: false,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			fade: false
				
		});
	$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){

		setCurrentSlideNumber(nextSlide);
	});

	function setSlideCount() {
		var $el = $('.cases .slide-count-wrap').find('.total');
		$el.text(slideCount);
	}

	function setCurrentSlideNumber(currentSlide) {
		var $el = $('.cases .slide-count-wrap').find('.current');
		$el.text(currentSlide + 1);
	}
	// CASES SLIDER END


	// PARTNERS SLIDER BEGIN
	var $gallery2 = $('.p-slider');
	var slideCount2 = null;

	$gallery2.on('init', function(event, slick){
		slideCount2= slick.slideCount;
		setSlideCount2();
		setCurrentSlideNumber2(slick.currentSlide);
	});

		$gallery2.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			autoplay: false,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			fade: false,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
			]
				
		});
	$gallery2.on('beforeChange', function(event, slick, currentSlide, nextSlide){

		setCurrentSlideNumber2(nextSlide);
	});

	function setSlideCount2() {
		var $el2 = $('.partners .slide-count-wrap').find('.total');
		$el2.text(slideCount2);
	}

	function setCurrentSlideNumber2(currentSlide) {
		var $el2 = $('.partners .slide-count-wrap').find('.current');
		$el2.text(currentSlide + 1);
	}
	// PARTNERS SLIDER END


	// Letters SLIDER BEGIN
	var $gallery3 = $('.thanksLatters-slider-js');
	var slideCount3 = null;

	$gallery3.on('init', function(event, slick){
		slideCount3= slick.slideCount;
		setSlideCount3();
		setCurrentSlideNumber3(slick.currentSlide);
	});

		$gallery3.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			autoplay: false,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			fade: false,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
			]
				
		});
	$gallery3.on('beforeChange', function(event, slick, currentSlide, nextSlide){

		setCurrentSlideNumber3(nextSlide);
	});

	function setSlideCount3() {
		var $el3 = $('.thanksLatters .slide-count-wrap').find('.total');
		$el3.text(slideCount3);
	}

	function setCurrentSlideNumber3(currentSlide) {
		var $el3 = $('.thanksLatters .slide-count-wrap').find('.current');
		$el3.text(currentSlide + 1);
	}

	// LETTERS SLIDER END




	//QUESTION ACCORDION
	function openAcco() {
		const openAcco = $('.acco__item');

		openAcco.on('click', function () {
			$('.acco__item').removeClass('acco__item--active');

			$(this).toggleClass('acco__item--active')
			.openAcco.not($(this))
			.removeClass('acco__item--active');
		})
	};
	openAcco();


	//FLAT SCROLL
	$("#navigation__list").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});



	ymaps.ready(init);

	var map,
		placemarks = [
				{

						latitude: 59.942741,
						longitude: 30.432433,
						hintContent: '<div class="map__hint">улица Якорная 11к, БЦ Парус, офис 208</div>',
						balloonContent: [
								'H2O'
						]
				}];

	function init() {
			map = new ymaps.Map('map', {
					center: [59.942741, 30.432433],
					zoom: 12,
					//controls: ['zoomControl'],
					controls: [],
					behaviors: ['drag']
			});

			placemarks.forEach(function(obj) {
					placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
									hintContent: obj.hintContent,
									balloonContent: obj.balloonContent.join('')
							}
							// , {
							//     iconLayout: 'default#image',
							//     iconImageHref: 'img/content/map-marker.png',
							//     iconImageSize: [46, 57],
							//     iconImageOffset: [-23, -57]
							// }
					);
					//myMap.behaviors.disable('scrollZoom');
				map.behaviors.disable('drag');
				map.geoObjects.add(placemark);
			});
	}	


	//BUTTON TOP BEGIN
		$("#back-top").hide();

		$(function () {
				$(window).scroll(function () {
						if ($(this).scrollTop() > 100) {
								$('#back-top').fadeIn();
						} else {
								$('#back-top').fadeOut();
						}
				});

				$('#back-top a').click(function () {
						$('body,html').animate({
								scrollTop: 0
						}, 800);
						return false;
				});
		});
	//BUTTON TOP END




});
