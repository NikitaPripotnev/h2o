$(function() {




		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js4").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#popup-thanks-js').addClass('is-visible');
			$(".submitForm-js4").val("Отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


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
			$(".submitForm-js3").val("Отправлено");
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
	$(".formOrder__form-js6").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".submitForm-js6").val("Отправлено");
			$('#my-popup-action-js').removeClass('is-visible');
			$('#popup-thanks-js').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".formOrder__form-js7").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".submitForm-js7").val("Отправлено");
			$('#my-popup-reviews-js').removeClass('is-visible');
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



	/*открытие модального окна по кнопке запланировать акция */
	//open popup
	$('.cd-popup-trigger-action-js').on('click', function(event){
		event.preventDefault();
		$('#my-popup-action-js').addClass('is-visible');
	});



	/*открытие модального окна по кнопке оставить отзыв */
	//open popup
	$('.cd-popup-trigger-reviews-js').on('click', function(event){
		event.preventDefault();
		$('#my-popup-reviews-js').addClass('is-visible');
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





		$("[data-fancybox]").fancybox({
				touch: {
						vertical: false

				}
		});

		$(".flip-container").click(function(){
				$(this).toggleClass("hover");

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
		//$(".errorForm").hide();
		$(".errorForm6-0").hide();
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
//custom select end


//form validate
	//order form4
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



	//order form1
	$('.submitForm-js1').click(function(e){
		if($(".mainForm__name-js1 input").val()==''){
			e.preventDefault();
			$(".errorForm1-1").show();
			$('.mainForm__name-js1 input').addClass('redError');
		}
	});

	$(".mainForm__name-js1 input").on('click',function () {
		$(".errorForm1-1").hide();
		$('.mainForm__name-js1 input').removeClass('redError');
	});	


	$('.submitForm-js1').click(function(e){
		if($(".mainForm__tel-js1 input").val()==''){
			e.preventDefault();
			$(".errorForm1-2").show();
			$('.mainForm__tel-js1 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js1 input").on('change',function () {
		$(".errorForm1-2").hide();
		$('.mainForm__tel-js1 input').removeClass('redError');
	});	





	//order form2
	$('.submitForm-js2').click(function(e){
		if($(".mainForm__name-js2 input").val()==''){
			e.preventDefault();
			$(".errorForm2-1").show();
			$('.mainForm__name-js2 input').addClass('redError');
		}
	});

	$(".mainForm__name-js2 input").on('click',function () {
		$(".errorForm2-1").hide();
		$('.mainForm__name-js2 input').removeClass('redError');
	});	


	$('.submitForm-js2').click(function(e){
		if($(".mainForm__tel-js2 input").val()==''){
			e.preventDefault();
			$(".errorForm2-2").show();
			$('.mainForm__tel-js2 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js2 input").on('change',function () {
		$(".errorForm2-2").hide();
		$('.mainForm__tel-js2 input').removeClass('redError');
	});	



	//order form3
	$('.submitForm-js3').click(function(e){
		if($(".mainForm__name-js3 input").val()==''){
			e.preventDefault();
			$(".errorForm3-1").show();
			$('.mainForm__name-js3 input').addClass('redError');
		}
	});

	$(".mainForm__name-js3 input").on('click',function () {
		$(".errorForm3-1").hide();
		$('.mainForm__name-js3 input').removeClass('redError');
	});	


	$('.submitForm-js3').click(function(e){
		if($(".mainForm__tel-js3 input").val()==''){
			e.preventDefault();
			$(".errorForm3-2").show();
			$('.mainForm__tel-js3 input').addClass('redError');
		}
	});

	$(".mainForm__tel-js3 input").on('change',function () {
		$(".errorForm3-2").hide();
		$('.mainForm__tel-js3 input').removeClass('redError');
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






	//action form6
	$('.submitForm-js6').click(function(e){
		if($(".mainForm__name-js6 input").val()==''){
			e.preventDefault();
			$(".errorForm6-1").show();
			$('.mainForm__name-js6 input').addClass('redError');
		}
	});

	$(".mainForm__name-js6 input").on('click',function () {
		$(".errorForm6-1").hide();
		$('.mainForm__name-js6 input').removeClass('redError');
	});	



	$('.submitForm-js6').click(function(e){
		if($(".mainForm__date-js6 input").val()==''){
			e.preventDefault();
			$(".errorForm6-4").show();
			$('.mainForm__date-js6 input').addClass('redError');
		}
	});

	$(".mainForm__date-js6 input").on('click',function () {
		$(".errorForm6-4").hide();
		$('.mainForm__date-js6 input').removeClass('redError');
	});	


	$('.submitForm-js6').click(function(e){
		if($(".mainForm__tel-js6 input").val()==''){
			e.preventDefault();
			$(".errorForm6-2").show();
			$('.mainForm__tel-js6 input').addClass('redError');
		}

		if(!$(".customSelectAction .custom-option").hasClass('selection')){
			e.preventDefault();
			$(".errorForm6-0").show();
			$('.customSelectAction .custom-select-trigger').addClass('redError');
		};

	});

	$(".mainForm__tel-js6 input").on('change',function () {
		$(".errorForm6-2").hide();
		$('.mainForm__tel-js6 input').removeClass('redError');
	});	




	//reviews form7

//name & tel
	$('.submitForm-js7').click(function(e){
		if($(".mainForm__name-js7 input").val()==''){
			e.preventDefault();
			$(".errorForm7-1").show();
			$('.mainForm__name-js7 input').addClass('redError');
		}
		if($(".mainForm__tel-js7 input").val()==''){
			e.preventDefault();
			$(".errorForm7-2").show();
			$('.mainForm__tel-js7 input').addClass('redError');
		}

	});

	$(".mainForm__name-js7 input").on('click',function () {
		$(".errorForm7-1").hide();
		$('.mainForm__name-js7 input').removeClass('redError');
	});	


//tel


	$(".mainForm__tel-js7 input").on('change',function () {
		$(".errorForm7-2").hide();
		$('.mainForm__tel-js7 input').removeClass('redError');
	});	


//adress
	$('.submitForm-js7').click(function(e){
		if($(".mainForm__adress-js7 input").val()==''){
			e.preventDefault();
			$(".errorForm7-3").show();
			$('.mainForm__name-js7 input').addClass('redError');
		}
	});

	$(".mainForm__adress-js7 input").on('click',function () {
		$(".errorForm7-3").hide();
		$('.mainForm__name-js7 input').removeClass('redError');
	});	


//textarea
	$('.submitForm-js7').click(function(e){
		if($(".mainForm__textarea-js7 textarea").val()==''){
			e.preventDefault();
			$(".errorForm7-4").show();
			$('.mainForm__textarea-js7 textarea').addClass('redError');
		}
	});

	$(".mainForm__textarea-js7 textarea").on('click',function () {
		$(".errorForm7-4").hide();
		$('.mainForm__textarea-js7 textarea').removeClass('redError');
	});	

//mark 

	$('.submitForm-js7').click(function(e){
		if($(".mainForm__mark-js7 input").val()==''){
			e.preventDefault();
			$(".errorForm7-5").show();
			$('.mainForm__mark-js7 input').addClass('redError');
		}
	});

	$(".mainForm__mark-js7 input").on('click',function () {
		$(".errorForm7-5").hide();
		$('.mainForm__mark-js7 input').removeClass('redError');
	});	













//calculator begin
	//запрет ввода букв

	$(".meter-js").keypress(function(event){
		event = event || window.event;
		if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) ){
		$('.errorNumber').show();
			return false;		
		}else{
			$('.errorNumber').hide();
		}

	});



		function calc(){
			console.log("pfgecr calk");
				var price = $('.calc__vid-uborki').find(':selected').attr('data-price');
				var plosh = $('.input__metters').val();
				if(plosh == "") plosh = 1;

				var win = 0;
				if( $(".calc__windows").val() == 1 ){
						win = price * plosh * $('.calc__vid-uborki').find(':selected').attr('data-koef');
				}
				//
				var sum = price * plosh + win;
				 $('.calc__select-total__price-val').html( Math.round(sum) );


				console.log(
						// $(".calc__windows").val()
						// win
						// $('.calc__vid-uborki').find(':selected').attr('data-koef')
						// price
						// plosh

				);


		}//calc

	/*		$('.calc__vid-uborki').change(function(){
					calc();
			});*/
	$('.custom-options').on('click blur',function () {
		if($(".custom-option").hasClass('selection')){
			console.log("dddd");
					calc();
		}
	});
		$('.custom-select').on('change input',function(){
			console.log("dddd");
				calc();
		});


		$('.calc__windows').change(function(){
				calc();
		});

		$('.input__metters').on('input', function(){
				calc();
		});

});
//calculator end








	$('.cases__slider').slick({

		dots:true,

		// centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
			prevArrow: '<img class="slider-3-left slider-left-arrow" src="./img/slider-left-arrow.png">',
			nextArrow: '<img class="slider-3-right slider-right-arrow" src="./img/slider-right-arrow.png">',
	});

	$(".slider__cases-cont .all_slides").text( $(".cases__slider").slick("getSlick").slideCount );

	$('.cases__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log( ++currentSlide );
			$(".slider__cases-cont .now_slide").text( ++nextSlide );
	});



	$('.slider__feedback').slick({
		dots:true,
		arrow:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive:[
					{
					breakpoint:1020,
					settings:{
						slidesToShow: 2,
						dots:true,
						arrow:true,
					}
				},
				{
					breakpoint:560,
					settings:{
						slidesToShow: 1,
						dots:true,
						arrow:true,
					}
				}

					],
					// customPaging : function(slider, i) {
					//     var thumb = $(slider.$slides[i]).data();
					//     return '<a>'+i+'</a>';
					//             },
			prevArrow: '<img class="slider-3-left slider-left-arrow" src="./img/slider-left-arrow.png">',
			nextArrow: '<img class="slider-3-right slider-right-arrow" src="./img/slider-right-arrow.png">',
	});


	$(".slider__feedback__content .all_slides").text( $(".slider__feedback").slick("getSlick").slideCount );

	$('.slider__feedback').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log( ++currentSlide );
			$(".slider__feedback__content .now_slide").text( ++nextSlide );
	});


	$(".slider__videos").slick({
			autoplay: false,
			dots: true,
			arrows:true,
			responsive:[
									{
									breakpoint:850,
									settings:{
										slidesToShow: 2,
										dots:true,
										arrows:true,
									}
								},
								{
									breakpoint:500,
									settings:{
										slidesToShow: 1,
										dots:true,
										arrows:true,
									}
								}

									],

			prevArrow: '<img class="slider-3-left slider-left-arrow" src="./img/slider-left-arrow.png">',
			nextArrow: '<img class="slider-3-right slider-right-arrow" src="./img/slider-right-arrow.png">',
			slidesToShow: 3

			// customPaging : function(slider, i) {
			// var thumb = $(slider.$slides[i]).data();
			// return '<a>'+i+'</a>';
			//         }

	});

	$(".slider__vid__cont .all_slides").text( $(".slider__videos").slick("getSlick").slideCount );

	$('.slider__videos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log( ++currentSlide );
			$(".slider__vid__cont .now_slide").text( ++nextSlide );
	});


 	//custom function showing current slide
			var $status = $('.pagingInfo');
			var $slickElement = $('.slider__videos');

			$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 1;
					$status.text(i + '/' + slick.slideCount);
			});





	$(".p-slider").slick({
			autoplay: false,
			dots: true,
			arrows:true,
			responsive:[
					{
							breakpoint:950,
							settings:{
								slidesToShow: 3,
								dots:true,
								arrows:true,
							}
						},
						{
							breakpoint:766  ,
							settings:{
								slidesToShow: 2,
								dots:true,
								arrows:true,
							}
						},
						{
							breakpoint:555  ,
							settings:{
								slidesToShow: 1,
								dots:true,
								arrows:true,
							}
						}

									],

									prevArrow: '<img class="slider-3-left slider-left-arrow" src="./img/slider-left-arrow.png">',
									nextArrow: '<img class="slider-3-right slider-right-arrow" src="./img/slider-right-arrow.png">',
			slidesToShow: 4
	});




		$(".partners__slider .all_slides").text( $(".p-slider").slick("getSlick").slideCount );
		$('.p-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				// console.log( ++currentSlide );
				$(".partners__slider .now_slide").text( ++nextSlide );
		});








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









		$("#navigation__list").on("click","a", function (event) {
				//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();

				//забираем идентификатор бока с атрибута href
				var id  = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
						top = $(id).offset().top;

				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({scrollTop: top}, 1500);
		});


$("input[name='tel']").mask('+7 (999) 999 99 99');

/*$.validator.addMethod('regexp', function (value, element, params) {
		var expression = new RegExp(params);
		return this.optional(element) || expression.test(value);
});*/





sale_date = "2019/02/14 23:59:59";
$('#sale_date').countdown(sale_date, function (event) {
    $(this).html(event.strftime(


        '<div class="timer__item"> ' +
        '<div class="timer__inner">%D</div> ' +
        '<div class="time">дней</div> ' +
        '</div> ' +

        '<div class="timer__item"> ' +
        '<div class="time">часов</div> ' +
        '<div class="timer__inner">%H</div> ' +
        '</div> ' +

        '<div class="timer__item"> ' +
        '<div class="time">минут</div> ' +
        '<div class="timer__inner">%M</div> ' +
        '</div> ' +

        '<div class="timer__item"> ' +
        '<div class="time">секунд</div> ' +
        '<div class="timer__inner">%S</div> ' +
        '</div> '



    ));

// %D дни
// %H часы
// %M минуты
// %S секунды






});


