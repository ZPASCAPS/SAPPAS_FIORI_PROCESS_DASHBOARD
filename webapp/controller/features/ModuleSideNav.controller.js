/**
 * ModuleSideNav.controller.js
 *
 * 역할:
 * - 왼쪽 모듈별 사이드 메뉴를 담당한다.
 *
 * 주요 기능:
 * - SD, MM, PP 등 모듈 목록 표시
 * - 모듈 선택 시 dashboard 공유 모델 업데이트
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.features.ModuleSideNav", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");

            this._fnSyncModuleSelection = this._syncModuleSelection.bind(this);
            oDashboardModel.attachPropertyChange(this._fnSyncModuleSelection);
            this._syncModuleSelection();
        },

        /**
         * 모듈 선택 시 dashboard 모델의 선택 상태와 상세 정보를 갱신한다.
         */
        onModuleSelect: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            if (!oItem) {
                return;
            }

            var oContext = oItem.getBindingContext("dashboard");
            var sModuleId = oContext.getProperty("id");
            var sTitle = oContext.getProperty("title");
            var oDashboardModel = DashboardHelper.getDashboardModel(this);

            oDashboardModel.setProperty("/selectedModuleId", sModuleId);
            oDashboardModel.setProperty("/selectedStepId", "");
            oDashboardModel.setProperty("/detailTitle", sTitle);
            oDashboardModel.setProperty("/detailDescription", sTitle + " 업무 프로세스를 확인할 수 있습니다.");
        },

        /**
         * dashboard 모델의 selectedModuleId와 리스트 선택 상태를 동기화한다.
         */
        _syncModuleSelection: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            var sSelectedModuleId = oDashboardModel.getProperty("/selectedModuleId");
            var oList = this.byId("moduleList");
            var aItems = oList.getItems();
            var oSelectedItem = aItems.find(function (oItem) {
                return oItem.getBindingContext("dashboard").getProperty("id") === sSelectedModuleId;
            });

            if (oSelectedItem) {
                oList.setSelectedItem(oSelectedItem, true);
            }
        },

        onExit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            if (oDashboardModel && this._fnSyncModuleSelection) {
                oDashboardModel.detachPropertyChange(this._fnSyncModuleSelection);
            }
        }
    });
});
