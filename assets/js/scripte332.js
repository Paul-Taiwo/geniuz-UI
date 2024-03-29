/* Template	:	ICO Crypto v142 */ ! function (a) {
  "use strict";
  var l = a(window),
    e = a("body"),
    i = a(".navbar");

  function s() {
    return l.width()
  }
  "ontouchstart" in document.documentElement || e.addClass("no-touch");
  var t = s();
  l.on("resize", function () {
    t = s()
  });
  var o = a(".is-sticky");
  if (o.length > 0) {
    var d = a("#mainnav").offset();
    l.scroll(function () {
      var a = l.scrollTop();
      (l.width() > 991 || o.hasClass("mobile-sticky")) && a > d.top ? o.hasClass("has-fixed") || o.addClass("has-fixed") : o.hasClass("has-fixed") && o.removeClass("has-fixed")
    })
  }
  a('a.menu-link[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      var l = a(this.hash),
        e = !!this.hash.slice(1) && a("[name=" + this.hash.slice(1) + "]"),
        s = t >= 992 ? i.height() - 1 : 0;
      if ((l = l.length ? l : e).length) return a("html, body").animate({
        scrollTop: l.offset().top - s
      }, 1e3, "easeInOutExpo"), !1
    }
  });
  var n = window.location.href,
    m = n.split("#"),
    c = a(".nav li a");
  c.length > 0 && c.each(function () {
    n === this.href && "" !== m[1] && a(this).closest("li").addClass("active").parent().closest("li").addClass("active")
  });
  var r = a(".dropdown"),
    h = a(".dropdown-toggle");
  r.length > 0 && (r.on("mouseover", function () {
    l.width() > 991 && (a(this).children(".dropdown-menu").stop().fadeIn(400), a(this).addClass("open"))
  }), r.on("mouseleave", function () {
    l.width() > 991 && (a(this).children(".dropdown-menu").stop().fadeOut(400), a(this).removeClass("open"))
  }), h.on("click", function () {
    if (l.width() < 991) return a(this).parent().children(".dropdown-menu").fadeToggle(400), a(this).parent().toggleClass("open"), !1
  })), l.on("resize", function () {
    a(".navbar-collapse").removeClass("in"), r.parent().children(".dropdown-menu").fadeOut("400")
  });
  var v = a(".navbar-toggler"),
    g = a(".is-transparent");
  v.length > 0 && v.on("click", function () {
    a(".remove-animation").removeClass("animated"), g.hasClass("active") ? g.removeClass("active") : g.addClass("active")
  });
  var p = a("select");
  p.length > 0 && p.select2(), a(".menu-link").on("click", function () {
    a(".navbar-collapse").collapse("hide"), g.removeClass("active")
  }), a(document).on("mouseup", function (l) {
    g.is(l.target) || 0 !== g.has(l.target).length || (a(".navbar-collapse").collapse("hide"), g.removeClass("active"))
  });
  var u = a(".timeline-carousel");
  if (u.length > 0) {
    var f = !!e.hasClass("is-rtl");
    u.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
      items: 6,
      nav: !0,
      margin: 30,
      rtl: f,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2,
          center: !1
        },
        599: {
          items: 3
        },
        1024: {
          items: 5
        },
        1170: {
          items: 6
        }
      }
    })
  }
  var b = a(".roadmap-carousel");
  if (b.length > 0) {
    var x = !!e.hasClass("is-rtl");
    b.addClass("owl-carousel").owlCarousel({
      items: 6,
      nav: !1,
      dost: !0,
      margin: 30,
      rtl: x,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2,
          center: !1
        },
        599: {
          items: 3
        },
        1024: {
          items: 4
        },
        1170: {
          items: 5
        }
      }
    })
  }
  var w = a(".roadmap-carousel-withnav");
  if (w.length > 0) {
    var k = !!e.hasClass("is-rtl");
    w.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
      items: 5,
      nav: !0,
      dost: !1,
      margin: 30,
      rtl: k,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2,
          center: !1
        },
        599: {
          items: 3
        },
        1024: {
          items: 4
        },
        1170: {
          items: 5
        }
      }
    })
  }
  var C = a(".prblmsltn-list");
  if (C.length > 0) {
    var y = !!e.hasClass("is-rtl");
    C.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
      items: 1,
      margin: 30,
      nav: !0,
      dost: !1,
      autoplay: !1,
      loop: !0,
      animateOut: "fadeOut",
      autoHeight: !0,
      rtl: y
    })
  }
  var z = a(".has-carousel");
  if (z.length > 0) {
    var L = !!e.hasClass("is-rtl");
    z.each(function () {
      var l = a(this),
        e = l.data("items") ? l.data("items") : 4,
        i = e >= 3 ? 2 : e,
        s = i >= 2 ? 1 : i,
        t = l.data("delay") ? l.data("delay") : 6e3,
        o = !!l.data("auto"),
        d = !!l.data("loop"),
        n = !!l.data("dots"),
        m = !!l.data("navs"),
        c = !!l.data("center"),
        r = l.data("margin") ? l.data("margin") : 30;
      l.addClass("owl-carousel").owlCarousel({
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: e,
        loop: d,
        nav: m,
        dots: n,
        margin: r,
        center: c,
        autoplay: o,
        autoplayTimeout: t,
        autoplaySpeed: 300,
        rtl: L,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: s
          },
          768: {
            items: i
          },
          1170: {
            items: e
          }
        }
      })
    })
  }
  var P = a(".token-countdown");
  P.length > 0 && P.each(function () {
    var l = a(this),
      e = l.attr("data-date");
    l.countdown(e).on("update.countdown", function (l) {
      a(this).html(l.strftime('<div class="col"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">D<span>ays</span></span></div><div class="col"><span class="countdown-time">%H</span><span class="countdown-text">H<span>ours</span></span></div><div class="col"><span class="countdown-time">%M</span><span class="countdown-text">M<span>inutes<span></span></div><div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">S<span>econds</span></span></div>'))
    })
  });
  var D = a(".countdown-s2");
  D.length > 0 && D.each(function () {
    var l = a(this),
      e = l.attr("data-date");
    l.countdown(e).on("update.countdown", function (l) {
      a(this).html(l.strftime('<div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-first">%D</span><span class="countdown-s2-text">Days</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%H</span><span class="countdown-s2-text">Hours</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%M</span><span class="countdown-s2-text">Min</span></div><div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-last">%S</span><span class="countdown-s2-text">Sec</span></div>'))
    })
  });
  var j = a(".content-popup");
  j.length > 0 && j.magnificPopup({
    type: "inline",
    preloader: !0,
    removalDelay: 400,
    mainClass: "mfp-fade bg-team-exp"
  });
  var A = a(".video-play");
  A.length > 0 && A.magnificPopup({
    type: "iframe",
    removalDelay: 160,
    preloader: !0,
    fixedContentPos: !1,
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
      }
    }
  });
  var T = a(".imagebg");
  T.length > 0 && T.each(function () {
    var l = a(this),
      e = l.parent(),
      i = l.data("overlay"),
      s = l.children("img").attr("src"),
      t = void 0 !== i && "" !== i && i.split("-");
    void 0 !== s && "" !== s && (e.hasClass("has-bg-image") || e.addClass("has-bg-image"), "" !== t && "dark" === t[0] && (e.hasClass("light") || e.addClass("light")), l.css("background-image", 'url("' + s + '")').addClass("bg-image-loaded"))
  });
  var V = a('[class*="mask-ov"]');
  V.length > 0 && V.each(function () {
    var l = a(this).parent();
    l.hasClass("has-maskbg") || l.addClass("has-maskbg")
  });
  var S = a("#contact-form"),
    O = a("#subscribe-form");
  if (S.length > 0 || O.length > 0) {
    if (!a().validate || !a().ajaxSubmit) return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0;
    if (S.length > 0) {
      var F = S.find("select.required"),
        B = S.find(".form-results");
      S.validate({
        invalidHandler: function () {
          B.slideUp(400)
        },
        submitHandler: function (l) {
          B.slideUp(400), a(l).ajaxSubmit({
            target: B,
            dataType: "json",
            success: function (e) {
              var i = "error" === e.result ? "alert-danger" : "alert-success";
              B.removeClass("alert-danger alert-success").addClass("alert " + i).html(e.message).slideDown(400), "error" !== e.result && a(l).clearForm().find(".input-field").removeClass("input-focused")
            }
          })
        }
      }), F.on("change", function () {
        a(this).valid()
      })
    }
    if (O.length > 0) {
      var M = O.find(".subscribe-results");
      O.validate({
        invalidHandler: function () {
          M.slideUp(400)
        },
        submitHandler: function (l) {
          M.slideUp(400), a(l).ajaxSubmit({
            target: M,
            dataType: "json",
            success: function (e) {
              var i = "error" === e.result ? "alert-danger" : "alert-success";
              M.removeClass("alert-danger alert-success").addClass("alert " + i).html(e.message).slideDown(400), "error" !== e.result && a(l).clearForm()
            }
          })
        }
      })
    }
  }
  var _ = a(".input-line");
  _.length > 0 && _.each(function () {
    var l = a(this);
    a(this).val().length > 0 && l.parent().addClass("input-focused"), l.on("focus", function () {
      l.parent().addClass("input-focused")
    }), l.on("blur", function () {
      l.parent().removeClass("input-focused"), a(this).val().length > 0 && l.parent().addClass("input-focused")
    })
  });
  var H = a(".animated");
  a().waypoint && H.length > 0 && l.on("load", function () {
    H.each(function () {
      var l = a(this),
        e = l.data("animate"),
        i = l.data("duration"),
        s = l.data("delay");
      l.waypoint(function () {
        l.addClass("animated " + e).css("visibility", "visible"), i && l.css("animation-duration", i + "s"), s && l.css("animation-delay", s + "s")
      }, {
        offset: "93%"
      })
    })
  });
  var G = e.hasClass("is-rtl") ? "../../images" : "../images";
  e.append('#');
  var R = a(".promo-trigger"),
    N = a(".promo-content"),
    U = a(".promo-close");
  U.length > 0 && U.on("click", function () {
    var a = Cookies.get("twz-offer");
    return N.removeClass("active"), R.addClass("active"), null === a && Cookies.set("twz-offer", "true", {
      expires: 1,
      path: ""
    }), !1
  }), l.on("load", function () {
    null === Cookies.get("twz-offer") ? N.addClass("active") : R.addClass("active")
  });
  var J = e.hasClass("is-rtl") ? "../../images" : "../images",
    I = e.hasClass("is-rtl") ? "../../rtl/" : "../",
    E = e.hasClass("is-rtl") ? "../../../ico-user/" : "../../ico-user/",
    Q = e.hasClass("is-rtl") ? "../" : "./rtl/",
    q = e.hasClass("is-rtl") ? "LTR" : "RTL";
  e.append('<div class="demo-content"><div class="demo-content-bg"></div> <a class="demo-close" href="javascript:void(0)">×</a><div class="demo-content-wrap"><ul class="nav tab-nav tab-nav-btn tab-nav-btn-s2"><li><a class="active" data-toggle="tab" href="#demo-showcase">Demo Showcase</a></li><li><a data-toggle="tab" href="#demo-page-list">All Pages</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="demo-showcase"><div class="container-fluid"><div class="row demo-item-list"><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + I + 'index-azalea.html"> <img src="' + J + '/demo/demo-azalea.jpg" alt=""> <span class="demo-badge demo-badge-hot">v1.6</span> </a></div><div class="demo-item-text"> <a href="' + I + 'index-azalea.html"><h5 class="title title-sm">Azalea Dark <small>Landing V17</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + I + 'index-azalea-multi.html"> <img src="' + J + '/demo/demo-azalea-multi.jpg" alt=""> <span class="demo-badge demo-badge-hot">v1.6</span> </a></div><div class="demo-item-text"> <a href="' + I + 'index-azalea-multi.html"><h5 class="title title-sm">Azalea Multi <small>Landing V16</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + I + 'index-gentian-pro.html"> <img src="' + J + '/demo/demo-gentian-pro.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="' + I + 'index-gentian-pro.html"><h5 class="title title-sm">Gentian Pro <small>Landing V15</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + E + '"> <img src="' + J + '/demo/demo-user.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="' + E + '"><h5 class="title title-sm">User Center <small>Free Dashboard</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + I + 'index-gentian.html"> <img src="' + J + '/demo/demo-gentian.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="' + I + 'index-gentian.html"><h5 class="title title-sm">Gentian Dark<small>Landing V14</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="' + I + 'index-gentian-multi.html"> <img src="' + J + '/demo/demo-gentian-multi.jpg" alt=""> <span class="demo-badge">v1.5</span> </a></div><div class="demo-item-text"> <a href="' + I + 'index-gentian-multi.html"><h5 class="title title-sm">Gentian Multi<small>Landing V13</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-zinnia-particle-animate.html"> <img src="' + J + '/demo/demo-zinnia.jpg" alt=""> <span class="demo-badge">v1.4.1</span> </a></div><div class="demo-item-text"> <a href="./index-zinnia-particle-animate.html"><h5 class="title title-sm">Zinnia Pro<small>Landing V12</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-salvia-particle-animate.html"> <img src="' + J + '/demo/demo-salvia.jpg" alt=""> <span class="demo-badge">v1.4</span> </a></div><div class="demo-item-text"> <a href="./index-salvia-particle-animate.html"><h5 class="title title-sm">Salvia Pro<small>Landing V11</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-lungwort-particle-animate.html"> <img src="' + J + '/demo/demo-lungwort.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="./index-lungwort-particle-animate.html"><h5 class="title title-sm">Lungwort Dark<small>Landing V10</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-jasmine-particle-animate.html"> <img src="' + J + '/demo/demo-jasmine.jpg" alt=""> <span class="demo-badge">v1.3</span> </a></div><div class="demo-item-text"> <a href="./index-jasmine-particle-animate.html"><h5 class="title title-sm">Jasmine Light<small>Landing V9</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-lobelia-particle-animate.html"> <img src="' + J + '/demo/demo-lobelia.jpg" alt=""> <span class="demo-badge">v1.2.3</span> </a></div><div class="demo-item-text"> <a href="./index-lobelia-particle-animate.html"><h5 class="title title-sm">Lobelia Dark<small>Landing V8</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-muscari-particle-animate.html"> <img src="' + J + '/demo/demo-muscari.jpg" alt=""> <span class="demo-badge">v1.2.1</span> </a></div><div class="demo-item-text"> <a href="./index-muscari-particle-animate.html"><h5 class="title title-sm">Muscari Pro<small>Landing V7</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-lavender-particle-animate.html"> <img src="' + J + '/demo/demo-lavender.jpg" alt=""> <span class="demo-badge">v1.2</span> </a></div><div class="demo-item-text"> <a href="./index-lavender-particle-animate.html"><h5 class="title title-sm">Lavender Pro<small>Landing V6</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-azure-light-pro-particle-animate.html"> <img src="' + J + '/demo/demo-azure-pro.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="./index-azure-light-pro-particle-animate.html"><h5 class="title title-sm">Azure Pro<small>Landing V5</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-azure-particle-animate.html"> <img src="' + J + '/demo/demo-azure.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="./index-azure-particle-animate.html"><h5 class="title title-sm">Azure Dark<small>Landing V4</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-dark-pro-particle-animate.html"> <img src="' + J + '/demo/demo-dark-pro.jpg" alt=""> <span class="demo-badge">v1.1</span> </a></div><div class="demo-item-text"> <a href="./index-dark-pro-particle-animate.html"><h5 class="title title-sm">Dark Pro<small>Landing V3</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-light-particle-animate.html"> <img src="' + J + '/demo/demo-pro.jpg" alt=""> <span class="demo-badge">v1.0</span> </a></div><div class="demo-item-text"> <a href="./index-light-particle-animate.html"><h5 class="title title-sm">Light<small>Landing V2</small></h5></a></div></div></div><div class="col-lg-3 col-md-4 col-6"><div class="demo-item"><div class="demo-item-image"> <a href="./index-dark-particle-animate.html"> <img src="' + J + '/demo/demo-dark.jpg" alt=""> <span class="demo-badge">v1.0</span> </a></div><div class="demo-item-text"> <a href="./index-dark-particle-animate.html"><h5 class="title title-sm">Dark <small>Landing V1</small></h5></a></div></div></div></div></div></div><div class="tab-pane fade" id="demo-page-list"><div class="container-fluid"><div class="demo-page-list-wrap"><h3 class="title title-md tc-alternet">Landing Pages</h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'index-azalea.html">Azalea Dark <span class="badge badge-xs badge-success">v1.6</span></a></li><li><a href="' + I + 'index-azalea-multi.html">Azalea Multi <span class="badge badge-xs badge-success">v1.6</span></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'index-gentian.html">Gentian Dark <span class="badge badge-xs badge-dark">v1.5</span></a></li><li><a href="' + I + 'index-gentian-pro.html">Gentian Pro <span class="badge badge-xs badge-dark">v1.5</span></a></li><li><a href="' + I + 'index-gentian-multi.html">Gentian Multi <span class="badge badge-xs badge-danger">HOT</span></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-zinnia-particle-animate.html">Zinnia Pro <small>v.1.4.1</small></a></li><li><a href="./index-salvia-particle-animate.html">Salvia Pro <small>v.1.4</small></a></li><li><a href="./index-jasmine-particle-animate.html">Jasmine Light <small>v1.3</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-lungwort-particle-animate.html">Lungwort Dark <small>v1.3</small></a></li><li><a href="./index-lobelia-particle-animate.html">Lobelia Dark <small>v1.2.3</small></a></li><li><a href="./index-muscari-particle-animate.html">Muscari Pro <small>v1.2.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-lavender-particle-animate.html">Lavender Pro <small>v1.2</small></a></li><li><a href="./index-azure-light-pro-particle-animate.html">Azure Pro <small>v.1.1</small></a></li><li><a href="./index-azure-particle-animate.html">Azure Dark <small>v.1.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-dark-pro-particle-animate.html">Dark Pro <small>v.1.1</small></a></li><li><a href="./index-dark-particle-animate.html">Dark <small>v.1.0</small></a></li><li><a href="./index-light-particle-animate.html">Light <small>v.1.0</small></a></li></ul></div></div><div class="gap-4x"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Landing Pages<div class="badge badge-xs badge-info ml-3">Non Animate Version</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'index-azalea-woa.html">Azalea Dark <small>v.1.6</small></a></li><li><a href="' + I + 'index-azalea-multi-woa.html">Azalea Multi <small>v.1.6</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'index-gentian-woa.html">Gentian Dark <small>v.1.5</small></a></li><li><a href="' + I + 'index-gentian-pro-woa.html">Gentian Pro <small>v.1.5</small></a></li><li><a href="' + I + 'index-gentian-multi-woa.html">Gentian Multi <small>v.1.5</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-zinnia-particle.html">Zinnia Pro <small>v.1.4.1</small></a></li><li><a href="./index-salvia-particle.html">Salvia Pro <small>v.1.4</small></a></li><li><a href="./index-jasmine-particle.html">Jasmine Light <small>v.1.3</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-lungwort-particle.html">Lungwort Dark <small>v.1.3</small></a></li><li><a href="./index-lobelia-particle.html">Lobelia Dark <small>v.1.2.3</small></a></li><li><a href="./index-muscari-particle.html">Muscari Pro <small>v1.2.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-lavender-particle.html">Lavender Pro <small>v1.2</small></a></li><li><a href="./index-azure-light-pro-particle.html">Azure Pro <small>v.1.1</small></a></li><li><a href="./index-azure-particle.html">Azure Dark <small>v.1.1</small></a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./index-dark-pro-particle.html">Dark Pro <small>v.1.1</small></a></li><li><a href="./index-dark-particle.html">Dark <small>v.1.0</small></a></li><li><a href="./index-light-particle.html">Light <small>v.1.0</small></a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Other Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'page-about.html">About Us</a></li><li><a href="' + I + 'page-team.html">Our Teams</a></li><li><a href="' + I + 'page-wallets.html">Wallets</a></li><li><a href="' + I + 'page-features.html">Features</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'page-token-sale.html">Token Sale</a></li><li><a href="' + I + 'page-roadmap.html">Roadmap</a></li><li><a href="' + I + 'page-faq.html">FAQs</a></li><li><a href="' + I + 'page-contact.html">Contact</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'page-login.html">Login - V1</a></li><li><a href="' + I + 'page-login-v2.html">Login - V2</a></li><li><a href="' + I + 'page-register.html">Register - V1</a></li><li><a href="' + I + 'page-register-v2.html">Register - V2</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'page-reset.html">Reset - V1</a></li><li><a href="' + I + 'page-reset-v2.html">Reset - V2</a></li><li><a href="' + I + '_blank.html">Blank Page</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'blog-3clmn.html">Blog 3 Column</a></li><li><a href="' + I + 'blog-sidebar-right.html">Blog Sidebar - Left</a></li><li><a href="' + I + 'blog-sidebar-left.html">Blog Sidebar - Right</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'blog-details.html">Blog Single - Sidebar</a></li><li><a href="' + I + 'blog-details-full.html">Blog Single - Full</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Elements Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-alert.html">Alerts</a></li><li><a href="' + I + 'element-button.html">Buttons</a></li><li><a href="' + I + 'element-content.html">Contents</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-table.html">Tables</a></li><li><a href="' + I + 'element-video.html">Videos</a></li><li><a href="' + I + 'element-typography.html">Typogrphy</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-progress-bar.html">Progress Bar</a></li><li><a href="' + I + 'element-form.html">Form Elements</a></li><li><a href="' + I + 'element-grid.html">Grids</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-color.html">Colors</a></li><li><a href="' + I + 'element-modal.html">Modals</a></li><li><a href="' + I + 'element-notification.html">Notification</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-chart.html">Charts</a></li><li><a href="' + I + 'element-countdown.html">Countdown</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'element-tab.html">Tabs</a></li><li><a href="' + I + 'element-accordion.html">Accordions</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Blocks Pages<div class="badge badge-xs badge-info ml-3">v1.5</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-navbar.html">Navbar</a></li><li><a href="' + I + 'block-footer.html">Footer</a></li><li><a href="' + I + 'block-team.html">Team</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-page-header.html">Page Header</a></li><li><a href="' + I + 'block-banner.html">Banner<div class="badge badge-xs badge-danger">HOT</div></a></li><li><a href="' + I + 'block-faq.html">FAQs</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-subscribe.html">Subscribe</a></li><li><a href="' + I + 'block-partner.html">Partners</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-roadmap.html">Roadmaps</a></li><li><a href="' + I + 'block-token-info.html">Token Info</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-feature-card.html">Features Card</a></li><li><a href="' + I + 'block-feature-panel.html">Features Panel</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="' + I + 'block-ath.html">Login / Register</a></li><li><a href="' + I + 'block-contact.html">Contact</a></li></ul></div></div><div class="hr"></div><h3 class="title title-md d-flex align-items-center tc-alternet">Other Pages<div class="badge badge-xs badge-danger ml-3">Before 1.4</div></h3><div class="row"><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./blog-archive-light.html">Blog List - Light</a></li><li><a href="./blog-archive-dark.html">Blog List - Dark</a></li><li><a href="./blog-archive-dark-pro.html">Blog List - Dark Pro</a></li><li><a href="./blog-archive-azure.html">Blog List - Azure</a></li><li><a href="./blog-archive-azure-light-pro.html">Blog List - Azure Pro</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./blog-single-light.html">Post/News - Light</a></li><li><a href="./blog-single-dark.html">Post/News - Dark</a></li><li><a href="./blog-single-dark-pro.html">Post/News - Dark Pro</a></li><li><a href="./blog-single-azure.html">Post/News - Azure</a></li><li><a href="./blog-single-azure-light-pro.html">Post/News - Azure Pro</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./login-light.html">Login - Light</a></li><li><a href="./login-dark.html">Login - Dark</a></li><li><a href="./signup-light.html">Signup - Light</a></li><li><a href="./signup-dark.html">Signup - Dark</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./signup-azure.html">Login - Azure</a></li><li><a href="./signup-lavender.html">Login - Lavender</a></li><li><a href="./signup-lobelia.html">Login - Lobelia</a></li><li><a href="./signup-muscari.html">Login - Muscari</a></li></ul></div><div class="col-6 col-sm-4 col-md-3 col-lg-2"><ul class="demo-page-list"><li><a href="./404-azure.html">404 - Azure</a></li><li><a href="./404-light.html">404 - Light</a></li><li><a href="./404-dark.html">404 - Dark</a></li></ul></div></div></div></div></div></div></div></div>');
  var W = a(".demo-themes,.demo-close"),
    Z = a(".demo-content"),
    X = a(".demo-color-toggle"),
    Y = a(".demo-color"),
    K = a(".color-trigger");
  Z.length > 0 && W.on("click", function () {
    Z.toggleClass("demo-active").css("display", "block"), e.toggleClass("shown-preview")
  }), X.length > 0 && X.on("click", function () {
    Y.slideToggle("slow")
  }), K.length > 0 && K.on("click", function () {
    var l = a(this).attr("title");
    return a("#layoutstyle").attr("href", "assets/css/" + l + ".css"), !1
  });
  var $ = a("#preloader"),
    aa = a("#loader");
  $.length > 0 && l.on("load", function () {
    aa.fadeOut(300), e.addClass("loaded"), $.delay(700).fadeOut(300)
  });
  if (a(".slider-pane").length > 0) {
    var la = !!e.hasClass("is-rtl");
    a(".slider-pane").addClass("owl-carousel").owlCarousel({
      items: 1,
      nav: !1,
      dotsContainer: ".slider-nav,.slider-dot",
      margin: 30,
      loop: !0,
      autoplayTimeout: 3e3,
      rtl: la,
      autoplay: !0,
      animateOut: "fadeOut",
      autoplayHoverPause: !0
    })
  }
  var ea = a(".card");
  ea.length > 0 && ea.each(function () {
    a(".card-header a").on("click", function () {
      var l = a(this);
      l.parent().parent().parent().parent().find(ea).removeClass("active"), l.parent().parent().parent().addClass("active")
    })
  });
  var ia = a("#particles-js"),
    sa = "#2b56f5",
    ta = "#00c0fa";
  e.hasClass("io-zinnia") && (sa = "#fff", ta = "#fff"), ia.length > 0 && particlesJS("particles-js", {
    particles: {
      number: {
        value: 30,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: ta
      },
      shape: {
        type: "circle",
        opacity: .2,
        stroke: {
          width: 0,
          color: sa
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: .3,
        random: !1,
        anim: {
          enable: !1,
          speed: 1,
          opacity_min: .12,
          sync: !1
        }
      },
      size: {
        value: 6,
        random: !0,
        anim: {
          enable: !1,
          speed: 40,
          size_min: .08,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 150,
        color: sa,
        opacity: .5,
        width: 1.3
      },
      move: {
        enable: !0,
        speed: 6,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "repulse"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: !0
  })
}(jQuery);