/**
 * Created by sun on 2016/8/27.
 */
$(document).ready(function () {
    $(".deselect").on('touchend', function () {
        $(this).toggleClass("bg-gray")
    });

});