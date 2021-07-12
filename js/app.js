var exos = [
  {id: 'exo1', nav: '#1', title: 'Exo 01'},
  {id: 'exo2', nav: '#2', title: 'Exo 02'},
  {id: 'exo3', nav: '#3', title: 'Exo 03'},
  {id: 'exo4', nav: '#4', title: 'Exo 04'}
];

var app = {
  init: function () {
    var target = $('#nav');
    $('<a href="index.html">Accueil</a>').appendTo(target);
    $.each(exos, function(index) {
      var uri = exos[index].file || 'exo'+(index+1)+'.html';
      $('<a>', {
        href: uri,
        text: exos[index].nav || 'Exo'+(index+1),
      }).appendTo(target);
      if ($('.exo').length) {
        var link = $('<a>', {
          href: exos[index].file || uri,
          class: 'lien-epreuve',
          text: exos[index].title || 'Lancer l\'exercice',
        });
        $('.exo').eq(index).append(link);
      }
    });

    //active
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('#nav a').each(function(i,e) {
      var cur = $(e);
      if (cur.attr('href') === filename) cur.addClass('active');
    });
  },
};

var check = {
  init: function() {
    check.area = $('#test');
    check.container = $('#container');
    check.area.removeClass();
  },
  clean: function(){
    check.area.removeClass();
  },
  default: function() {
    var success = false;

    check.display(success);
  },
  exo3: function(fn) {
    check.init();
    if (
      fn(-42.42) === false &&
      fn(0) === false &&
      fn('pas un nombre') === false &&
      fn(43.2673) === 5881.25 &&
      fn(68) === 14526.72
    ) check.area.addClass('success');
    else check.area.addClass('error');
  },
  display: function(success) {
    $('#test').removeClass().addClass(success ? 'success' : 'error');
  }
};

// Utilitaires pour les exercices.
var roundToTwo = function(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

$(app.init);
