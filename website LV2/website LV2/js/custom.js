/*global $, alert, console*/
$(function()
{
    'use strict';
    //adjust header height

    var myheader = $('.header');
    var myslider = $('.bxslider');
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.height($(window).height());    
        myslider.each(function () {
            $('.bxslider').css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });

    });
    ///links add active class 
    
   $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //bxslider list item


    myslider.each(function () {
        $(this).css('paddingTop',  ($(window).height() - $('.bxslider li').height()) / 2);
    });
    //trriger bxslider 

    myslider.bxSlider();



    //smooth scroll to div 
    $('.links li a').click(function () {

        $('html , body').animate({

            scrollTop: $("#" + $(this).data('value')).offset().top
        

        }, 1000);
        console.log($(this).data('value'));
    });

    //our auto slider code
    (function autoSlider() {

        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                    $(this).delay(3000).fadeOut(1000, function () {
                        $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                        autoSlider();
                    });
            }
            else{
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();
                });
            }   
        });
    }());


    //trigger mixitup
    $("#container").mixItUp();

    //nice scroll

    $("html").niceScroll({

        cursorcolor: '#1abc9c',
        cursorwidth: '6px',
        cursorborder :'none'
    });
    

});