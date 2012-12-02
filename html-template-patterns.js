if (Meteor.isClient) {
  Meteor.startup(function () {
      
    $('#view').html(Template.realty({}));
    $('ul#master-nav li a').click(function(e) {
      var id = this.id;
      $('#view').html(Template[id]({}));
      
      /** below is the active state toggling */
      $('ul#master-nav li').removeClass('active');//clear other actives
      $(this).parent().addClass('active');//add active to the selected li

    });

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
