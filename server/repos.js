/*Accounts.onCreateUser(function(options, user){
	var accessToken = user.services.github.accessToken,
		result,
		profile;
		
	    result = Meteor.http.get("https://api.github.com/user", {
	  		headers: {"User-Agent": "Meteor/1.0"},

	      params: {
	        access_token: accessToken
	      }
	    });
		
		if (result.error)
			throw result.error;
			
		profile = _.pick(result.data,
			"login",
			"name",
			"avatar_url",
			"url",
			"company",
			"blog",
			"location",
			"email",
			"bio",
			"html_url",
			"followers_url",
			"following_url",
			"repos_url",
			"public_repos", //count
			"followers", //count
			"following"); //count
			
			user.profile= profile;
			
			return user;
			
}

function(){
	var accessToken = user.services.github.accessToken,
	result,
	repos;
	
	result = Meteor.http.get("https://api.github.com/user/repos/"), {
		headers: {"User-Agent": "Meteor/1.0"},
		
		params: {
			access_token:accessToken
		}
	});
	
	if (result.error)
		throw result.error;
		
		repos = _.pick(result.data,
			
		)
}

);
 */

