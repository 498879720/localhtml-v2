/**
 * Created by sun on 2016/10/18.
 */
$(function () {
    $('#doc-confirm-toggle').on('click', function () {
        $("#my-confirm").modal({
            relatedTarget: this,
            onConfirm: function () {
                $(".sure-info").text("该患者已赴约")
                $("#doc-confirm-toggle ,#undoc-confirm-toggle").addClass("unactive").off()
            },

            onCancel: function () {
                alert('请重新选择');
            }
        });
    });

    $('#undoc-confirm-toggle').on('click', function () {
        $("#my-confirm").modal({
            relatedTarget: this,
            onConfirm: function () {
                $(".sure-info").text("该患者未赴约");
                $("#doc-confirm-toggle ,#undoc-confirm-toggle").addClass("unactive").off();
            },
            onCancel: function () {
                alert('请重新选择');
            }
        });
    });
});

