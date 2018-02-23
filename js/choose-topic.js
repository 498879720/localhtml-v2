$(document).ready(function () {

    $(".topic-list li").on("touchend", topicClick);


    function topicClick() {
        var thisText = $(this).text();
        var liText = '<li>' + thisText + '<span></span>' + '</li>';

        var $o = $(this);
        if ($o.attr("class") == "active") {
            $o.removeClass("active");
            compareCreateValue($o);
        } else {
            $o.addClass("active");
            $(".all-topic").append(liText);
        }
        judgeFn();
        judgeFn1();
        $(".all-topic li span").on("touchend", createListClick);
    }


    function createListClick() {
        var move = $(this).parent().text();
        compareTopicValue(move);
        $(this).parent().remove();
        judgeFn();
        judgeFn1()
    }

    function judgeFn() {
        if ($(".all-topic li").length >= 3) {
            $(".topic-circle").hide();
        } else {
            $(".topic-circle ").show();
        }
    }

    function judgeFn1() {
        if ($(".all-topic li").length >= 1) {
            $(".all-topic p").hide();
        } else {
            $(".all-topic p ").show();
        }
    }

    function compareTopicValue(obj) {
        $('.topic-list li').each(function (i, v) {
            if ($(v).text() == obj) {
                if ($(v).attr("class") == "active") {
                    $(v).removeClass("active");
                }
            }
        })
    }

    function compareCreateValue($o) {
        console.log($o);
        if ($('.all-topic').find('li').length > 0) {
            $.each($('.all-topic').find('li'), function (i, v) {
                if ($(v).text() == $o.text()) {
                    $(v).remove();
                }
            });
        }
    }

});

