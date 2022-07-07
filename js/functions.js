$(function() {

    navToggle()
    comentarioSlider()
    hoverSkills()
    fazemosgaleria()
    tiltStyle()
    parallax()

    function navToggle(){
        $('#icon-toggle').on('click', (function(){
            $('.ul-mobile').slideToggle()
        })
    )}

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

    function hoverSkills(){
        $('.skills').hover(function(){
            $(this).find('li').css('background', '#ff5b00')
        }, function(){
            $(this).find('li').css('background', 'black')
        }  
    )}

    function fazemosgaleria() {

        fazemosDefaults()

        let principal = $('.do1')
        let do2 = $('.do2')
        let do3 = $('.do3')
        let do4 = $('.do4')
        let do5 = $('.do5')
        let do6 = $('.do6')

        $(".show2").click(function(e){
            e.stopPropagation();
            $('.fazemos-img div').css('display', 'none')
            do2.css('display', 'block')       
        })
        
        $(".show3").click(function(e){
            e.stopPropagation();
            $('.fazemos-img div').css('display', 'none')
            do3.css('display', 'block')       
        })
        $(".show4").click(function(e){
            e.stopPropagation();
            $('.fazemos-img div').css('display', 'none')
            do4.css('display', 'block')       
        })
        $(".show5").click(function(e){
            e.stopPropagation();
            $('.fazemos-img div').css('display', 'none')
            do5.css('display', 'block')       
        })
        $(".show6").click(function(e){
            e.stopPropagation();
            $('.fazemos-img div').css('display', 'none')
            do6.css('display', 'block')       
        })
        
        function fazemosDefaults() {
            $('body, .container-fazemos').click(function(){
                $('.fazemos-img div').css('display', 'none')
                principal.css('display', 'block') 
            })
            $('.container-skills').click(function(e){
                e.stopPropagation();   
            })
        }    
    }
   
    function tiltStyle() {
        $('.fazemos-img div img').tilt({
            scale: 1.
        })
    }

    
        
})