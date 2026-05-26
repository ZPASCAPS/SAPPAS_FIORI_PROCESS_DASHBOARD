/**
 * Component.js
 *
 * 역할:
 * - SAPUI5 애플리케이션 컴포넌트 진입점이다.
 * - 더미 데이터 모델을 초기화하고 라우팅을 시작한다.
 *
 * 주요 기능:
 * - DummyDataService를 통해 JSONModel 더미 데이터 로드
 * - dashboard 공유 모델을 컴포넌트에 등록
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sappas/processdashboard/service/DummyDataService"
], function (UIComponent, JSONModel, DummyDataService) {
    "use strict";

    return UIComponent.extend("sappas.processdashboard.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * 컴포넌트 초기화 시 더미 데이터 모델을 생성하고 라우터를 시작한다.
         */
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this._initDashboardModel();
            this.getRouter().initialize();
        },

        /**
         * DummyDataService에서 더미 데이터를 불러와 dashboard 모델로 등록한다.
         * 추후 OData 연동 시 이 메서드만 교체하면 된다.
         */
        _initDashboardModel: function () {
            var oDashboardModel = new JSONModel(DummyDataService.getDashboardData());
            oDashboardModel.setDefaultBindingMode("TwoWay");
            this.setModel(oDashboardModel, "dashboard");
        }
    });
});
