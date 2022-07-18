$( document ).ready(function() {
   

  
  $(".openLabel").click(function(){
    $(".transReciept").addClass("active");
  });

  $(".closeLabel").click(function(){
    $(".transReciept").removeClass("active");
  });






$('.mySlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    // stagePadding: 250,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }

    }
});



$('.sellSlide').owlCarousel({
  loop:true,
  margin:15,
  nav: true,
  navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/arrowSlide.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/arrowSlide.svg'></div>"],
   
  // stagePadding: 250,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:2
      },
      991:{
        items:3
    },
    1199:{
      items:4
  }

  }
});


// header stick

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar-default").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar-default").removeClass("active");
    }
});

});


// counte
// Set the date we're counting down to
var countDownDate = new Date("Sep 14, 2022 11:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = "<p>Days</p> " + days  + "<p>Hours</p> " + hours
//   + "<p>minutes</p>" + minutes + "<p>Seconds</p>" + seconds ;

  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("minutes").innerHTML = minutes ;
  document.getElementById("seconds").innerHTML = seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });

    
  });


  $(document).ready(function(){
    $(".main_img").click(function(){
      $(".myOverlay").addClass("active");
    });
    $("#close-btn, #close-btn1").click(function(){
        $(".myOverlay").removeClass("active");
      });    
  });


// piechart
 


$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// light box popup
function hide_pop(){
  document.getElementById('popup_img').style.display = "none";
}

 function guru(id_name,num){
   var full_id = id_name+num;

   document.getElementById("popup_img").style.display="block"; 

   var src = document.getElementById(full_id).getAttribute('src'); 

   var src = document.getElementById("img_popup").setAttribute('src',src);



   
   if(num==6){
    var next_id = id_name+(num);
    document.getElementById("next_img").style.display = "none";
    
   }else{
     var next_id = "'"+id_name+"'"+","+(num+1);
     document.getElementById("next_img").style.display = "block";
   }  

   document.getElementById("next_img").setAttribute('onclick','guru('+next_id+')');



 if(num>=2){
    document.getElementById("pre_view_img").style.display = "block";
     var pre_id = "'"+id_name+"'"+","+(num-1);

        document.getElementById("pre_view_img").setAttribute('onclick','guru('+pre_id+')'); 
   }else if(num==1){
    document.getElementById("pre_view_img").style.display = "none";
   }

 }  





 // light box popup guarantee
function hide_pop1(){
  document.getElementById('popup_img1').style.display = "none";
}

 function guru1(id_name,num){
   var full_id = id_name+num;

   document.getElementById("popup_img1").style.display="block"; 

   var src = document.getElementById(full_id).getAttribute('src'); 

   var src = document.getElementById("img_popup1").setAttribute('src',src);



   
   if(num==6){
    var next_id = id_name+(num);
    document.getElementById("next_img").style.display = "none";
    
   }else{
     var next_id = "'"+id_name+"'"+","+(num+1);
     document.getElementById("next_img").style.display = "block";
   }  

   document.getElementById("next_img").setAttribute('onclick','guru1('+next_id+')');



 if(num>=2){
    document.getElementById("pre_view_img").style.display = "block";
     var pre_id = "'"+id_name+"'"+","+(num-1);

        document.getElementById("pre_view_img").setAttribute('onclick','guru1('+pre_id+')'); 
   }else if(num==1){
    document.getElementById("pre_view_img").style.display = "none";
   }

 }  


 












 





