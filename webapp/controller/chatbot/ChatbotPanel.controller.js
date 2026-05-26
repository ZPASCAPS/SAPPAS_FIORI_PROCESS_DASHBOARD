/**
 * ChatbotPanel.controller.js
 *
 * 역할:
 * - 오른쪽 챗봇(AI Assistant) 패널을 담당한다.
 *
 * 주요 기능:
 * - 사용자 메시지 입력 및 더미 응답 표시
 * - 추후 자체 챗봇 API 연동 지점
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sappas/processdashboard/util/DashboardHelper"
], function (Controller, DashboardHelper) {
    "use strict";

    return Controller.extend("sappas.processdashboard.controller.chatbot.ChatbotPanel", {
        onInit: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            this.getView().setModel(oDashboardModel, "dashboard");
        },

        /**
         * 사용자 메시지를 chatMessages에 추가하고 더미 봇 응답을 반환한다.
         */
        onSendMessage: function () {
            var oDashboardModel = DashboardHelper.getDashboardModel(this);
            var sInput = (oDashboardModel.getProperty("/chatInput") || "").trim();

            if (!sInput) {
                return;
            }

            var aMessages = oDashboardModel.getProperty("/chatMessages") || [];
            var iNextId = aMessages.length + 1;

            aMessages.push({
                id: "MSG" + String(iNextId).padStart(3, "0"),
                sender: "user",
                text: sInput
            });
            aMessages.push({
                id: "MSG" + String(iNextId + 1).padStart(3, "0"),
                sender: "bot",
                text: "현재는 더미 응답입니다. 추후 AI Assistant API와 연동됩니다."
            });

            oDashboardModel.setProperty("/chatMessages", aMessages);
            oDashboardModel.setProperty("/chatInput", "");
        }
    });
});
