// scroll event
window.addEventListener('scroll', function() {
  const sct = window.pageYOffset || document.documentElement.scrollTop;
  const irBox = document.querySelector('.ir_box');

  // IR
  irBox.classList.toggle('on', sct >= document.querySelector('.ir').getBoundingClientRect().top + window.pageYOffset - 200);
});

//posco_main slide
let mainS = new Swiper(".posco_main", {
  pagination: {
    el: ".mS_pager",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
  loop: true,
  speed: 1000,
});

//posco_main-메인슬라이드 멈춤/재생버튼
$(".mS_stop").click(function () {
  mainS.autoplay.stop();
  $(this).hide();
  $(".mS_play").show();
});
$(".mS_play").click(function () {
  mainS.autoplay.start();
  $(this).hide();
  $(".mS_stop").show();
});

// biz slide
let bizS = new Swiper(".biz_list", {
  pagination: {
    el: ".biz_pager",
    clickable: true,
  },
  navigation: {
    prevEl: ".biz_prev",
    nextEl: ".biz_next",
  },
  autoplay: {
    delay: 4000,
  },
  loop: true,
  speed: 1000,
});

//esg-탭영역
$(".esg_list li").click(function () {
  let eList = $(this).index();
  $(".esg_list li").removeClass("on");
  $(this).addClass("on");
  $(".esg_box").removeClass("view");
  $(".esg_box").eq(eList).addClass("view");
});

//IR-주가정보 숫자 카운트업
var a = 0;
$(window).scroll(function () {
  var oTop = $(".ir_box1_top").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate({
          countNum: countTo,
        },

        {
          duration: 1700,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

//IR-주가그래프 단위선택영역
$(".graph_unit_txt").click(function () {
  $(this).siblings(".unit_list").toggle();
  return false;
});
$(".unit_list li").click(function () {
  $(".unit_list li").removeClass("on");
  $(this).addClass("on");
  let unitOn = $(this).text();
  $(".graph_unit_txt").text(unitOn);
  return false;
});

//NEWS-뉴스 콘텐츠 
let n = new Swiper(".news_box", {
  direction: "vertical",
  mousewheel: {
    ivert: true,
  },
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
});

//푸터-family site
$(".f2_familySite").click(function () {
  let d = $(this).find(".fs_list").css("display");
  if (d == "block") {
    $(".fs_list").stop().slideUp();
    $(".fs_btn").removeClass("close");
  } else {
    $(".fs_list").stop().slideDown();
    $(".fs_btn").addClass("close");
  }
  return false;
});