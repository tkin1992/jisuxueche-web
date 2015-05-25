//= require jquery-1.11.2
//= require jquery.downCount
//= require_tree .

$(window).load(function() {
  $('.screen-loader').fadeOut('slow');
});

// preload
$(document).ready(function() {
  $('#preload').css({
    display: 'table'
  });
  $('.countdown').downCount({
    date: '10/01/2015 00:00:00',
    offset: +8
  });
});

// preload function
$(window).load(function preLoader() {
  setTimeout(function() {
    $('#preload').delay(1000).fadeOut(1500);
  });
});
