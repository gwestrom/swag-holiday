
var hoverTimeout;

$('.slide_hit').hover(function() {
    clearTimeout(hoverTimeout);
    $('.slide_hit-holder').removeClass('hovered');
    $(this).parent('.slide_hit-holder').addClass('hovered');
}, function() {
     var $self = $(this).parent('.slide_hit-holder');
     hoverTimeout = setTimeout(function() {
       $self.removeClass('hovered');
    }, 500);
});

$('.slide_btn-holder').hover(function() {
    clearTimeout(hoverTimeout);
    $('.slide_hit-holder').removeClass('hovered');
    $(this).parent('.slide_hit-holder').addClass('hovered');
}, function() {
     var $self = $(this).parent('.slide_hit-holder');
     hoverTimeout = setTimeout(function() {
       $self.removeClass('hovered');
    }, 500);
});


$(window).on("load resize",function(e){

$('.holiday_slide-holder').removeAttr("style");
$('#holiday_nav-holder').removeAttr("style");
$('#holiday_nav-drawer').removeAttr("style");
$('#holiday_slideshow-arrows').removeAttr("style");
$('#drawer_slideshow-holder').removeAttr("style");

var 
myBottom,
//checkvar,
testW,
testH,
imgW, 
imgH, 
newW,
widthDiff,
myNewWidth,
newH;

testW = $('#holiday_slideshow').width();
testH = $('#holiday_slideshow').height();

imgW = 1920;
imgH = 1200;
    
if(imgW/imgH > testW/testH ) {
        newW = $('#holiday_slideshow').width();
        newH = imgH / imgW * newW;
        //checkvar = "first";
}
else{
        newH = $('#holiday_slideshow').height();
        newW = imgW / imgH * newH;
        //checkvar = "second";
}

if (testH > newH) {
myBottom = (testH - newH) / 2;
$('#holiday_nav-holder').css("bottom", myBottom+"px");
}
else {
$('#holiday_nav-holder').css("bottom","0");
}

$('.holiday_slide-holder').height(newH);
$('.holiday_slide-holder').width(newW);
$('#holiday_nav-drawer').width(newW);
$('#holiday_slideshow-arrows').width(newW);
$('#drawer_slideshow-holder').width(newW);

});

$('#holiday_nav-arrow').click(function() {
    $(this).parent('#holiday_nav').toggleClass('arrow_down');
});

var mySlide,
currentDrawerSlide,
currentHolidaySlide;

currentDrawerSlide = 0;
currentHolidaySlide = 0;

$('#drawer_slideshow').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  speed:500,
  variableWidth: true,
  focusOnSelect: true,
  arrows: true,
  appendArrows: $('#drawer_slideshow-arrows'),
   nextArrow: '<button class="drawer_slideshow-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="black" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.83333L15.2857 14L11 18.1667L11.8571 19L16.9348 14.1547C16.9783 14.1096 17 14.0548 17 14C17 13.9452 16.9783 13.8904 16.9348 13.8453L11.8571 9L11 9.83333Z" fill="black"/></svg></button>',
   prevArrow: '<button class="drawer_slideshow-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" transform="rotate(-180 14 14)" stroke="black" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 18.1667L12.7143 14L17 9.83333L16.1429 9L11.0652 13.8453C11.0217 13.8904 11 13.9452 11 14C11 14.0548 11.0217 14.1096 11.0652 14.1547L16.1429 19L17 18.1667Z" fill="black"/></svg></button>'
});

// On after drawer slide change
$('#drawer_slideshow').on('afterChange', function(event, slick, currentSlide){
currentDrawerSlide = currentSlide;
$('#holiday_slideshow').slick('slickGoTo', currentSlide);
});
    
$('#holiday_slideshow').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   speed:500,
   fade:true,
   cssEase:'linear',
   arrows: true,
   appendArrows: $('#holiday_slideshow-arrows'),
   nextArrow: '<button class="holiday_slideshow-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="white" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.83333L15.2857 14L11 18.1667L11.8571 19L16.9348 14.1547C16.9783 14.1096 17 14.0548 17 14C17 13.9452 16.9783 13.8904 16.9348 13.8453L11.8571 9L11 9.83333Z" fill="white"/></svg></button>',
   prevArrow: '<button class="holiday_slideshow-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" transform="rotate(-180 14 14)" stroke="white" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 18.1667L12.7143 14L17 9.83333L16.1429 9L11.0652 13.8453C11.0217 13.8904 11 13.9452 11 14C11 14.0548 11.0217 14.1096 11.0652 14.1547L16.1429 19L17 18.1667Z" fill="white"/></svg></button>'
 });
      
// On after main slide change
$('#holiday_slideshow').on('afterChange', function(event, slick, currentSlide){

$('#page').removeClass (function (index, className) {
    return (className.match (/\bslidenumber-\S+/g) || []).join(' ');
});
currentHolidaySlide = currentSlide;
mySlide = currentSlide +1;
$('#page').addClass('slidenumber-'+mySlide);

if (currentHolidaySlide != currentDrawerSlide) {
$('#drawer_slideshow').slick('slickGoTo', currentSlide);
}


});