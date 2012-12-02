if (Meteor.isClient) {
  Meteor.startup(function () {
      
    $('#view').html(Template.realty({}));
    $('ul#master-nav li a').click(function(e) {
      var id = this.id;
      $('#view').html(Template[id]({}));
    });

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
