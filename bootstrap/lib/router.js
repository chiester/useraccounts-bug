Router.configure({
	layoutTemplate: 'masterLayout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'pageNotFound',
	yieldTemplates: {
		nav: {
			to: 'nav'
		},
		footer: {
			to: 'footer'
		},
	}
});

Router.map(function() {
	this.route('home', {
		path: '/',
		onBeforeAction: function() {
			if (Meteor.user()) {
				Router.go('private');
			} else {
        Router.go('home');
      }
			this.next();
		}
	});

	this.route('private');
});

Router.plugin('ensureSignedIn', {
	only: ['private']
});
