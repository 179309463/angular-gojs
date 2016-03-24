'use strict';


angular
	.module('ableApp')
	.config(
		[
			'$stateProvider', '$urlRouterProvider', '$locationProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider) {


				$urlRouterProvider.otherwise('diagram');


				$stateProvider
					.state('diagram', {
						url: '/diagram',
						templateUrl: '/diagram.html',
						controller: 'diagramCtrl',
					})
					.state('diagram.asset', {
						url: '/asset/:id',
						templateUrl: '/asset.html',
						controller: 'assetCtrl',
					});

			}
		]
	);


