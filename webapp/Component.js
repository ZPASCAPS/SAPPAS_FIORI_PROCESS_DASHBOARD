/**
 * Component.js
 *
 * 역할:
 * - SAPUI5 애플리케이션 컴포넌트 진입점이다.
 * - 공통 dashboard 모델을 초기화한다.
 *
 * 주요 기능:
 * - models.js를 통해 JSONModel 더미 데이터 로드
 * - dashboard 공유 모델을 컴포넌트에 등록
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sappas/processdashboard/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("sappas.processdashboard.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * 컴포넌트 초기화 시 dashboard 공유 모델을 생성한다.
         */
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(models.createDashboardModel(), "dashboard");
        }
    });
});
