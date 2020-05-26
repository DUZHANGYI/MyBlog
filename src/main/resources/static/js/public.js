/*返回顶部*/
$('#toTop').click(function () {
    $(window).scrollTo(0,500);
});
$('#toolbar').hide();
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        if (direction == 'down') {
            $('#toolbar').show(100);
        } else {
            $('#toolbar').hide(500);
        }
    }
})
/*评论*/
new Valine({
    el: '#comment',
    appId: 'xMT695MOksv6Eefw6U2m45il-gzGzoHsz',
    appKey: '6QzdLX9hVQrU7sL0njnekUeU',
    notify:false,
    verify:false,
    avatar:'mp',
    placeholder: '留言您宝贵的意见吧',
    visitor: true,
    avatar:'monsterid'
});