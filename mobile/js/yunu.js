(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 40 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function () {
    $('.yunu-header,.yunu-header-inner').on('click', '.menu', function () {
        var $menuBox = $('.yunu-menu-box');
        if ($menuBox.is(':hidden')) {
            $menuBox.stop().slideDown(300);
            $(this).find('img').attr('src', 'images/t_ico02.gif');
        } else {
            $menuBox.stop().slideUp(300);
            $(this).find('img').attr('src', 'images/t_ico01.gif');
        }
    });
    $('.yunu-menu-box').on('click', 'i', function(){
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open').siblings().removeClass('open');
        }
    });

    $('.yunu-column-btn').on('click', function () {
        var $ul = $(this).closest('.yunu-column').find('ul');
        if ($ul.is(':hidden')) {
            $ul.slideDown()
        } else {
            $ul.slideUp()
        }
    });
});
