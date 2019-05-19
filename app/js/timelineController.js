angular.module('timeline')
	.controller('TimelineController', function ($scope, TimelineService) {
		$scope.comprou = [];
		$scope.comprou_produto = [];
		$scope.arrayIdsTransacoes = []
		$scope.arrayTemp = [];
		$scope.historicos = [];

		TimelineService.getHistory().then(function (returnApi) {
			$scope.eventos = returnApi.events.sort(function (a, b) {
				if (a.timestamp > b.timestamp) {
					return 1
				} else if (a.timestamp < b.timestamp) {
					return -1
				} else {
					return 0;
				}
			});

			console.log($scope.eventos);

			$scope.comprou = _.filter($scope.eventos, function (filtro) {
				return filtro.event === 'comprou';
			});

			$scope.comprou_produto = _.filter($scope.eventos, function (filtro) {
				return filtro.event === 'comprou-produto';
			});

			
			// filtra os produtos pelo id_transaction

		}).catch(function (error) {
			console.error(error);
		})

	})