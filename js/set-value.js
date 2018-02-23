/**
 * Created by sun on 2016/10/27.
 */


$(document).ready(function () {

    localStorage.setItem("name", JSON.stringify($("#patient-name").text()));//存姓名

    localStorage.setItem("phone", JSON.stringify($("#patient-phone").text()));//存手机号

    localStorage.setItem("id", JSON.stringify($("#patient-id").text()));//存身份证

    localStorage.setItem("technical", JSON.stringify($("#patient-technical").text()));//存科室

    localStorage.setItem("number", JSON.stringify($("#patient-number").text()));//存编号

    localStorage.setItem("numberType", JSON.stringify($("#patient-numberType").text()));//存编号类型

});

