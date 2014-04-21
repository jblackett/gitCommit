/**
* Templates
*/

Template.user_loggedout.events({
	"click #login": function(e, tmpl) {
		Meteor.loginWithGithub({
			requestPermissions: ['user', 'public_repo']
		}, function(err){
			if(err) {
				//error handling
			}else {
				//show a successfull login in alert/message
			}
		});
	}
});

Template.user_loggedin.events({
	"click #logout": function(e,tmpl) {
		Meteor.logout(function (err){
			if (err) {
				//error handling
			}
			else {
				//show a successfull logout alert/message
			}
		});
	}
});


Template.messages.messages = function (){
	return Messages.find({}, {sort: { time: 1}});
}

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
        var name = 'Anonymous';
      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}