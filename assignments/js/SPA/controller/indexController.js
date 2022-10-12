$("#customer").css("display", "none");
$("#item").css("display", "none");
$("#order").css("display", "none");

$("#dashboardBtn").css("font-weight", "bold");

$("#dashboardBtn").click(function () {
    $("#customer").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#home").css("display", "block");

    $("#dashboardBtn").css("font-weight", "bold");
    $("#orderBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "normal");
    $("#customerBtn").css("font-weight", "normal");

});