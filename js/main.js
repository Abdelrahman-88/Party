"use strict"

// home

let boxWidth = $(".box").outerWidth();

$(".boxContainer").animate({ left: `-${boxWidth}` }, 0);

$(".icon").click(function () {
    if ($(".boxContainer").css("left") == "0px") {
        $(".boxContainer").animate({ left: `-${boxWidth}` }, 1000);
        $(".fa-bars").text(" Open");
    }
    else {
        $(".boxContainer").animate({ left: `0px` }, 1000);
        $(".fa-bars").text(" Close");
    }
})

$(".times").click(function () {
    $(".boxContainer").animate({ left: `-${boxWidth}` }, 1000);
    $(".fa-bars").text(" Open");
})

$(".box a").click(function (e) {
    let navHref = $(e.target).attr("href");
    let offset = $(navHref).offset().top;

    $("html,body").animate({ scrollTop: offset }, 1500);
})

$(document).ready(function () {
    $(".sk-cube").fadeOut(500, function () {
        $("#loading").fadeOut(500, function () {
            $("body").css("overflow-y", "auto");
            $("#loading").remove();
        });
    });

});

// details

$(".singerInfo").eq(0).slideDown(0)

$(".singer").click(function (e) {
    if ($(e.target).next(".singerInfo").css("display") == "block") {
        $(e.target).next(".singerInfo").slideUp(500);
    }
    else {
        $(".singerInfo").slideUp(500);
        $(e.target).next(".singerInfo").slideDown(500);
    }
})

// duration

let partyDate = new Date("Sep 22 2022 18:50:48").getTime();
let result;

function countDown() {
    let now = new Date().getTime();
    result = partyDate - now;

    $("#hours").html(`${Math.floor(result % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))} H`);
    $("#minutes").html(`${Math.floor(result % (1000 * 60 * 60) / (1000 * 60))} M`);
    $("#seconds").html(`${Math.floor(result % (1000 * 60) / (1000))} S`);
    $("#days").html(`${Math.floor(result / (1000 * 60 * 60 * 24))} D`);
}
countDown();
if (result <= 0) {
    $("#hours,#minutes,#seconds,#days").html("Expired");
    clearInterval(countDown);
}
else { setInterval(countDown, 1000); }

// contact

$("textarea").keyup(function () {
    console.log($("textarea").val().length)
    if ($("textarea").val().length >= 100) {
        $("#character").html("Your available characters finished").css("color", "#D62E33");
    }
    else {
        $("#character").html(`Your available characters ${100 - $("textarea").val().length}`).css("color", "#D62E33");
    }
});

$(".send").click(function () {
    if ($("textarea").val().length > 100) {
        $("#character").html("Your available characters finished").css("color", "#D62E33");
    }
    else if ($("textarea").val() == "" || $("input").val() == "") {
        $("#character").html("You should fill all inputs").css("color", "#D62E33");
    }
    else {
        $("#character").html("Success").css("color", "green");
        $("input,textarea").val("")
    }
});
