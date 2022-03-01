window.onload = function(){
    $('.loading').fadeOut(500);
};

$(document).ready(function(){
    $('#food').click(function(){
        $(" .one").hide();
        $(" .three").hide();
        $(" .four").hide();
        $(" .five").hide();
        $(" .two").show();
    });
    $('#apartments').click(function(){
        $(" .two").hide();
        $(" .three").hide();
        $(" .four").hide();
        $(" .five").hide();
        $(".one").show();
    });
    $('#Shopping').click(function(){
        $(" .one").hide();
        $(" .two").hide();
        $(" .four").hide();
        $(" .five").hide();
        $(".three").show();
    });
    $('#cars').click(function(){
        $(" .one").hide();
        $(" .three").hide();
        $(" .two").hide();
        $(" .five").hide();
        $(" .four").show();
    });
    $('#travel').click(function(){
        $(" .one").hide();
        $(" .three").hide();
        $(" .four").hide();
        $(" .two").hide();
        $(" .five").show();
    });
    $('.cont').on('click' , function(){
        $(this).addClass("play").siblings().removeClass("play");
    });
    $("input").on('focus' ,function(){
        $(this).css({
            "outline" : "0px solid" ,
            "caret-color" : "orange"
        })
    });
    $("textarea").on('focus' ,function(){
        $(this).css({
            "outline" : "0px solid" ,
            "caret-color" : "orange"
        })
    });
    $('.counter').each(function(){
        $(this).prop('counter' , 0).animate({
            counter : $(this).text()
        } , {
            
            duration : 7000 ,
            easing : 'linear' ,
            step : function(e){
                $(this).text(Math.ceil(e)+"%");
            }
        })
    });
    new WOW().init();

    $(document).on('scroll' , function(){
        var hei = $(window).scrollTop();
        if(hei >= 1000){
            
            $('.up').fadeIn(500);
            $('.up').on('click' , function(){
            $(window).scrollTop(0);
        });
        }
        else{
            $('.up').fadeOut(500);
        }
    });
    $(document).on('scroll' , function(){
        var hei = $(window).scrollTop();
        if( hei <= 600){
            $('.home').addClass('run');
        }
        else{
            $('.home').removeClass('run');
        }
        if( hei > 600 && hei <= 1300){
            $('.ab').addClass('run');
        }
        else{
            $('.ab').removeClass('run');
        }
        if( hei > 1300 && hei <= 3800){
            $('.ser').addClass('run');
        }
        else{
            $('.ser').removeClass('run');
        }
        if( hei > 3800 && hei <= 5500){
            $('.bl').addClass('run');
        }
        else{
            $('.bl').removeClass('run');
        }
        if( hei > 5500 && hei <= 8000){
            $('.co').addClass('run');
        }
        else{
            $('.co').removeClass('run');
        }
        // for media query
        if( hei > 1300 && hei <= 6000){
            $('.serv').addClass('run');
        }
        else{
            $('.serv').removeClass('run');
        }
        if( hei > 6000 && hei <= 8950){
            $('.blo').addClass('run');
        }
        else{
            $('.blo').removeClass('run');
        }
        if( hei > 8950 && hei <= 11000){
            $('.ct').addClass('run');
        }
        else{
            $('.ct').removeClass('run');
        }
    });

});