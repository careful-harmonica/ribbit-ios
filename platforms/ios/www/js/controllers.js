angular.module('starter.controllers', [])

.controller('FeedbackCtrl', function($scope) {
	
	$scope.feedbackItems = [
		{
			title: 'THRWOAAME',
			value: 'abc',
			intensity: 'positive'
		},
		{
			title: 'PTWGFMD',
			value: '',
			intensity: 'calm'
		},
		{
			title: 'FTWEFM',
			value: '',
			intensity: 'energized'
		},
		{
			title: 'WNTR',
			value: '',
			intensity: 'stable'
		},
		{
			title: 'BTWU',
			value: '',
			intensity: 'dark'
		},
		{
			title: 'BHRFSOME',
			value: '',
			intensity: 'assertive'
		}
	];

	$scope.feedbackAction = function(action) {
		console.log(action);
	};

})

.controller('AccountCtrl', function($scope) {

});
