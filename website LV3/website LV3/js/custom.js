$(function () {
    'use strict';

    //triiger nice scroll
    $('html').niceScroll();


    //change hedder height

    $('.header').height($(window).height());


    //scroll to features

    $('.header .arrow i').click(function () {

        $('html,body').animate({

            scrollTop: $('.features').offset().top
        },1000);
    });


    //show more pic 
    $('.show_more').click(function () {

        $('.our_works .hidden').fadeIn(3000);
    });


    //trigger bxslider
    $('.bxslider').bxSlider();


});