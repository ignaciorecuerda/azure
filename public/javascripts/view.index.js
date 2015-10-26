//aqui va toda  la parte cliente de la aplicacion

$(function() {
  $('#right-column').hide();
  $('li.hero-name a').click(function() {  
    var name = $(this).text();    
    $('#right-column h2').text(name);  
    $('#facts li').remove();    
    //descarga datos del servidor
    $.getJSON('/hero/' + name, function(data) {
      for (var i = 0; i < data.length; i++) {
        $('<li>').appendTo('#facts').text(data[i]);
      }
    });
    
    $('#right-column').show();    
    return false;
  });
  
  $('#add-new-fact').click(function() {
    var name = $('#right-column h2').text();
    var fact = $('#new-fact').val();
  
    //enviamos los datos en json a la ruta /hero/add-fact
    $.ajax({
      type: "POST",
      url: "/hero/add-fact",
      data: JSON.stringify({ name: name, fact: fact }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        $('<li>').appendTo('#facts').text(fact);
        $('#new-fact').val('');
      },
      error: function(err) {
        var msg = 'Status: ' + err.status + ': ' + err.responseText;
        alert(msg);
      }
    });
    return false;
  });
});
