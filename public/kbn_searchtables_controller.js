import { uiModules } from 'ui/modules';
import { assign } from 'lodash';

// get the kibana/kbn_searchtables module, and make sure that it requires the "kibana" module if it
// didn't already
const module = uiModules.get('kibana/kbn_searchtables', ['kibana']);

// add a controller to tha module, which will transform the esResponse into a
// tabular format that we can pass to the table directive
module.controller('KbnSearchTablesVisController', function ($timeout, $scope) {
  const uiStateSort = ($scope.uiState) ? $scope.uiState.get('vis.params.sort') : {};
  assign($scope.vis.params.sort, uiStateSort);

  $scope.sort = $scope.vis.params.sort;
  $scope.$watchCollection('sort', function (newSort) {
    $scope.uiState.set('vis.params.sort', newSort);
  });

   $scope.doSearch = function(id){
       $scope.inputSearch = $("#inputSearch_" + id).val();
   }

  /**
   * Recreate the entire table when:
   * - the underlying data changes (esResponse)
   * - one of the view options changes (vis.params)
   */
  $scope.$watchMulti(['esResponse', 'inputSearch'], function (resp) {
    //VERY IMPORTANT IN ORDER TO RE-RENDER THE TABLE
    $scope.renderAgain = false;
    ////////////////////////////////////////////
    let tableGroups = $scope.tableGroups = null;
    let hasSomeRows = $scope.hasSomeRows = null;

    if (resp) {
      //IMPORTANT COPY THE OBJECT
      tableGroups = angular.extend(resp[0])
      // Check if exist
      if(tableGroups.tables.length == 0){
        $scope.hasSomeRows = false;
        return
      }
      if(!tableGroups.tables[0].rows_default){
        tableGroups.tables[0].rows_default = tableGroups.tables[0].rows;
      }
      //////////////////////////
      if(!$scope.inputSearch){
        $scope.inputSearch = "";
      }
      //Logic to search
      var newrows = []
      for (var i = 0; i < tableGroups.tables[0].rows_default.length; i++) {
        for (var j = 0; j < tableGroups.tables[0].rows_default[i].length; j++) {
          if(typeof tableGroups.tables[0].rows_default[i][j].key === 'string'){
            if(tableGroups.tables[0].rows_default[i][j].key.includes($scope.inputSearch)){
              newrows.push(tableGroups.tables[0].rows_default[i])
              break;
            }
          }
        }
      }

      tableGroups.tables[0].rows = newrows;
      /////

      hasSomeRows = tableGroups.tables.some(function haveRows(table) {
        if (table.tables) return table.tables.some(haveRows);
        return table.rows.length > 0;
      });

      $scope.renderComplete();
    }

    $scope.hasSomeRows = hasSomeRows;
    if (hasSomeRows) {
      $scope.tableGroups = tableGroups;
      $timeout(function() {
        $scope.$apply();
        $scope.renderAgain = true;
      })
    }
  });
});
