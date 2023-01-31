
var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

$(function(){
    
    var emratMbiemrat = ["Drita Llolla", "Latif Haxhibrahimi", "Learta Hollaj", "Silvija Marnikovic", "Luljeta Sefa", "Flutura Mustafa", "Ilir Harasani"];
    var emrat = ["drita", "latif", "learta", "silvija", "luljeta", "flutura", "ilir"];

    var pershkrimet = ["spiritus movens of iACT group, derailed from her career in pharmacy, to pursue her civil engagement passion. A jazz fan, Drita meticulously cares about details that make a difference the way great jazz performance subtly influences our senses. One of Drita’s favourite quotes is ‘No matter what anybody tells you, words and ideas can change the world.’", 
    "is a member of the International cooperation office at the Municipality of Ulqin/Ulcinj. Besides his career oriented goals towards hospitality industry, Latif is known for extensive experience with civil society organizations and international projects. He is a dedicated volunteer and a fierce fighter for saving the environment, especially the protection of marine fauna. Latif is also known as the organizational guru of iACT.",
    "dedicated to studying and analyzing development policies, is for years now an active member of civil society organizations. Besides her work in Kosovo, Learta wants to give back to her community through iAct group. Energetic and diverse in her talents, Learta is an inspiring young leader committed to setting an example . ",
    "teacher of English Language in elementary school, apart from her love for inspiring young people through education, is one of the pillars of iAct team. She is strong advocate of permanent education and serves as a guide to her students and peers. Silvija genuinely believes in people! ",
    "has dedicated herself to obtaining M.A. in political sciences and to engage in social change with iACT team. Luljeta believes women should have more voice in the society and wants to stand for what is right.",
    "currently pursuing a Law Degree, known as Dulcinea from a local play, owes much to her passion for poetry and acting. Her goal as civil activist is to reinvent herself and find new ways to grow as a person thus contributing to her surroundings. She has been a part of many civil sector activities before joining the iACT team.",
    "joined the Municipality of Ulqin/Ulcinj after attending Law School as a public defender. He also is an active member of iAct team, willing to challenge the status quo. Ilir attributes more to doing than saying."];

    $("#main, #program, #team, #poster, #volunteers, #sponsors, #contact").height(y);
    
//cache the DOM
    var h = $("html, body"),
        svg = $(".menuIcon"),
        lines = $("svg>line"),
        line1 = $("svg>line:nth-child(1)"),
        line2 = $("svg>line:nth-child(2)"),
        line3 = $("svg>line:nth-child(3)"),
        sidemenu = $(".sidemenu"),
        topmenu = $(".topmenu"),
        sidemenua = $(".sidemenu>nav>a"),
        meny = $(".meny"),
        imazh = $(".imazh"),
        main = $("#main"),
        news = $("#news"),
        mbyllNews = $("#closeBtn"),
        newsIcon = $("#newsIcon"),
        program = $("#program"),
        team = $("#team"),
        poster = $("#poster"),
        volunteers = $("#volunteers"),
        sponsors = $("#sponsors"),
        contact = $("#contact");

// menutë
    $(".sidemenu>nav>a").on("click", function(){
        var index = $(this).index();
        h.animate({ scrollTop:index*y }, 1500, "easeInOutExpo");
        hapMbyll();
    });

    $(".topmenu>nav>a").on("click", function(){
        var index = $(this).index();
        h.animate({ scrollTop:index*y }, 1500, "easeInOutExpo");
        mbyllmenu();
    });
     $(".logo").on("click", function(){
        h.animate({ scrollTop:0 }, 1500, "easeInOutExpo");
        mbyllmenu();
    });

    var check = -1;

    function hapMbyll(){
        if(check===-1){
            hapmenu();
        }else{
            mbyllmenu();
        }
    }

    function hapmenu(){
            if(x>1089){
            TweenLite.to(svg, 0.5,{left:200});
            TweenLite.to(sidemenu, 0.5,{width:250});}else{
            TweenLite.to(svg, 0.5,{left:"87%"});
            TweenLite.to(sidemenu, 0.5,{width:"100%"});
            }
            line2.hide(300);
            TweenLite.to(line1, 0.5, {rotation:43});
            TweenLite.to(line3, 0.5, {rotation:-43});
            check=1;
    }
  
    function mbyllmenu(){
             if(x>1089){
            TweenLite.to(svg, 1.5,{left:"10%"});
             }else if(x<721){
            TweenLite.to(svg, 1.5,{left:"3%"});  
            }else{
            TweenLite.to(svg, 1.5,{left:"20%"});  
            }
            TweenLite.to(sidemenu,1.5,{width:0});
            line2.show(300);
            TweenLite.to(line1, 0.5, {rotation:0});
            TweenLite.to(line3, 0.5, {rotation:0});
            check=-1;
    }

    
    meny.on("click", function(){
        hapMbyll();
    });

// news
    (function($, undefined) {
        $.fn.loopScroll = function(p_options) {
            var options = $.extend({
                direction: "upwards",
                speed: 30
            }, p_options);

            return this.each(function() {
            var obj = $(this).find(".news");
            var text_height = obj.find(".text").height();
            var start_y, end_y;
            if (options.direction == "downwards") {
                start_y = -text_height;
                end_y = 0;
            } else if (options.direction == "upwards") {
                start_y = 0;
                end_y = -text_height;
      }

      var animate = function() {
        // setup animation of specified block "obj"
        // calculate distance of animation    
        var distance = Math.abs(end_y - parseInt(obj.css("top")));

        //duration will be distance / speed
        obj.animate(
          { top: end_y },  //scroll upwards
          1000 * distance / options.speed,
          "linear",
          function() {
            // scroll to start position
            obj.css("top", start_y);
            animate();    
          }
        );
      };

      obj.find(".text").clone().appendTo(obj);
        $(this).on("mouseover", function() {
            obj.stop();
        }).on("mouseout", function() {
            animate(); // resume animation
        });
        obj.css("top", start_y);
        animate(); // start animation       
        });
         };
       }(jQuery));

    $(".news_container").loopScroll();

    var lajmet = $(".news>.text");
    
    mbyllNews.on("click", function(){
         news.animate({"height": "0"},300);
         newsIcon.delay(200).show(300);
    });

    newsIcon.on("click", function(){
        $(this).hide(300);
        news.animate({"height": "100%"},300);
        mbyllNews.delay(200).show(300);
        h.animate({ scrollTop:0 }, 1500, "easeInOutExpo");
    });

    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/4l2oc'
    });

// loop nëpër imazhe 

    //te koka
    var _intervalId;
    var i = 0;
    
    function fadeInLastImg(){
        imazh.animate({opacity: 0},500, function(){
        imazh.css({'background-image': 'url("imazhe/cover/cover'+i+'.jpg")'});
        });
        imazh.animate({opacity: 1},1000);
        if (i==4) {i=0;}else{i++;}
    }

    _intervalId = setInterval( function()
    {    if(x>1089){
        fadeInLastImg();}
    }, 8000 );

// contact 

    function adjust_textarea(h) {
        h.style.height = "50px";
        h.style.height = (h.scrollHeight)+"px";
    }
    var txta = $("textarea");
    function auto_grow(txta) {
    txta.style.height = "5px";
    txta.style.height = (txta.scrollHeight)+"px";
    }

});

function vendosLartesine() {

    $("#main, #program, #team, #poster, #volunteers, #sponsors, #contact").height(y);
}

var resizeTimer;
$(window).resize(function() {
        w = window;
        d = document;
        e = d.documentElement;
        g = d.getElementsByTagName('body')[0];
        x = w.innerWidth || e.clientWidth || g.clientWidth;
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(vendosLartesine, 100);
});

// $(document).scroll(function() {
//   var s = $(this).scrollTop();
//   if (s > y*2-300) {
//     $('.blockteam').fadeIn();
//   } else {
//     $('.blockteam').fadeOut();
//   }
// });

