$(function() {

    navToggle()
    comentarioSlider()

    function navToggle(){
        $('#icon-toggle').click(function(){
            $('.ul-mobile').slideToggle()
        })
    }

    function comentarioSlider(){
        $('.citacao').slick({
            centerMode:false,
			arrows:false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed:10000,
            dots: true,
        })
    }

})