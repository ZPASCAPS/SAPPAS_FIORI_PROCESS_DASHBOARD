/**
 * MaterialShortage.controller.js
 *
 * 역할:
 * - 자재 부족(Material Shortage) 리포트 기능을 담당한다.
 *
 * 주요 기능:
 * - dashboard 공유 모델 연결
 * - 추후 자재 부족 OData 데이터 바인딩 지점
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.features.MaterialShortage", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");
        }
    });
});
