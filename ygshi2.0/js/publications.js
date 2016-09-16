$(document).ready(function() {
    // 时间轴用幻灯片的效果显示，以下是相关设置
    $('.slick-nav').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            }
        ]
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).addClass('is-hidden');
        });
    }

    var timelineBlocks = $('.year-collection'),
        offset = 0.85;

    //隐藏在初始屏幕外的blocks
    hideBlocks(timelineBlocks, offset);

    // 当页面向下滚动时，保持时间轴黏在屏幕最上方
    var top = $('.timeline').position().top;

    $(window).on('scroll', function(){
        timelineBlocks.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) {
                $(this).removeClass('is-hidden').addClass('bounce-in');
            }
            if ($(this).offset().top <= $(window).scrollTop()+$(window).height()*0.5) {
                $(this).find('.year').addClass('current-year');
            } else {
                $(this).find('.year').removeClass('current-year');
            }
        });

        // 当向下滚动时，固定时间轴到屏幕上方
        if ($(window).scrollTop() > top) {
            $('.timeline').addClass('sticky');
            $('.occupy').css({display: 'block'});
        } else {
            $('.timeline').removeClass('sticky');
            $('.occupy').css({display: 'none'});
        }
    });
});
