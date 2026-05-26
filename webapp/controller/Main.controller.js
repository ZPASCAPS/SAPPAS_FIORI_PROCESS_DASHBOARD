/**
 * Main.controller.js
 *
 * 역할:
 * - 전체 대시보드의 공통 초기화와 공유 모델 연결만 담당한다.
 * - 레이아웃 배치는 Main.view.xml, 기능 로직은 features Controller에서 처리한다.
 *
 * 주요 기능:
 * - dashboard 공유 모델을 Main View에 연결
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.Main", {
        /**
         * Component에 등록된 dashboard 모델을 Main View에 연결한다.
         */
        onInit: function () {
            var oDashboardModel = this.getOwnerComponent().getModel("dashboard");
            this.getView().setModel(oDashboardModel, "dashboard");
        }
    });
});
