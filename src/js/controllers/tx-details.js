(function() {
    'use strict';

    function TxDetailsCtrl($http, $stateParams, apiService) {
        var ctrl = this;
        ctrl.id = $stateParams.id;

        activate();

        function activate() {
            $http.get(apiService.transactions.info(ctrl.id))
                .success(function(tx) {

                    ctrl.details = tx;

                    console.log(tx);

                    if (tx.feeAsset) {
                        $http.get(apiService.transactions.info(tx.feeAsset))
                            .success(function(data) {
                                ctrl.details.assetDecimals = data.decimals;
                            })
                    } else {
                        ctrl.details.assetDecimals = 8;
                        ctrl.details.feeAsset = "WAVES"
                    }
                });
        }
    }

    angular.module('web').controller('TxDetailsCtrl', TxDetailsCtrl);
})();
