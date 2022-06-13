// scrollTop
$(document).ready(function() {
    $('#scrollTop').bind('click', function() {
      $('html, body').animate({scrollTop: '0'}, 680);
    });
  });

//현재 좌표값 + 전달된 좌표값
window.scrollBy(x,y)
//전달된 좌표값으로 이동
// window.scrollTo({x, y, smooth})
window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
