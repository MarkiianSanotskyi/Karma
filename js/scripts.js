/*placeholder*/
$(document).ready(function () {
	$.Placeholder.init({
		color: "#797979"
	});
	
	$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		var dt = $('dt');
		var dtOpened = $($('dt.open')[0]);
		if(dt.index(dtOpened) != dt.index($(this))) {
			dtOpened.toggleClass('open').next().slideToggle();
		}
		$(this).toggleClass('open').next().slideToggle();
	});
}
	
});

$(document).ready(function(){
        var $menu = $(".top-header");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <=100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });


/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 385,
        minHeight: 291,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: true,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/ 





	//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: true,
        fixed: false,
        autoCenter: false,
     
    });

var mySwiper = new Swiper('.swiper-container-3', {
	speed: 500,
	slidesPerView: 3,
	spaceBetween: 50,
	centeredSlides: true,
	initialSlide: 1,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',

	// Responsive breakpoints
	breakpoints: {
		
	
		767: {
		speed: 500,
			slidesPerView: 1,
			spaceBetween: 50,
			centeredSlides: false,
			initialSlide: 0,
		},
	
		991: {
			speed: 500,
			slidesPerView: 3,
			spaceBetween: 50,
			centeredSlides: false,
			initialSlide: 0,
		},
		
		1200: {
			speed: 500,
			slidesPerView: 3,
			spaceBetween: 50,
			centeredSlides: false,
			initialSlide: 0,
		},
		1920: {
			speed: 500,
			slidesPerView: 3,
			spaceBetween: 45,
			centeredSlides:false,
			initialSlide: 0,
			
    

		}
	}
});


var mySwiper2 = new Swiper('.swiper-container-4', {
	speed: 10000,
	spaceBetween: 30,
	centeredSlides: true,
	initialSlide: 1,
	freeMode: true,
	slidesPerView: 'auto',
	autoplay: 1,
	loop: true,
	loopAdditionalSlides: 20,

});

/* F.A.Q. */




   
