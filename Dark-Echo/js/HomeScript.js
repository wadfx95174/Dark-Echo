$(document).ready(function () {


    $("#ruleButton").click(function () {

        $("#ruleArea").fadeOut(1000);

        $("#hiddenRule").fadeIn(3000);

    });

    $("#aboutUsArea").click(function () {

        $("#aboutUsArea").fadeOut(1000);

        $("#hiddenAboutUs").fadeIn(3000);

    });

    $("#startButton").click(function () {

        $("body").fadeOut(2000);
        setTimeout(function () {
            window.location.href = 'GamePage.html';
        }, 2000);

    });


});
