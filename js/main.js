
$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle(1000);
        $(".fa-angle-double-right.one").toggleClass("rotated");
$(".flip h1").toggleClass("selected");
    });
        $(".flip-2").click(function(){
        $(".panel-2").slideToggle(1000);
$(".fa-angle-double-right.two").toggleClass("rotated");
$(".flip-2 h1").toggleClass("selected");
    });
      	$(".flip-3").click(function(){
        $(".panel-3").slideToggle(1000);
$(".fa-angle-double-right.three").toggleClass("rotated");
$(".flip-3 h1").toggleClass("selected");
    });
    	$(".flip-4").click(function(){
        $(".panel-4").slideToggle(1000);
$(".fa-angle-double-right.four").toggleClass("rotated");
$(".flip-4 h1").toggleClass("selected");
    });
        $(".flip-5").click(function(){
        $(".panel-5").slideToggle(1000);
$(".fa-angle-double-right.five").toggleClass("rotated");
$(".flip-5 h1").toggleClass("selected");
    });
     $(".flip-6").click(function(){
        $(".panel-6").slideToggle(1000);
$(".fa-angle-double-right.six").toggleClass("rotated");
$(".flip-6 h1").toggleClass("selected");
    });
});

/* jquery slideUp for panel sections */

 $(document).ready(function(){
    $(".panel").click(function(){
        $(".panel").slideUp(1000);
$(".fa-angle-double-right.one").toggleClass("rotated");
$(".flip h1").toggleClass("selected");
    }); 
    $(".panel-2").click(function(){
        $(".panel-2").slideUp(1000);
$(".fa-angle-double-right.two").toggleClass("rotated");
$(".flip-2 h1").toggleClass("selected");
    }); 
    $(".panel-3").click(function(){
        $(".panel-3").slideUp(1000);
$(".fa-angle-double-right.three").toggleClass("rotated");
$(".flip-3 h1").toggleClass("selected");
    });
     $(".panel-4").click(function(){
        $(".panel-4").slideUp(1000);
$(".fa-angle-double-right.four").toggleClass("rotated");
$(".flip-4 h1").toggleClass("selected");
    });
     $(".panel-5").click(function(){
        $(".panel-5").slideUp(1000);
$(".fa-angle-double-right.five").toggleClass("rotated");
$(".flip-5 h1").toggleClass("selected");
     });
    $(".panel-6").click(function(){
        $(".panel-6").slideUp(1000);
$(".fa-angle-double-right.six").toggleClass("rotated");
$(".flip-6 h1").toggleClass("selected");
    });     
}); 
    
    
/* jquery scroll to id */

    (function($){
			$(window).load(function(){
				
				/* Page Scroll to id fn call */
				$("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"#nav-menu a"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});
		})(jQuery);


/* overlay sidenav */


/* Sidenav overlay, no push */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


