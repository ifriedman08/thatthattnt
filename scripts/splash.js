$(window).load(function(){

  TTT.renderSplash = function(){
    var logo = $('<div class="logo">');
    var logoFooter = $('<div class="logo footer">');
    var fist1 = $('<img class="fist1" style="visibility:hidden" src="images/TAKE.png">');
    var fist2 = $('<img class="fist2" style="visibility:hidden" src="images/THAT.png">');
    var tnt = $('<h3 class="logo-footer" style="opacity:0">tartes & things</h3>');
    logo.append(fist1);
    logo.append(fist2);
    logoFooter.append(tnt);
    $('section#content').append(logo);
    $('section#content').append(logoFooter);
    setTimeout(function(){
      fist1.css({'visibility':'visible'})
    }, 400);

    setTimeout(function(){
      fist2.css({'visibility':'visible'})
    }, 800);

    setTimeout(function(){
      tnt.animate({'opacity': 1}, 1000)
    }, 1000);
  }();

  TTT.renderPricing = function () {

  };

  TTT.fetchPricing = function () {
    $('#content').load('content/pricing.html')
  }

  $('a#pricing').click(function (event) {
    console.log('clicked pricing');
  })

  $('a.navbar-brand').click(function (event) {
    console.log('clicked brand');
  })
})
