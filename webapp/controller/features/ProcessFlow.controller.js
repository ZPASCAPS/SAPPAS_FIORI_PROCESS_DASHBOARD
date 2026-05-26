/**
 * ProcessFlow.controller.js
 *
 * 역할:
 * - 중앙 SAP 업무 프로세스 순서도와 선택 항목 상세 정보를 표시한다.
 *
 * 주요 기능:
 * - 선택된 모듈에 맞는 프로세스 단계를 가로 순서도로 렌더링
 * - 프로세스 단계 클릭 시 dashboard 공유 모델의 상세 정보 갱신
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.features.ProcessFlow", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");

            this._fnOnDashboardChange = this._onDashboardChange.bind(this);
            oDashboardModel.attachPropertyChange(this._fnOnDashboardChange);
            this._refreshProcessSteps();
        },

        /**
         * dashboard 모델 변경 시 현재 모듈의 프로세스 단계 목록을 갱신한다.
         */
        _onDashboardChange: function (oEvent) {
            var sPath = oEvent.getParameter("path");
            if (sPath === "/selectedModuleId" || sPath === "/selectedStepId") {
                this._refreshProcessSteps();
            }
        },

        /**
         * 선택된 모듈의 프로세스 단계를 currentProcessSteps 경로에 바인딩한다.
         */
        _refreshProcessSteps: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            var sModuleId = oDashboardModel.getProperty("/selectedModuleId");
            var aSteps = DashboardHelper.getProcessSteps(oDashboardModel, sModuleId);
            var aCurrentSteps = aSteps.map(function (oStep, iIndex) {
                return {
                    id: oStep.id,
                    title: oStep.title,
                    state: oStep.state,
                    isLast: iIndex === aSteps.length - 1
                };
            });

            oDashboardModel.setProperty("/currentProcessSteps", aCurrentSteps);
        },

        /**
         * 프로세스 단계 클릭 시 선택 단계와 상세 설명을 갱신한다.
         */
        onStepPress: function (oEvent) {
            var oSource = oEvent.getSource();
            var oContext = oSource.getBindingContext("dashboard");
            var sStepId = oContext.getProperty("id");
            var sTitle = oContext.getProperty("title");
            var oDashboardModel = DashboardHelper.getDashboardModel(this);

            oDashboardModel.setProperty("/selectedStepId", sStepId);
            oDashboardModel.setProperty("/detailTitle", sTitle);
            oDashboardModel.setProperty("/detailDescription", sTitle + " 단계 상세 정보가 여기에 표시됩니다.");
        },

        onExit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            if (oDashboardModel && this._fnOnDashboardChange) {
                oDashboardModel.detachPropertyChange(this._fnOnDashboardChange);
            }
        }
    });
});
