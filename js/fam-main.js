function setHeight(element) {
    $(element).css({'overflow-y': 'hidden', 'height': '13.2rem'}).height(element.scrollHeight);
}
$('.height-auto').each(function () {
    setHeight(this);
}).on('input', function () {
    setHeight(this);
});


