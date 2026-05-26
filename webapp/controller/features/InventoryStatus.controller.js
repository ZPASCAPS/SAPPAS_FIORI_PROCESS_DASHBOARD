/**
 * InventoryStatus.controller.js
 *
 * 역할:
 * - 재고 현황(Inventory Status) 리포트 기능을 담당한다.
 *
 * 주요 기능:
 * - dashboard 공유 모델 연결
 * - 추후 재고 OData 데이터 바인딩 지점
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.features.InventoryStatus", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");
        }
    });
});
