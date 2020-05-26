$('#payBtn').popup({
    popup: $('.payQ,.popup'),
    position: 'bottom center'
});
$('.tocBtn.button').popup({
    popup: $('.toc-container.popup'),
    on:'click',
    position: 'left center'
});
/*目录初始化*/
tocbot.init({
    tocSelector: '.js-toc',
    contentSelector: '.js-toc-content',
    headingSelector: 'h1, h2, h3',
    hasInnerContainers: true,
});
/*生成二维码*/
$('.wechat').popup({
    popup : $('.wechat-qr'),
    position: 'left center'
});
var serurl = /*[[#{blog.serurl}]]*/"127.0.0.1:8080";
var url = /*[[@{/blog/{id}(id=${blog.id})}]]*/"";
var qrcode = new QRCode("qrcode", {
    text: serurl+url,
    width: 110,
    height: 110,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
