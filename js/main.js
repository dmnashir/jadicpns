/**
 * Sets up Justified Gallery.
 */
if($.prototype.justifiedGallery){var options={rowHeight:140,margins:4,lastRow:"justify"};$(".article-gallery").justifiedGallery(options)}$(document).ready((function(){
/**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
if(
/**
   * Shows the responsive navigation menu on mobile.
   */
$("#header > #nav > ul > .icon").click((function(){$("#header > #nav > ul").toggleClass("responsive")})),$(".post").length){var i=$("#menu"),o=$("#menu > #nav"),e=$("#menu-icon, #menu-icon-tablet");
/**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
if(
/**
     * Display the menu on hi-res laptops and desktops.
     */
$(document).width()>=1440&&(i.css("visibility","visible"),e.addClass("active"))
/**
     * Display the menu if the menu icon is clicked.
     */,e.click((function(){return"hidden"===i.css("visibility")?(i.css("visibility","visible"),e.addClass("active")):(i.css("visibility","hidden"),e.removeClass("active")),!1})),
/**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
i.length&&$(window).on("scroll",(function(){var e=i.offset().top;
// hide only the navigation links on desktop
!o.is(":visible")&&e<50?o.show():o.is(":visible")&&e>100&&o.hide(),
// on tablet, hide the navigation icon as well and show a "scroll to top
// icon" instead
!$("#menu-icon").is(":visible")&&e<50?($("#menu-icon-tablet").show(),$("#top-icon-tablet").hide()):!$("#menu-icon").is(":visible")&&e>100&&($("#menu-icon-tablet").hide(),$("#top-icon-tablet").show())})),$("#footer-post").length){var t=0;$(window).on("scroll",(function(){var i=$(window).scrollTop();i>t?
// downscroll -> show menu
$("#footer-post").hide():
// upscroll -> hide menu
$("#footer-post").show(),t=i,
// close all submenu"s on scroll
$("#nav-footer").hide(),$("#toc-footer").hide(),$("#share-footer").hide(),
// show a "navigation" icon when close to the top of the page, 
// otherwise show a "scroll to the top" icon
i<50?$("#actions-footer > #top").hide():i>100&&$("#actions-footer > #top").show()}))}}}));