/**
 * Created by sun on 2016/10/27.
 */

$(document).ready(function () {

    $("#patient-name").text(JSON.parse(localStorage.getItem("name")));//取姓名

    $("#patient-phone").text(JSON.parse(localStorage.getItem("phone")));//取手机

    $("#patient-id").text(JSON.parse(localStorage.getItem("id")));//取身份证号码

    $("#patient-technical").text(JSON.parse(localStorage.getItem("technical")));//取科室

    $("#patient-number").text(JSON.parse(localStorage.getItem("number")));//取编号

    $("#patient-numberType").text(JSON.parse(localStorage.getItem("numberType")));//取编号类型


});

