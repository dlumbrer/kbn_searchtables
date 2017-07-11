import { uiModules } from 'ui/modules';
import SearchTablesVisParamsTemplate from 'plugins/kbn_searchtables/kbn_searchtables_params.html';

uiModules.get('kibana/kbn_searchtables')
.directive('searchTablesVisParams', function () {
  return {
    restrict: 'E',
    template: SearchTablesVisParamsTemplate,
    link: function ($scope) {
      $scope.totalAggregations = ['sum', 'avg', 'min', 'max', 'count'];

      $scope.$watchMulti([
        'vis.params.showPartialRows',
        'vis.params.showMeticsAtAllLevels'
      ], function () {
        if (!$scope.vis) return;

        const params = $scope.vis.params;
        if (params.showPartialRows || params.showMeticsAtAllLevels) {
          $scope.metricsAtAllLevels = true;
        } else {
          $scope.metricsAtAllLevels = false;
        }
      });
    }
  };
});
