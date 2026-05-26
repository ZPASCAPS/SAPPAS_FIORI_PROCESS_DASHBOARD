/**
 * DashboardHelper.js
 *
 * 역할:
 * - 대시보드 컴포넌트 간 공통 유틸 함수를 제공한다.
 *
 * 주요 기능:
 * - dashboard 모델 조회
 * - 선택된 모듈 정보 조회
 * - 프로세스 단계 목록 조회
 */
sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * 컴포넌트에서 dashboard JSONModel을 반환한다.
         */
        getDashboardModel: function (oController) {
            return oController.getOwnerComponent().getModel("dashboard");
        },

        /**
         * 모듈 ID로 모듈 메타 정보를 찾는다.
         */
        findModuleById: function (oDashboardModel, sModuleId) {
            var aModules = oDashboardModel.getProperty("/modules") || [];
            return aModules.find(function (oModule) {
                return oModule.id === sModuleId;
            });
        },

        /**
         * 선택된 모듈의 프로세스 단계 배열을 반환한다.
         */
        getProcessSteps: function (oDashboardModel, sModuleId) {
            var mProcessSteps = oDashboardModel.getProperty("/processSteps") || {};
            return mProcessSteps[sModuleId] || [];
        },

        /**
         * 프로세스 단계 ID로 단계 정보를 찾는다.
         */
        findStepById: function (oDashboardModel, sModuleId, sStepId) {
            return this.getProcessSteps(oDashboardModel, sModuleId).find(function (oStep) {
                return oStep.id === sStepId;
            });
        }
    };
});
