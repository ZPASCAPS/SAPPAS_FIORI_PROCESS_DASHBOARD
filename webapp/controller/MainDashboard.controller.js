/**
 * MainDashboard.controller.js
 *
 * 역할:
 * - 메인 대시보드 화면의 뼈대 레이아웃만 담당한다.
 * - 왼쪽 ModuleSideNav, 중앙 ProcessFlow/DetailPanel, 오른쪽 ChatbotPanel을 배치한다.
 *
 * 주요 기능:
 * - dashboard 공유 모델을 하위 뷰에 전달
 * - 세부 이벤트는 각 하위 컨트롤러에서 처리
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.MainDashboard", {
        /**
         * dashboard 모델을 하위 XMLView에 연결한다.
         */
        onInit: function () {
            var oDashboardModel = this.getOwnerComponent().getModel("dashboard");
            this.getView().setModel(oDashboardModel, "dashboard");
        }
    });
});
