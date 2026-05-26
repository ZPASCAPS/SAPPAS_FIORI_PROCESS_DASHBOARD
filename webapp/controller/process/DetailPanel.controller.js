/**
 * DetailPanel.controller.js
 *
 * 역할:
 * - 선택된 모듈 또는 프로세스 단계의 상세 정보 영역을 표시한다.
 *
 * 주요 기능:
 * - dashboard 모델의 detailTitle, detailDescription 바인딩
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.process.DetailPanel", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");
        }
    });
});
