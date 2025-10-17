$(function () {

    var wow = new WOW({
        offset: 0,
        mobile: false
    });
    wow.init();

    $('.dropdown').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });

    $('.hform').find('form').submit(function () {
        var val = $(this).find('input').val();
        if (!val) {
            alert('请输入关键字');
            return false
        }
    });

    $('.yunu-column').slide({
        titCell: 'h3',
        targetCell: 'ul',
        defaultIndex: 0,
        effect: 'slideDown',
        delayTime: 300,
        trigger: 'click'
    }).find('.sub').hover(function () {
        $(this).addClass('open').siblings().removeClass('open');
    }, function () {
        $(this).removeClass('open');
    });

    // 右侧滑动返回顶部
    var time;
    var $kefu = $('.kefu');
    var $c = $kefu.find('#kefu');
    $kefu.css({
        'marginTop': -($kefu.height() / 2)
    });
    $c.find('li').on({
        'mouseenter': function () {
            var scope = this;
            time = setTimeout(function () {
                var divDom = $(scope).children('div');
                var maxWidth = divDom.width();
                $(scope).stop().animate({
                    left: 77 - maxWidth
                }, 'normal', function () {
                    var pic = $(scope).find('.kefu-weixin-pic');
                    if (pic.length > 0) {
                        pic.show();
                    }
                });
            }, 100);
        },
        'mouseleave': function () {
            var pic = $(this).find('.kefu-weixin-pic');
            if (pic.length > 0) {
                pic.hide();
            }
            clearTimeout(time);
            $(this).stop().animate({
                left: 0
            }, 'normal', function () {
            });
        }
    });
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var eltop = $c.find('.kefu-ftop');
        if (scrollTop > 0) {
            eltop.show();
        } else {
            eltop.hide();
        }
    });
    $c.find('.kefu-ftop').click(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 0) {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
        }
    });
});
