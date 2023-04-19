document.addEventListener("DOMContentLoaded", function () {
    // header gnb
    const dataNav = [{
            title: "회사소개",
            sub: [{
                    title: "비전",
                    link: "#"
                },
                {
                    title: "CEO 메세지",
                    link: "#"
                },
                {
                    title: "역사",
                    link: "#"
                },
                {
                    title: "CI",
                    link: "#"
                },
                {
                    title: "주요계열사",
                    link: "#"
                },
                {
                    title: "해외사업장",
                    link: "#"
                },
                {
                    title: "국내사업장",
                    link: "#"
                },
            ]
        },

        {
            title: "ESG",
            sub: [
                {
                    title: "전략 및 정책",
                    link: "#"
                },
                {
                    title: "사회공헌",
                    link: "#"
                },
                {
                    title: "기업시민보고서",
                    link: "#"
                },
            ]
        },
        {
            title: "투자정보",
            sub: [
                {
                    title: "주식 및 주주정보",
                    link: "#"
                },
                {
                    title: "배당금 조회",
                    link: "#"
                },
                {
                    title: "재무정보",
                    link: "#"
                },
                {
                    title: "IR 자료실",
                    link: "#"
                },
                {
                    title: "IR 활동",
                    link: "#"
                },
                {
                    title: "기업지배구조",
                    link: "#"
                },
            ]
        },
        {
            title: "홍보채널",
            sub: [
                {
                    title: "NEWS ROOM",
                    link: "#"
                },
                {
                    title: "미디어 라이브러리",
                    link: "#"
                },
                {
                    title: "공지사항",
                    link: "#"
                },
            ]
        }
    ]

    // header
    const createNavItem = (nav) => {
        return `
        <li class="depth1">
            <a href="#" class="d1"><span>${nav.title}</span></a>
            <ul class="depth2">
                ${nav.sub.map((navs)=>`<li><a href="${navs.link}">${navs.title}</a></li>`).join('')}
            </ul>
        </li>
        `
    }
    
    // create
    const navBox = document.querySelector('.gnb');
    
    dataNav.forEach(nav => {
        navBox.innerHTML += createNavItem(nav);
    })
    // scroll event
    window.addEventListener('scroll', function() {
        const header = document.querySelector('#header');
      
        // header move
        header.classList.toggle('changeHeader', window.scrollY >= 20);
    });
    
    
    // header animation
    window.onload = function() {
        document.querySelector('#header').classList.add('active');
    }
      
    // gnb dropdown
    const header = document.querySelector('header');
    const gnbDepth2 = document.querySelectorAll('.gnb .depth2');
    const gnbBg = document.querySelector('.gnbBg');
    
    header.addEventListener('mouseover', () => {
      gnbDepth2.forEach(depth2 => depth2.classList.add('active'));
      gnbBg.classList.add('active');
    });
    
    header.addEventListener('mouseleave', () => {
      gnbDepth2.forEach(depth2 => depth2.classList.remove('active'));
      gnbBg.classList.remove('active');
    });
    
    
      // $(".gnb .depth1")
      //   .mouseenter(function () {
      //     $(".depth2").stop().slideDown();
      //     $(".gnbBg").stop().slideDown();
      //   })
      //   .mouseleave(function () {
      //     $(".depth2").stop().slideUp();
      //     $(".gnbBg").stop().slideUp();
      //   });
      
      // gnb language 
      $(".lang .current").click(function () {
        let d = $(".lang_list").css("display");
        if (d == "block") {
          $(".lang_list").stop().slideUp();
          $(this).removeClass("up");
        } else {
          $(".lang_list").stop().slideDown();
          $(this).addClass("up");
        }
        return false;
      });
      $(".lang_list li").click(function () {
        $(".lang_list li").removeClass("on");
        $(this).addClass("on");
        let langOn = $(this).text();
        $(".lang .current").text(langOn);
        return false;
      });
    
      
    // gnb search
    $(".search").click(function () {
        let d = $(this).find("input").css("display");
        if (d == "block") {
          $(this).find("input").stop().fadeOut(300);
          $(this).find("button").stop().fadeOut(300);
          $(this).removeClass("close");
        } else {
          $(this).find("input").stop().fadeIn(300);
          $(this).find("button").stop().fadeIn(300);
          $(this).addClass("close");
          $(".lang .current").removeClass("up");
          $(".lang_list").stop().slideUp();
        }
      });
});
