gsap.registerPlugin(ScrollTrigger);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');
let dynamicNotchCleanup = null;
let dynamicNotchTimeline = null;

initPageTransitions();

// Animation - First Page Load
function initLoaderHome() {

    var tl = gsap.timeline();

    tl.set(".loading-screen", {
        top: "0",
    });

    if ($(window).width() > 540) {
        tl.set("main .once-in", {
            y: "50vh"
        });
    } else {
        tl.set("main .once-in", {
            y: "10vh"
        });
    }

    tl.set(".loading-words", {
        opacity: 0,
        y: -50
    });

    tl.set(".loading-words .active", {
        display: "none",
    });

    tl.set(".loading-words .home-active, .loading-words .home-active-last", {
        display: "block",
        opacity: 0
    });

    tl.set(".loading-words .home-active-first", {
        opacity: 1,
    });

    if ($(window).width() > 540) {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh",
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh",
        });
    }

    tl.set("html", {
        cursor: "wait"
    });

    tl.call(function() {
        scroll.stop();
    });

    tl.to(".loading-words", {
        duration: .8,
        opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: .5
    });

    tl.to(".loading-words .home-active", {
        duration: .01,
        opacity: 1,
        stagger: .15,
        ease: "none",
        onStart: homeActive
    }, "=-.4");

    function homeActive() {
        gsap.to(".loading-words .home-active", {
            duration: .01,
            opacity: 0,
            stagger: .15,
            ease: "none",
            delay: .15
        });
    }

    tl.to(".loading-words .home-active-last", {
        duration: .01,
        opacity: 1,
        delay: .15
    });

    tl.to(".loading-screen", {
        duration: .8,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: .2
    });

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
        duration: 1,
        height: "0vh",
        ease: "Power4.easeInOut"
    }, "=-.8");

    tl.to(".loading-words", {
        duration: .3,
        opacity: 0,
        ease: "linear"
    }, "=-.8");

    tl.set(".loading-screen", {
        top: "calc(-100%)"
    });

    tl.set(".loading-screen .rounded-div-wrap.bottom", {
        height: "0vh"
    });

    tl.to("main .once-in", {
        duration: 1.5,
        y: "0vh",
        stagger: .07,
        ease: "Expo.easeOut",
        clearProps: true
    }, "=-.8");

    tl.set("html", {
        cursor: "auto"
    }, "=-1.2");

    tl.call(function() {
        scroll.start();
    });

}

// Animation - First Page Load
function initLoader() {

    var tl = gsap.timeline();

    tl.set(".loading-screen", {
        top: "0",
    });

    if ($(window).width() > 540) {
        tl.set("main .once-in", {
            y: "50vh"
        });
    } else {
        tl.set("main .once-in", {
            y: "10vh"
        });
    }

    tl.set(".loading-words", {
        opacity: 1,
        y: -50
    });

    if ($(window).width() > 540) {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh",
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh",
        });
    }

    tl.set("html", {
        cursor: "wait"
    });

    tl.to(".loading-screen", {
        duration: .8,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: .5
    });

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
        duration: 1,
        height: "0vh",
        ease: "Power4.easeInOut"
    }, "=-.8");

    tl.to(".loading-words", {
        duration: .3,
        opacity: 0,
        ease: "linear",
    }, "=-.8");

    tl.set(".loading-screen", {
        top: "calc(-100%)"
    });

    tl.set(".loading-screen .rounded-div-wrap.bottom", {
        height: "0vh"
    });

    tl.to("main .once-in", {
        duration: 1,
        y: "0vh",
        stagger: .05,
        ease: "Expo.easeOut",
        clearProps: "true"
    }, "=-.8");

    tl.set("html", {
        cursor: "auto",
    }, "=-.8");

}


// Animation - Page transition In
function pageTransitionIn() {
    var tl = gsap.timeline();

    tl.call(function() {
        scroll.stop();
    });

    tl.set(".loading-screen", {
        top: "100%"
    });

    tl.set(".loading-words", {
        opacity: 0,
        y: 0
    });

    tl.set("html", {
        cursor: "wait"
    });

    if ($(window).width() > 540) {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh",
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh",
        });
    }

    tl.to(".loading-screen", {
        duration: .5,
        top: "0%",
        ease: "Power4.easeIn"
    });

    if ($(window).width() > 540) {
        tl.to(".loading-screen .rounded-div-wrap.top", {
            duration: .4,
            height: "10vh",
            ease: "Power4.easeIn"
        }, "=-.5");
    } else {
        tl.to(".loading-screen .rounded-div-wrap.top", {
            duration: .4,
            height: "10vh",
            ease: "Power4.easeIn"
        }, "=-.5");
    }

    tl.to(".loading-words", {
        duration: .8,
        opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: .05
    });

    tl.set(".loading-screen .rounded-div-wrap.top", {
        height: "0vh"
    });

    tl.to(".loading-screen", {
        duration: .8,
        top: "-100%",
        ease: "Power3.easeInOut"
    }, "=-.2");

    tl.to(".loading-words", {
        duration: .6,
        opacity: 0,
        ease: "linear"
    }, "=-.8");

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
        duration: .85,
        height: "0",
        ease: "Power3.easeInOut"
    }, "=-.6");

    tl.set("html", {
        cursor: "auto"
    }, "=-0.6");

    if ($(window).width() > 540) {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh"
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh"
        });
    }

    tl.set(".loading-screen", {
        top: "100%"
    });

    tl.set(".loading-words", {
        opacity: 0,
    });

}


// Animation - Page transition Out
function pageTransitionOut() {
    var tl = gsap.timeline();

    if ($(window).width() > 540) {
        tl.set("main .once-in", {
            y: "50vh",
        });
    } else {
        tl.set("main .once-in", {
            y: "20vh"
        });
    }

    tl.call(function() {
        scroll.start();
    });

    tl.to("main .once-in", {
        duration: 1,
        y: "0vh",
        stagger: .05,
        ease: "Expo.easeOut",
        delay: .8,
        clearProps: "true"
    });

}

function initPageTransitions() {

    //let scroll;

    // do something before the transition starts
    barba.hooks.before(() => {
        select('html').classList.add('is-transitioning');
    });

    // do something after the transition finishes
    barba.hooks.after(() => {
        select('html').classList.remove('is-transitioning');
        // reinit locomotive scroll
        scroll.init();
        scroll.stop();
    });

    // scroll to the top of the page
    barba.hooks.enter(() => {
        scroll.destroy();
    });

    // scroll to the top of the page
    barba.hooks.afterEnter(() => {
        window.scrollTo(0, 0);
        initCookieViews();
    });

    if ($(window).width() > 540) {
        barba.hooks.leave(() => {
            $(".btn-hamburger, .btn-menu").removeClass('active');
            $("main").removeClass('nav-active');
        });
    }


    barba.init({
        sync: true,
        debug: false,
        timeout: 7000,
        transitions: [{
                name: 'default',
                once(data) {
                    // do something once on the initial page load
                    initSmoothScroll(data.next.container);
                    initScript();
                    initCookieViews();
                    initLoader();
                },
                async leave(data) {
                    // animate loading screen in
                    pageTransitionIn(data.current);
                    await delay(495);
                    data.current.container.remove();
                },
                async enter(data) {
                    // animate loading screen away
                    pageTransitionOut(data.next);
                    initNextWord(data);
                },
                async beforeEnter(data) {
                    ScrollTrigger.getAll().forEach(t => t.kill());
                    scroll.destroy();
                    initSmoothScroll(data.next.container);
                    initScript();
                },
            },
            {
                name: 'to-home',
                from: {},
                to: {
                    namespace: ['home']
                },
                once(data) {
                    // do something once on the initial page load
                    initSmoothScroll(data.next.container);
                    initScript();
                    initCookieViews();
                    initLoaderHome();
                },
            }
        ]
    });

    function initSmoothScroll(container) {

        scroll = new LocomotiveScroll({
            el: container.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        window.onresize = scroll.update();

        scroll.on("scroll", () => ScrollTrigger.update());

        ScrollTrigger.scrollerProxy('[data-scroll-container]', {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.defaults({
            scroller: document.querySelector('[data-scroll-container]'),
        });

        /**
         * Remove Old Locomotive Scrollbar
         */

        const scrollbar = selectAll('.c-scrollbar');

        if (scrollbar.length > 1) {
            scrollbar[0].remove();
        }

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener('refresh', () => scroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }
}

function initNextWord(data) {
    // update Text Loading https://github.com/barbajs/barba/issues/507
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, 'text/html');
    let nextProjects = dom.querySelector('.loading-words');
    document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


/**
 * Fire all scripts on page load
 */
function initScript() {
    select('body').classList.remove('is-loading');
    initWindowInnerheight();
    initCheckTouchDevice();
    initHamburgerNav();
    initDynamicNotch();
    initMagneticButtons();
    initStickyCursorWithDelay();
    initVisualFilter();
    initScrolltriggerNav();
    initScrollLetters();
    initTricksWords();
    initContactForm();
    initTimeZone();
    initLazyLoad();
    initPlayVideoInview();
    initScrolltriggerAnimations();
}

/**
 * Window Inner Height Check
 */
function initWindowInnerheight() {

    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    $(document).ready(function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        $('.btn-hamburger').click(function() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    });

}

/**
 * Check touch device
 */
function initCheckTouchDevice() {

    function isTouchScreendevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    };

    if (isTouchScreendevice()) {
        $('main').addClass('touch');
        $('main').removeClass('no-touch');
    } else {
        $('main').removeClass('touch');
        $('main').addClass('no-touch');
    }
    $(window).resize(function() {
        if (isTouchScreendevice()) {
            $('main').addClass('touch');
            $('main').removeClass('no-touch');
        } else {
            $('main').removeClass('touch');
            $('main').addClass('no-touch');
        }
    });

}

/**
 * Hamburger Nav Open/Close
 */
function initHamburgerNav() {

    // Open/close navigation when clicked .btn-hamburger

    $(document).ready(function() {

        $(".btn-hamburger, .btn-menu").hover(
            function () {
                $(".second-circle").addClass('hide-circles');
            },
            function () {
                $(".second-circle").removeClass('hide-circles');
            }
        );

        $(".btn-hamburger, .btn-menu").click(function() {
            if ($(".btn-hamburger, .btn-menu").hasClass('active')) {
                $(".btn-hamburger, .btn-menu").removeClass('active');
                $("main").removeClass('nav-active');
                scroll.start();
            } else {
                $(".btn-hamburger, .btn-menu").addClass('active');
                $("main").addClass('nav-active');
                scroll.stop();
            }
        });
        $('.fixed-nav-back').click(function() {
            $(".btn-hamburger, .btn-menu").removeClass('active');
            $("main").removeClass('nav-active');
            scroll.start();
        });
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            if ($('main').hasClass('nav-active')) {
                $(".btn-hamburger, .btn-menu").removeClass('active');
                $("main").removeClass('nav-active');
                scroll.start();
            }
        }
    });

}

/**
 * Magnetic Buttons
 */
function initMagneticButtons() {

    // Magnetic Buttons
    // Found via: https://codepen.io/tdesero/pen/RmoxQg
    var magnets = document.querySelectorAll('.magnetic');
    var strength = 100;

    // START : If screen is bigger as 540 px do magnetic
    if (window.innerWidth > 540) {
        // Mouse Reset
        magnets.forEach((magnet) => {
            magnet.addEventListener('mousemove', moveMagnet);
            $(this.parentNode).removeClass('not-active');
            magnet.addEventListener('mouseleave', function(event) {
                gsap.to(event.currentTarget, 1.5, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut
                });
                gsap.to($(this).find(".btn-text"), 1.5, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut
                });
            });
        });

        // Mouse move
        function moveMagnet(event) {
            var magnetButton = event.currentTarget;
            var bounding = magnetButton.getBoundingClientRect();
            var magnetsStrength = magnetButton.getAttribute("data-strength");
            var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");

            gsap.to(magnetButton, 1.5, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
            gsap.to($(this).find(".btn-text"), 1.5, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
                rotate: "0.001deg",
                ease: Power4.easeOut
            });
        }

        $(document).ready(function() {

            $(".magnetic, .work-items").hover(
                function () {
                    $(".second-circle").addClass('hide-circles');
                },
                function () {
                    $(".second-circle").removeClass('hide-circles');
                }
            );
        });

    }; // END : If screen is bigger as 540 px do magnetic

    // Mouse Enter
    $('.btn-click.magnetic').on('mouseenter', function() {
        if ($(this).find(".btn-fill").length) {
            gsap.to($(this).find(".btn-fill"), .6, {
                startAt: {
                    y: "76%"
                },
                y: "0%",
                ease: Power2.easeInOut
            });
        }
        if ($(this).find(".btn-text-inner.change").length) {
            gsap.to($(this).find(".btn-text-inner.change"), .3, {
                startAt: {
                    color: "#1C1D20"
                },
                color: "#FFFFFF",
                ease: Power3.easeIn,
            });
        }
        $(this.parentNode).removeClass('not-active');
    });

    // Mouse Leave
    $('.btn-click.magnetic').on('mouseleave', function() {
        if ($(this).find(".btn-fill").length) {
            gsap.to($(this).find(".btn-fill"), .6, {
                y: "-76%",
                ease: Power2.easeInOut
            });
        }
        if ($(this).find(".btn-text-inner.change").length) {
            gsap.to($(this).find(".btn-text-inner.change"), .3, {
                color: "#1C1D20",
                ease: Power3.easeOut,
                delay: .3
            });
        }
        $(this.parentNode).removeClass('not-active');
    });
}


/**
 * Sticky Cursor with Delay
 */

// Second Mouse Cursor [Ippoliti Mattia]

var $circle = $('.second-circle')

function moveCircle(e) {
    TweenLite.to($circle, 0.4, {
        x: e.clientX,
        y: e.clientY
    });
}

function handleMouseMove(e) {
    // Check if the screen width is greater than 767 pixels (adjust as needed)
    if (window.innerWidth > 767) {
        moveCircle(e);
    }
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 0
    });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 1
    });
}

$(window).on('mousemove', handleMouseMove);
$("a").hover(hoverFunc, unhoverFunc);

// Sticky Cursor with delay
// https://greensock.com/forums/topic/21161-animated-mouse-cursor/

function initStickyCursorWithDelay() {

    var cursorImage = $(".mouse-pos-list-image")
    var cursorBtn = $(".mouse-pos-list-btn");
    var cursorSpan = $(".mouse-pos-list-span");

    var posXImage = 0
    var posYImage = 0
    var posXBtn = 0
    var posYBtn = 0
    var posXSpan = 0
    var posYSpan = 0
    var mouseX = 0
    var mouseY = 0

    if (document.querySelector(".mouse-pos-list-image, .mouse-pos-list-btn, .mouse-post-list-span")) {
        gsap.to({}, 0.0083333333, {
            repeat: -1,
            onRepeat: function() {

                if (document.querySelector(".mouse-pos-list-image")) {
                    posXImage += (mouseX - posXImage) / 12;
                    posYImage += (mouseY - posYImage) / 12;
                    gsap.set(cursorImage, {
                        css: {
                            left: posXImage,
                            top: posYImage
                        }
                    });
                }
                if (document.querySelector(".mouse-pos-list-btn")) {
                    posXBtn += (mouseX - posXBtn) / 7;
                    posYBtn += (mouseY - posYBtn) / 7;
                    gsap.set(cursorBtn, {
                        css: {
                            left: posXBtn,
                            top: posYBtn
                        }
                    });
                }
                if (document.querySelector(".mouse-pos-list-span")) {
                    posXSpan += (mouseX - posXSpan) / 6;
                    posYSpan += (mouseY - posYSpan) / 6;
                    gsap.set(cursorSpan, {
                        css: {
                            left: posXSpan,
                            top: posYSpan
                        }
                    });
                }
            }
        });
    }

    $(document).ready(function() {

        $(".mouse-pos-list-image, .mouse-pos-list-btn, .mouse-post-list-span").hover(
            function () {
                $(".second-circle").addClass('hide-circles');
            },
            function () {
                $(".second-circle").removeClass('hide-circles');
            }
        );
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animated Section Assortiment Single Floating Image
    // Source: http://jsfiddle.net/639Jj/1/ 

    $('.mouse-pos-list-image-wrap a').on('mouseenter', function() {
        $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
    });
    $('.mouse-pos-list-image-wrap a').on('mouseleave', function() {
        $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
    });
    $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseenter', function() {
        $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
    });
    $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseleave', function() {
        $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
    });
    $('main').on('mousedown', function() {
        $(".mouse-pos-list-btn, .mouse-pos-list-span").addClass('pressed');
    });
    $('main').on('mouseup', function() {
        $(".mouse-pos-list-btn, .mouse-pos-list-span").removeClass('pressed');
    });

    $(document).ready(function() {

        $(".mouse-pos-list-image-wrap, .single-tile-wrap").hover(
            function () {
                $(".second-circle").addClass('hide-circles');
            },
            function () {
                $(".second-circle").removeClass('hide-circles');
            }
        );
    });

    $('.mouse-pos-list-image-wrap li.visible').on('mouseenter', function() {

        var $elements = $(".mouse-pos-list-image-wrap li.visible");
        var index = $elements.index($(this));
        var count = $(".mouse-pos-list-image li.visible").length;
        // var index =  $(this).index();
        if ($(".float-image-wrap")) {
            gsap.to($(".float-image-wrap"), {
                y: (index * 100) / (count * -1) + "%",
                duration: .6,
                ease: Power2.easeInOut
            });
        }
        $(".mouse-pos-list-image.active .mouse-pos-list-image-bounce").addClass("active").delay(400).queue(function(next) {
            $(this).removeClass("active");
            next();
        });

    });

    $('.archive-work-grid li').on('mouseenter', function() {
        $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next) {
            $(this).removeClass("hover");
            next();
        });
    });

}

/**
 * Visual Filter
 */
function initVisualFilter() {

    // Visual Filter
    $(document).ready(function() {

        $('.toggle-row .btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.work-tiles li, .work-items li').addClass('tile-fade-out');
                scroll.stop();
                setTimeout(function() {
                    $('.work-tiles li, .work-items li').removeClass('tile-fade-out');
                    $('.work-tiles li, .work-items li').addClass('tile-fade-in');
                    scroll.scrollTo('top', {
                        'offset': 0,
                        'duration': 700,
                        'easing': [0.7, 0.00, 0.35, 1.00],
                        'disableLerp': true
                    });
                }, 300);
                setTimeout(function() {
                    $('.work-tiles li, .work-items li').removeClass('tile-fade-in');
                    scroll.update();
                    ScrollTrigger.refresh();
                    scroll.start();
                }, 700);
            }
        });
        $('.all-btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.toggle-row .btn-normal').removeClass('active');
                $('.toggle-row .btn-normal').addClass('not-active');
                $(this).addClass('active');
                $(this).removeClass('not-active');
                // Cookies.set("filter", "all", { expires: 1 });
                setTimeout(function() {
                    $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').addClass('visible');
                }, 300);
            }
        });
        $('.first-work-category-btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.toggle-row .btn-normal').removeClass('active');
                $('.toggle-row .btn-normal').addClass('not-active');
                $(this).addClass('active');
                $(this).removeClass('not-active');
                // Cookies.set("filter", "data", { expires: 1 });
                setTimeout(function() {
                    $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
                    $('.mouse-pos-list-image li.first-work-category, .mouse-pos-list-image-wrap li.first-work-category, .work-tiles li.first-work-category').addClass('visible');
                }, 300);
            }
        });
        $('.second-work-category-btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.toggle-row .btn-normal').removeClass('active');
                $('.toggle-row .btn-normal').addClass('not-active');
                $(this).addClass('active');
                $(this).removeClass('not-active');
                // Cookies.set("filter", "development", { expires: 1 });
                setTimeout(function() {
                    $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
                    $('.mouse-pos-list-image li.second-work-category, .mouse-pos-list-image-wrap li.second-work-category, .work-tiles li.second-work-category').addClass('visible');
                }, 300);
            }
        });

        $('.grid-row .btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.grid-fade').addClass('grid-fade-out');
                scroll.stop();
                scroll.scrollTo('top', {
                    'offset': 0,
                    'duration': 700,
                    'easing': [0.7, 0.00, 0.35, 1.00],
                    'disableLerp': true
                });
                setTimeout(function() {
                    $('.grid-fade').removeClass('grid-fade-out');
                    $('.grid-fade').addClass('grid-fade-in');
                }, 300);
                setTimeout(function() {
                    $('.grid-fade').removeClass('grid-fade-in');
                    scroll.update();
                    ScrollTrigger.refresh();
                    scroll.start();
                }, 700);
            }
        });
        $('.grid-row .rows-btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.grid-row .btn-normal').removeClass('active');
                $('.grid-row .btn-normal').addClass('not-active');
                Cookies.set("view", "rows", {
                    expires: 14
                });
                $(this).addClass('active');
                $(this).removeClass('not-active');
                setTimeout(function() {
                    $('.grid-columns-part').removeClass('visible');
                    $('.grid-rows-part').addClass('visible');
                }, 300);
            }
        });
        $('.grid-row .columns-btn').click(function() {
            if ($(this).hasClass('active')) {} else {
                $('.grid-row .btn-normal').removeClass('active');
                $('.grid-row .btn-normal').addClass('not-active');
                Cookies.set("view", "columns", {
                    expires: 14
                });
                $(this).addClass('active');
                $(this).removeClass('not-active');
                setTimeout(function() {
                    $('.grid-rows-part').removeClass('visible');
                    $('.grid-columns-part').addClass('visible');
                }, 300);
            }
        });

    });

}


/**
 * Cookie Views
 */
function initCookieViews() {
    // Set cookie for columns/rows view
    // https://www.youtube.com/watch?v=rfwiyBoVwdQ&ab_channel=TimothyRicks
    if (Cookies.get("view") == "columns") {
        $('.grid-row .rows-btn').removeClass('active');
        $('.grid-row .columns-btn').addClass('active');
        $('#work .grid-rows-part').removeClass('visible');
        $('#work .grid-columns-part').addClass('visible');
        scroll.update();
        ScrollTrigger.refresh();
    }
}


/**
 * Scrolltrigger Scroll Check
 */
function initScrolltriggerNav() {

    ScrollTrigger.create({
        start: 'top -30%',
        onUpdate: self => {
            $("main").addClass('scrolled');
        },
        onLeaveBack: () => {
            $("main").removeClass('scrolled');
        },
    });

}


/**
 * Scrolltrigger Scroll Letters Home
 */
function initScrollLetters() {
    // Scrolling Letters Both Direction
    // https://codepen.io/GreenSock/pen/rNjvgjo
    // Fixed example with resizing
    // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll(".big-name .name-wrap", {
            duration: 18
        }),
        roll2 = roll(".rollingText02", {
            duration: 10
        }, true),
        scroll = ScrollTrigger.create({
            trigger: document.querySelector('[data-scroll-container]'),
            onUpdate(self) {
                if (self.direction !== direction) {
                    direction *= -1;
                    gsap.to([roll1, roll2], {
                        timeScale: direction,
                        overwrite: true
                    });
                }
            }
        });

    // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
    function roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
                repeat: -1,
                onReverseComplete() {
                    this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
                }
            }),
            elements = gsap.utils.toArray(targets),
            clones = elements.map(el => {
                let clone = el.cloneNode(true);
                el.parentNode.appendChild(clone);
                return clone;
            }),
            positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {
                position: "absolute",
                overwrite: false,
                top: el.offsetTop,
                left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
            }));
        positionClones();
        elements.forEach((el, i) => tl.to([el, clones[i]], {
            xPercent: reverse ? 100 : -100,
            ...vars
        }, 0));
        window.addEventListener("resize", () => {
            let time = tl.totalTime(); // record the current time
            tl.totalTime(0); // rewind and clear out the timeline
            positionClones(); // reposition
            tl.totalTime(time); // jump back to the proper time
        });
        return tl;
    }

}



/**
 * Scrolltrigger Nav
 */
function initTricksWords() {

    // Copyright start
    // © Code by T.RICKS, https://www.tricksdesign.com/
    // You have the license to use this code in your projects but not redistribute it to others
    // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

    // Find all text with .tricks class and break each letter into a span
    var spanWord = document.getElementsByClassName("span-lines");
    for (var i = 0; i < spanWord.length; i++) {

        var wordWrap = spanWord.item(i);
        wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');

    }

}

/**
 * Contact Form
 */
function initContactForm() {

    $('.field').on('input', function() {
        $(this).parent().toggleClass('not-empty', this.value.trim().length > 0);
    });

    $(function() {
        $('.field').focusout(function() {
            var text_val = $(this).val();
            $(this).parent().toggleClass('not-empty', text_val !== "");
        }).focusout();
    });

}

/**
 * Dynamic Notch
 */
function initDynamicNotch() {

    if (dynamicNotchCleanup) {
        dynamicNotchCleanup();
        dynamicNotchCleanup = null;
    }

    const oldNotch = document.querySelector('.dynamic-notch');
    if (oldNotch) {
        oldNotch.remove();
    }

    const notch = document.createElement('div');
    notch.className = 'dynamic-notch';
    notch.innerHTML = `
        <div class="dynamic-notch-frame">
            <div class="dynamic-notch-border dynamic-notch-border-left" aria-hidden="true">
                <div class="dynamic-notch-border-shadow"></div>
            </div>
            <div class="dynamic-notch-border dynamic-notch-border-right" aria-hidden="true">
                <div class="dynamic-notch-border-shadow"></div>
            </div>
            <div class="dynamic-notch-shell" tabindex="0" aria-expanded="false" aria-label="Open profile quick links">
                <div class="dynamic-notch-surface">
                    <svg class="dynamic-notch-trace dynamic-notch-trace-closed" viewBox="0 0 215 33" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                        <path class="dynamic-notch-trace-base" d="M9.85197 0C12.6134 0 14.852 2.23858 14.852 5V22.4579C14.852 27.9808 19.3291 32.4579 24.852 32.4579H190.502C196.025 32.4579 200.502 27.9808 200.502 22.4579V5C200.502 2.23858 202.74 0 205.502 0H215L213.502 0H0H9.85197Z"></path>
                        <path class="dynamic-notch-trace-sweep-halo" pathLength="100" d="M9.85197 0C12.6134 0 14.852 2.23858 14.852 5V22.4579C14.852 27.9808 19.3291 32.4579 24.852 32.4579H190.502C196.025 32.4579 200.502 27.9808 200.502 22.4579V5C200.502 2.23858 202.74 0 205.502 0"></path>
                        <path class="dynamic-notch-trace-sweep-core" pathLength="100" d="M9.85197 0C12.6134 0 14.852 2.23858 14.852 5V22.4579C14.852 27.9808 19.3291 32.4579 24.852 32.4579H190.502C196.025 32.4579 200.502 27.9808 200.502 22.4579V5C200.502 2.23858 202.74 0 205.502 0"></path>
                    </svg>
                    <svg class="dynamic-notch-trace dynamic-notch-trace-open" viewBox="0 0 608 143" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                        <path class="dynamic-notch-trace-base" d="M22 0C33.0457 0 42 8.9543 42 20V102.5C42 124.591 59.9086 142.5 82 142.5H527C549.091 142.5 567 124.591 567 102.5V20C567 8.9543 575.954 0 587 0H608H0H22Z"></path>
                        <path class="dynamic-notch-trace-sweep-halo" pathLength="100" d="M22 0C33.0457 0 42 8.9543 42 20V102.5C42 124.591 59.9086 142.5 82 142.5H527C549.091 142.5 567 124.591 567 102.5V20C567 8.9543 575.954 0 587 0"></path>
                        <path class="dynamic-notch-trace-sweep-core" pathLength="100" d="M22 0C33.0457 0 42 8.9543 42 20V102.5C42 124.591 59.9086 142.5 82 142.5H527C549.091 142.5 567 124.591 567 102.5V20C567 8.9543 575.954 0 587 0"></path>
                    </svg>
                    <div class="dynamic-notch-compact">
                        <a href="/about/" class="dynamic-notch-avatar-link" aria-label="Go to about page">
                            <img class="dynamic-notch-avatar" src="/assets/img/profile_circular.png" alt="Mattia Ippoliti profile picture" />
                        </a>
                        <div class="dynamic-notch-text">
                            <span class="dynamic-notch-name">Mattia Ippoliti</span>
                            <span class="dynamic-notch-role">Software Engineer</span>
                        </div>
                        <span class="dynamic-notch-time">--:--</span>
                        <div class="btn btn-link btn-link-external dynamic-notch-mobile-available">
                            <a href="/contacts/" class="btn-click magnetic" data-strength="9" data-strength-text="5" aria-label="Go to contact page">
                                <span class="btn-text">
                                    <span class="dynamic-notch-sonar" aria-hidden="true"></span>
                                    <span class="btn-text-inner">Contact!</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="dynamic-notch-expanded" aria-hidden="true">
                        <div class="dynamic-notch-links">
                            <div class="btn btn-link btn-link-external dynamic-notch-link-btn">
                                <a href="https://www.linkedin.com/in/mattiaippoliti/" target="_blank" rel="noopener noreferrer" class="btn-click magnetic" data-strength="9" data-strength-text="5" aria-label="LinkedIn">
                                    <span class="btn-text">
                                        <span class="dynamic-notch-icon dynamic-notch-icon-linkedin" aria-hidden="true">
                                            <svg viewBox="0 0 24 24" focusable="false">
                                                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.31 10.06H5.93V17.5H8.31V10.06ZM16.64 9.89C15.34 9.89 14.53 10.6 14.18 11.1V10.06H11.89V17.5H14.26V13.52C14.26 12.48 14.45 11.49 15.74 11.49C17 11.49 17.02 12.67 17.02 13.58V17.5H19.39V13.11C19.39 10.95 18.92 9.89 16.64 9.89ZM7.12 6.5A1.38 1.38 0 1 0 7.12 9.26A1.38 1.38 0 0 0 7.12 6.5Z"></path>
                                            </svg>
                                        </span>
                                        <span class="btn-text-inner">LinkedIn</span>
                                    </span>
                                </a>
                            </div>
                            <div class="btn btn-link btn-link-external dynamic-notch-link-btn">
                                <a href="https://github.com/MattiaIppoliti" target="_blank" rel="noopener noreferrer" class="btn-click magnetic" data-strength="9" data-strength-text="5" aria-label="GitHub">
                                    <span class="btn-text">
                                        <span class="dynamic-notch-icon dynamic-notch-icon-github" aria-hidden="true">
                                            <svg viewBox="0 0 24 24" focusable="false">
                                                <path d="M12 2A10 10 0 0 0 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21V19.17C6.73 19.78 6.14 17.98 6.14 17.98C5.68 16.8 5.03 16.49 5.03 16.49C4.12 15.87 5.1 15.89 5.1 15.89C6.11 15.96 6.65 16.93 6.65 16.93C7.55 18.47 9.01 18.03 9.6 17.78C9.69 17.13 9.95 16.69 10.24 16.44C8.01 16.19 5.67 15.32 5.67 11.43C5.67 10.32 6.07 9.42 6.72 8.72C6.61 8.47 6.27 7.45 6.82 6.06C6.82 6.06 7.66 5.79 9.5 7.03C10.3 6.81 11.15 6.7 12 6.7C12.85 6.7 13.7 6.81 14.5 7.03C16.34 5.79 17.18 6.06 17.18 6.06C17.73 7.45 17.39 8.47 17.28 8.72C17.93 9.42 18.33 10.32 18.33 11.43C18.33 15.33 15.98 16.19 13.75 16.44C14.11 16.75 14.43 17.37 14.43 18.31V21C14.43 21.27 14.61 21.59 15.12 21.49A10 10 0 0 0 12 2Z"></path>
                                            </svg>
                                        </span>
                                        <span class="btn-text-inner">GitHub</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="btn btn-link btn-link-external dynamic-notch-available">
                            <a href="/contacts/" class="btn-click magnetic" data-strength="9" data-strength-text="5" aria-label="Go to contact page">
                                <span class="btn-text">
                                    <span class="dynamic-notch-sonar" aria-hidden="true"></span>
                                    <span class="btn-text-inner">Available</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    body.appendChild(notch);

    const shell = notch.querySelector('.dynamic-notch-shell');
    const expanded = notch.querySelector('.dynamic-notch-expanded');
    const timeNode = notch.querySelector('.dynamic-notch-time');
    const linkNodes = Array.from(notch.querySelectorAll('.dynamic-notch-expanded a'));

    if (!shell || !expanded || !timeNode) {
        notch.remove();
        return;
    }

    const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const getNotchSizes = () => {
        const isSmallScreen = window.innerWidth <= 540;
        const desktopClosedWidth = 397.44;
        const desktopOpenWidth = 466.82;
        const desktopClosedHeight = 60;
        const desktopOpenHeight = 124;
        const mobileClosedWidth = 215;
        const mobileClosedHeight = 33;
        const mobileOpenWidth = 382;
        const mobileOpenHeight = 120;
        const mobileMaxWidth = Math.max(240, window.innerWidth - 16);

        const resolvedMobileClosedWidth = Math.min(mobileClosedWidth, mobileMaxWidth);
        const resolvedMobileOpenWidth = Math.min(mobileOpenWidth, mobileMaxWidth);
        const mobileClosedScale = resolvedMobileClosedWidth / mobileClosedWidth;
        const mobileOpenScale = resolvedMobileOpenWidth / mobileOpenWidth;

        return {
            closedWidth: isSmallScreen
                ? resolvedMobileClosedWidth
                : Math.min(desktopClosedWidth, window.innerWidth - 24),
            openWidth: isSmallScreen
                ? resolvedMobileOpenWidth
                : Math.min(desktopOpenWidth, window.innerWidth - 24),
            closedHeight: isSmallScreen ? Math.round(mobileClosedHeight * mobileClosedScale) : desktopClosedHeight,
            openHeight: isSmallScreen ? Math.round(mobileOpenHeight * mobileOpenScale) : desktopOpenHeight
        };
    };

    const isTouchPointer = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const isMobileNotchView = () => window.innerWidth <= 540;

    const setLinksFocusable = (isExpanded) => {
        shell.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        expanded.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
        linkNodes.forEach((link) => {
            link.tabIndex = isExpanded ? 0 : -1;
        });
    };

    const syncTime = () => {
        timeNode.textContent = formatter.format(new Date());
    };

    syncTime();
    const timeInterval = window.setInterval(syncTime, 1000);

    let isExpanded = false;

    const syncNotchRowSizing = (sizes) => {
        shell.style.setProperty('--dynamic-notch-compact-height', `${sizes.closedHeight}px`);
        shell.style.setProperty('--dynamic-notch-expanded-row-height', `${sizes.openHeight - sizes.closedHeight}px`);
    };

    const animateNotchState = (shouldExpand) => {
        const targetExpandedState = isMobileNotchView() ? false : shouldExpand;

        if (targetExpandedState === false) {
            notch.classList.remove('is-touch-expanded');
        }

        if (isExpanded === targetExpandedState && !dynamicNotchTimeline?.isActive()) {
            return;
        }

        isExpanded = targetExpandedState;
        notch.classList.toggle('is-expanded', targetExpandedState);
        setLinksFocusable(targetExpandedState);

        if (dynamicNotchTimeline) {
            dynamicNotchTimeline.kill();
        }

        const sizes = getNotchSizes();
        syncNotchRowSizing(sizes);

        if (targetExpandedState) {
            dynamicNotchTimeline = gsap.timeline();
            dynamicNotchTimeline
                .to(shell, {
                    width: sizes.openWidth,
                    height: sizes.openHeight,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.72)'
                }, 0)
                .to(expanded, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.45,
                    ease: 'power3.out'
                }, 0.22);
        } else {
            dynamicNotchTimeline = gsap.timeline();
            dynamicNotchTimeline
                .to(expanded, {
                    autoAlpha: 0,
                    y: 12,
                    duration: 0.22,
                    ease: 'power2.in'
                }, 0)
                .to(shell, {
                    width: sizes.closedWidth,
                    height: sizes.closedHeight,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.72)'
                }, 0.04);
        }
    };

    const resizeNotch = () => {
        const sizes = getNotchSizes();

        if (isMobileNotchView()) {
            if (dynamicNotchTimeline) {
                dynamicNotchTimeline.kill();
                dynamicNotchTimeline = null;
            }
            isExpanded = false;
            notch.classList.remove('is-expanded', 'is-touch-expanded');
            setLinksFocusable(false);
            gsap.set(expanded, {
                autoAlpha: 0,
                y: 12
            });
            shell.tabIndex = -1;
        } else {
            shell.tabIndex = 0;
        }

        syncNotchRowSizing(sizes);
        gsap.set(shell, {
            width: isExpanded ? sizes.openWidth : sizes.closedWidth,
            height: isExpanded ? sizes.openHeight : sizes.closedHeight
        });
    };

    const syncMenuLayerState = () => {
        const currentMain = document.querySelector('main');
        notch.classList.toggle('is-nav-obscured', Boolean(currentMain && currentMain.classList.contains('nav-active')));
    };

    const setSecondCursorHiddenForNotch = (isHidden) => {
        const secondCursor = document.querySelector('.second-circle');
        if (!secondCursor || window.innerWidth <= 767) {
            return;
        }
        secondCursor.classList.toggle('hide-circles', Boolean(isHidden));
    };

    const handleMouseEnter = () => {
        if (!isTouchPointer() && !isMobileNotchView()) {
            setSecondCursorHiddenForNotch(true);
            animateNotchState(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isTouchPointer() && !notch.contains(document.activeElement)) {
            animateNotchState(false);
        }
        setSecondCursorHiddenForNotch(false);
    };

    const handleFocusIn = () => {
        if (isMobileNotchView()) {
            return;
        }
        animateNotchState(true);
    };

    const handleFocusOut = (event) => {
        const nextFocusedNode = event.relatedTarget;
        if (nextFocusedNode && notch.contains(nextFocusedNode)) {
            return;
        }
        if (!notch.classList.contains('is-touch-expanded')) {
            animateNotchState(false);
        }
    };

    const handleTouchToggle = (event) => {
        if (isMobileNotchView()) {
            if (!event.target.closest('a')) {
                event.preventDefault();
                event.stopPropagation();
            }
            return;
        }

        if (!isTouchPointer()) {
            return;
        }
        if (event.target.closest('a')) {
            if (notch.classList.contains('is-expanded')) {
                notch.classList.remove('is-touch-expanded');
                animateNotchState(false);
            }
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const shouldExpand = !notch.classList.contains('is-expanded');
        notch.classList.toggle('is-touch-expanded', shouldExpand);
        animateNotchState(shouldExpand);
    };

    const handleOutsidePointer = (event) => {
        if (!notch.classList.contains('is-touch-expanded')) {
            return;
        }
        if (notch.contains(event.target)) {
            return;
        }
        notch.classList.remove('is-touch-expanded');
        animateNotchState(false);
    };

    const handleKeyboardToggle = (event) => {
        if (isMobileNotchView()) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
            }
            if (event.key === 'Escape') {
                animateNotchState(false);
            }
            return;
        }

        if ((event.key === 'Enter' || event.key === ' ') && event.target !== shell) {
            return;
        }

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const shouldExpand = !notch.classList.contains('is-expanded');
            notch.classList.toggle('is-touch-expanded', shouldExpand);
            animateNotchState(shouldExpand);
        }

        if (event.key === 'Escape') {
            notch.classList.remove('is-touch-expanded');
            animateNotchState(false);
            shell.blur();
        }
    };

    const mainNode = document.querySelector('main');
    const mainObserver = mainNode
        ? new MutationObserver(syncMenuLayerState)
        : null;

    if (mainObserver && mainNode) {
        mainObserver.observe(mainNode, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    const collapseFromLinkInteraction = () => {
        notch.classList.remove('is-touch-expanded');
        animateNotchState(false);
        if (document.activeElement && notch.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        shell.blur();
    };

    const handleLinkPointerDown = () => {
        collapseFromLinkInteraction();
    };

    const handleLinkClick = () => {
        collapseFromLinkInteraction();
    };

    gsap.set(expanded, {
        autoAlpha: 0,
        y: 12
    });
    setLinksFocusable(false);
    resizeNotch();
    syncMenuLayerState();

    notch.addEventListener('mouseenter', handleMouseEnter);
    notch.addEventListener('mouseleave', handleMouseLeave);
    notch.addEventListener('focusin', handleFocusIn);
    notch.addEventListener('focusout', handleFocusOut);
    shell.addEventListener('click', handleTouchToggle);
    shell.addEventListener('keydown', handleKeyboardToggle);
    linkNodes.forEach((link) => {
        link.addEventListener('pointerdown', handleLinkPointerDown);
        link.addEventListener('click', handleLinkClick);
    });
    document.addEventListener('pointerdown', handleOutsidePointer);
    window.addEventListener('resize', resizeNotch);

    dynamicNotchCleanup = () => {
        window.clearInterval(timeInterval);
        window.removeEventListener('resize', resizeNotch);
        document.removeEventListener('pointerdown', handleOutsidePointer);
        linkNodes.forEach((link) => {
            link.removeEventListener('pointerdown', handleLinkPointerDown);
            link.removeEventListener('click', handleLinkClick);
        });
        shell.removeEventListener('keydown', handleKeyboardToggle);
        shell.removeEventListener('click', handleTouchToggle);
        notch.removeEventListener('focusout', handleFocusOut);
        notch.removeEventListener('focusin', handleFocusIn);
        notch.removeEventListener('mouseleave', handleMouseLeave);
        notch.removeEventListener('mouseenter', handleMouseEnter);
        if (mainObserver) {
            mainObserver.disconnect();
        }
        if (dynamicNotchTimeline) {
            dynamicNotchTimeline.kill();
            dynamicNotchTimeline = null;
        }
        setSecondCursorHiddenForNotch(false);
        notch.remove();
    };
}

/**
 * Footer Time Zone
 */
function initTimeZone() {

    // Time zone
    // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
    // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
    // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date

    const timeSpan = document.querySelector("#timeSpan");
    const copyrightYear = document.querySelector(".credits p");

    const optionsTime = {
        timeZone: 'Europe/Amsterdam',
        timeZoneName: 'short',
        // year: 'numeric',
        // month: 'numeric',
        // day: 'numeric',
        hour: '2-digit',
        hour12: 'true',
        minute: 'numeric',
        // second: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat([], optionsTime);
    
    // Aggiorna l'anno del copyright una sola volta all'avvio
    updateCopyrightYear();
    
    // Aggiorna l'orologio ogni secondo
    updateTime();
    setInterval(updateTime, 1000);

    function updateTime() {
        const dateTime = new Date();
        const formattedDateTime = formatter.format(dateTime);
        timeSpan.textContent = formattedDateTime;
    }
    
    function updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = `${currentYear} © Edition`;
    }
}

/**
 * Lazy Load
 */
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
    });

}

/**
 * Play Video Inview
 */
function initPlayVideoInview() {

    let allVideoDivs = gsap.utils.toArray('.playpauze');

    allVideoDivs.forEach((videoDiv, i) => {

        let videoElem = videoDiv.querySelector('video')

        ScrollTrigger.create({
            scroller: document.querySelector('[data-scroll-container]'),
            trigger: videoElem,
            start: '0% 120%',
            end: '100% -20%',
            onEnter: () => videoElem.play(),
            onEnterBack: () => videoElem.play(),
            onLeave: () => videoElem.pause(),
            onLeaveBack: () => videoElem.pause(),
        });

    });
}

/**
 * Scrolltrigger Animations Desktop + Mobile
 */
function initScrolltriggerAnimations() {

    if (document.querySelector(".footer-wrap")) {
        // Scrolltrigger Animation : Footer + hamburger
        $(".footer-wrap").each(function(index) {
            let triggerElement = $(this);
            let targetElementHamburger = $(".btn-hamburger .btn-click");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "50% 100%",
                    end: "100% 120%",
                    scrub: 0
                }
            });
            tl.from(targetElementHamburger, {
                boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
                ease: "none"
            });
        });
    }

    // Scrolltrigger Animation : Span Lines Intro Home
    if (document.querySelector(".span-lines.animate")) {
        $(".span-lines.animate").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(".span-lines.animate .span-line-inner");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    toggleActions: 'play none none reset',
                    start: "0% 100%",
                    end: "100% 0%"
                }
            });
            if (targetElement) {
                tl.from(targetElement, {
                    y: "100%",
                    stagger: .01,
                    ease: "power3.out",
                    duration: 1,
                    delay: 0
                });
            }
        });
    }

    if (document.querySelector(".fade-in.animate")) {
        // Scrolltrigger Animation : Fade in
        $(".fade-in.animate").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    toggleActions: 'play none none reset',
                    start: "0% 110%",
                    end: "100% 0%",
                }
            });
            if (targetElement) {
                tl.from(targetElement, {
                    y: "2em",
                    opacity: 0,
                    ease: "expo.out",
                    duration: 1.75,
                    delay: 0
                });
            }
        });
    }

    if (document.querySelector(".awwwards-badge")) {
        // Scrolltrigger Animation : Awwwards
        $(".awwwards-badge").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(".awwwards-badge svg:nth-child(1)");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 0
                }
            });
            tl.to(targetElement, {
                rotate: -90,
                ease: "none"
            });
        });
    }

    // Disable GSAP on Mobile
    // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
    ScrollTrigger.matchMedia({

        // Desktop Only Scrolltrigger 
        "(min-width: 721px)": function() {

            if (document.querySelector(".home-header .arrow")) {
                // Scrolltrigger Animation : Header Arrow
                $(".home-header").each(function(index) {
                    let triggerElement = $(this);
                    let targetElement = $(".home-header .arrow");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "100% 100%",
                            end: "100% 0%",
                            scrub: 0
                        }
                    });
                    tl.to(targetElement, {
                        rotate: 90,
                        ease: "none"
                    }, 0);
                });
            }

            if (document.querySelector(".footer-footer-wrap")) {
                // Scrolltrigger Animation : Footer General Footer
                $(".footer-footer-wrap").each(function(index) {
                    let triggerElement = $(this);
                    let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
                    let targetElementArrow = $("footer .arrow");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "0% 100%",
                            end: "100% 100%",
                            scrub: 0
                        }
                    });
                    tl.to(targetElementRound, {
                            height: 0,
                            ease: "none"
                        }, 0)
                        .from(targetElementArrow, {
                            rotate: 15,
                            ease: "none"
                        }, 0);
                });
            }

            if (document.querySelector(".footer-case-wrap")) {
                // Scrolltrigger Animation : Footer Case
                $(".footer-case-wrap").each(function(index) {
                    let triggerElement = $(this);
                    let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "0% 100%",
                            end: "100% 100%",
                            scrub: 0
                        }
                    });
                    tl.to(targetElementRound, {
                        height: 0,
                        ease: "none"
                    }, 0);
                });
            }

            if (document.querySelector(".about-image .single-about-image")) {
                // Scrolltrigger Animation : About 
                $(".about-image .single-about-image").each(function(index) {
                    let triggerElement = $(this);
                    let targetElement = $(".about-image .arrow");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "15% 100%",
                            end: "100% 0%",
                            scrub: 0,
                        }
                    });
                    tl.to(targetElement, {
                        rotate: 60,
                        ease: "none"
                    }, 0);
                });
            }


            if (document.querySelector(".about-services")) {
                // Scrolltrigger Animation : About Services BG
                $(".about-services").each(function(index) {
                    let triggerElement = $(this);
                    let targetElement = $(".about-header, .line-globe, .about-image, .about-services");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "-25% 100%",
                            end: "100% 100%",
                            scrub: 0,
                        }
                    });
                    tl.set(targetElement, {
                        backgroundColor: "#FFFFFF",
                    })
                    tl.to(targetElement, {
                        backgroundColor: "#E9EAEB",
                        ease: "none",
                    });
                });
            }

            if (document.querySelector(".digital-ball .globe")) {
                // Scrolltrigger Animation : Globe
                $("main").each(function(index) {
                    let triggerElement = $(this);
                    let targetElement = $(".digital-ball .globe");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "100% 100%",
                            end: "100% 0%",
                            scrub: 0,
                        }
                    });

                    tl.to(targetElement, {
                        ease: "none",
                        rotate: 90
                    });
                });
            }

        }, // End Desktop Only Scrolltrigger

        // Mobile Only Scrolltrigger
        "(max-width: 720px)": function() {

            if (document.querySelector(".footer-wrap")) {
                // Scrolltrigger Animation : Footer
                $(".footer-wrap").each(function(index) {
                    let triggerElement = $(this);
                    let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "0% 100%",
                            end: "100% 100%",
                            scrub: 0
                        }
                    });
                    tl.to(targetElementRound, {
                        height: 0,
                        ease: "none"
                    }, 0);
                });
            }

        } // End Mobile Only Scrolltrigger

    }); // End GSAP Matchmedia

}
