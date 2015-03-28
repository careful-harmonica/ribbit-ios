angular.module('starter.controllers', [])

.controller('FeedbackCtrl', function($scope, Socket) {
	
	$scope.feedbackItems = [
		{
			title: 'THRWOAAME',
			intensity: 'positive'
		},
		{
			title: 'PTWGFMD',
			intensity: 'calm'
		},
		{
			title: 'FTWEFM',
			intensity: 'energized'
		},
		{
			title: 'WNTR',
			intensity: 'stable'
		},
		{
			title: 'BTWU',
			intensity: 'dark'
		},
		{
			title: 'BHRFSOME',
			intensity: 'assertive'
		}
	];

	$scope.feedbackAction = function(action) {
		console.log(Socket.sendFeedback)
		Socket.sendFeedback(action);
	};

})

.controller('AccountCtrl', function($scope) {

});
