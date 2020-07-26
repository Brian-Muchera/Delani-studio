$(document).ready(function () {
    $(".design-img").click(function () {
        $(".design-text").toggle();
        $(".design-img").hide();
    });
    $(".development-img").click(function () {
        $(".development-text").toggle();
        $(".development-img").hide();
    });
    $(".product-img").click(function () {
        $(document).ready(function () {
            $(".design-img").click(function () {
                $(".design-text").toggle();
                $(".design-img").hide();
            });
            $(".development-img").click(function () {
                $(".development-text").toggle();
                $(".development-img").hide();
            });
            $(".product-img").click(function () {
                $(".product-text").toggle();
                $(".product-img").hide();
            });
            $(".design-text").click(function () {
                $(".design-img").toggle();
                $(".design-text").hide();
              });
              $(".development-text").click(function () {
                $(".development-img").toggle();
                $(".development-text").hide();
              }); 
              $(".product-text").click(function () {
                $(".product-img").toggle();
                $(".product-text").hide();
              });
            });
            
            $(document).ready(function () {
              $(".col-md-3").mouseover(function () {
                $(".col-md-3").css("border-size", "5px");
              });
            });   