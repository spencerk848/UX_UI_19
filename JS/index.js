console.log
$(function() {  
    $('.button')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });
  
  const tilt = $('.js-tilt').tilt();
  tilt.on('change', callback);  // parameters: event, transforms
  tilt.on('tilt.mouseLeave', callback); // parameters: event
  tilt.on('tilt.mouseEnter', callback); // parameters: event