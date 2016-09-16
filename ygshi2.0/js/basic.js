// 用jQuery载入header和footer模板
$(document).ready(function() {
    // 加载header及footer模板
    $('.container').prepend(model.headerTemplate);
    $('.page-header').append(model.navTemplate);
    $('.container').append(model.footerTemplate);
    $('body').append(model.goTopButton);

    var bodyHeight, windowHeight, footerTop, safeDistance;
    $(document).scroll(function() {
        bodyHeight = $('body').outerHeight();
        windowHeight = $(window).height();
        footerTop = $('.page-footer').offset().top;

        // 这个值的意思是，页面高度 - 屏幕高度 = 可滚动的最大长度；
        // 页面高度 - 页脚离页面顶端的距离 = 页脚高度；
        // 可滚动的最大长度 - 页脚高度 = 按钮可以保持在屏幕右下角，且不与页脚重合的安全范围
        // 于是 安全范围 = 可滚动的最大长度 - 页脚高度
        //             = (页面高度 - 屏幕高度) - (页面高度 - 页脚离页面顶端的距离)
        //             = 页脚离页面顶端的距离 - 屏幕高度
        safeDistance = footerTop - windowHeight;

        // 向下滚动超过100px，且保持在安全范围内的值
        if ($(this).scrollTop() > 100 && $(this).scrollTop() < safeDistance){
            $('#go-top').css({
                            'visibility': 'visible',
                            'position': 'fixed',
                            'bottom': 16
                        });
        } else if ($(this).scrollTop() >= safeDistance) {
            // 在安全范围之外，也就是页面滚动到最下方，页脚完全出现，按钮不能再保持在屏幕右下方了
            $('#go-top').css({
                            'position': 'absolute',
                            'bottom': bodyHeight - footerTop + 16
                        });
        } else {
            // 滚动未超过100px，则不需出现该按钮
            $('#go-top').css('visibility', 'hidden');
        }
    });

    //点击go-top按钮时，平滑滚动回页面顶部
    $('#go-top').on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
            }, 200
        );
    });

    // 执行knockout绑定
    ko.applyBindings(new ViewModel());
    $('.main-images').each(function () {
        makeVideoPlayableInline(this, /* hasAudio */ false);
    });
});
