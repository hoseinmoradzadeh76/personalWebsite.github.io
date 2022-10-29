$(window).on("load",function(){
    $(".first-load").delay(350).fadeOut('slow');
    $(".load").fadeOut('slow');

});

$(document).ready(function () {
    /*scroll-click*/

    $(function () {
        $("a.scroll-smooth").click(function (event) {
            event.preventDefault();

            var sectionid = $(this).attr("href");

            $("html, body").animate({
                scrollTop: $(sectionid).offset().top

            }, 0, "easeInOutExpo");
        });
    })

    /*scroll nav*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".header-meno").css({ 'background': '#0B3A42', 'box-shadow': '0 2px 12px #000' });
            $('.logo img').attr('src', './img/Logo-dark.png');
        } else {
            $(".header-meno").css({ 'background': 'none', 'box-shadow': 'none' });
            $('.logo img').attr('src', './img/Logo.png')
        }
    });


    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", amalkard);

    function amalkard() {
        hamburger.classList.toggle("open-menu");

    }





    $(".hamburger-menu").click(function () {
        $(".hamburger-menu").toggleClass("hamburger-open");

        $("nav").toggleClass("openmeno");


    })
 

    /* نمونه کارها*/

    $(window).on("load", function () {
        $("#profile-cv").isotope({});

        $(".meno-list").on("click", "button", function () {
            var filervalue = $(this).attr('data-filte');
            $("#profile-cv").isotope({ filter: filervalue });
            $(".meno-list").find(".active-list").removeClass("active-list");
            $(this).addClass("active-list");

        });

    });

    

    /* counter*/
    $(".number-counter").counterUp({
        delay: 10,
        time: 1000
    });
    /*slider*/
    var sliderindex = 1;
    displayslider(sliderindex);

    function activeslider(n) {
        displayslider((sliderindex = n));

    }


    function displayslider(n) {
        var totalslider = $(".testmint");
        var totaldots = $(".footdot");

        for (i = 0; i < totalslider.length; i++) {
            $(totalslider[i]).css('display', 'none');

        }
        $(totalslider[sliderindex - 1]).fadeIn(1000);

        for (i = 0; i < totaldots.length; i++) {
            $(totaldots[i]).removeClass('active-dots');

        }

        $(totaldots[sliderindex - 1]).addClass('active-dots');

    }
    $("#caruselbutton").on('click', 'span', function () {
        var datacrousel = $(this).attr('data-crousel');
        activeslider(datacrousel);
    })




    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".elevatorr").css({ 'transform': 'translateY(0)' });
        } else {
            $(".elevatorr").css({ 'transform': 'translateY(80px)' });
        }
    });





    $("#night").click(function () {
        $("*").toggleClass("bg-dark text-light");

    });


    /* progress-bar*/
    $("#progress-element").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    }
    );

    /*tab*/

    $(".link-a").on('click', 'a', function () {
        $(".link-a").find('.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');
    });


    /*slider*/
    $("#team-members").owlCarousel(
        {
            items: 2,
            navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>', 'fontsize:54px'],
            nav: true,
            dots: false
        }
    );

    $("#clinet-me").owlCarousel(
        {
            items: 4,
            navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>', 'fontsize:54px'],
            nav: true,
            dots: false,
            
        }
    );

});

$('#responsiveTabsDemo').responsiveTabs({
    animation: 'slide'

});


/*wow */
new WOW().init();

























