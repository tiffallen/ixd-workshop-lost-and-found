$("footer > tab").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + $(this).attr("id") + "-section").addClass("active").siblings().removeClass("active");
});

$("#found-form").submit(function () {
    postFound();
    return false;
});
