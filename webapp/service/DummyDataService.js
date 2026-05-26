/**
 * DummyDataService.js
 *
 * 역할:
 * - JSONModel 더미 데이터를 제공한다.
 * - 추후 SAP OData 연동 시 이 서비스를 OData 서비스로 교체한다.
 *
 * 주요 기능:
 * - 대시보드 초기 데이터 반환
 * - 모듈별 프로세스 단계 조회
 */
sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    var sDataPath = "sappas/processdashboard/model/modules.json";

    return {
        /**
         * modules.json을 비동기로 로드하여 대시보드 초기 데이터를 반환한다.
         * Component 초기화 시 동기 데이터가 필요하므로 정적 객체도 함께 제공한다.
         */
        getDashboardData: function () {
            return {
                modules: [
                    { id: "SD", title: "Sales & Distribution", subtitle: "수주 및 판매", icon: "sap-icon://sales-order" },
                    { id: "MM", title: "Materials Management", subtitle: "자재 관리", icon: "sap-icon://product" },
                    { id: "PP", title: "Production Planning", subtitle: "생산 계획", icon: "sap-icon://factory" },
                    { id: "INV", title: "Inventory", subtitle: "재고 관리", icon: "sap-icon://inventory" },
                    { id: "PROC", title: "Procurement", subtitle: "구매", icon: "sap-icon://cart" },
                    { id: "DEC", title: "Decision", subtitle: "의사결정", icon: "sap-icon://decision" }
                ],
                processSteps: {
                    SD: [
                        { id: "SD01", title: "Sales Inquiry", state: "Positive" },
                        { id: "SD02", title: "Quotation", state: "Neutral" },
                        { id: "SD03", title: "Sales Order", state: "Neutral" },
                        { id: "SD04", title: "Delivery", state: "Neutral" },
                        { id: "SD05", title: "Billing", state: "Neutral" }
                    ],
                    MM: [
                        { id: "MM01", title: "Purchase Requisition", state: "Positive" },
                        { id: "MM02", title: "Purchase Order", state: "Neutral" },
                        { id: "MM03", title: "Goods Receipt", state: "Neutral" },
                        { id: "MM04", title: "Invoice Verification", state: "Neutral" }
                    ],
                    PP: [
                        { id: "PP01", title: "Demand Planning", state: "Positive" },
                        { id: "PP02", title: "MRP Run", state: "Neutral" },
                        { id: "PP03", title: "Production Order", state: "Neutral" },
                        { id: "PP04", title: "Confirmation", state: "Neutral" }
                    ],
                    INV: [
                        { id: "INV01", title: "Stock Overview", state: "Positive" },
                        { id: "INV02", title: "Goods Movement", state: "Neutral" },
                        { id: "INV03", title: "Physical Inventory", state: "Neutral" }
                    ],
                    PROC: [
                        { id: "PROC01", title: "Vendor Selection", state: "Positive" },
                        { id: "PROC02", title: "RFQ", state: "Neutral" },
                        { id: "PROC03", title: "PO Creation", state: "Neutral" }
                    ],
                    DEC: [
                        { id: "DEC01", title: "KPI Review", state: "Positive" },
                        { id: "DEC02", title: "Scenario Analysis", state: "Neutral" },
                        { id: "DEC03", title: "Approval", state: "Neutral" }
                    ]
                },
                selectedModuleId: "SD",
                selectedStepId: "",
                currentProcessSteps: [],
                detailTitle: "Sales & Distribution",
                detailDescription: "모듈을 선택하면 해당 업무 프로세스와 상세 정보가 표시됩니다.",
                chatMessages: [
                    { id: "MSG001", sender: "bot", text: "안녕하세요. SAP 업무 프로세스에 대해 질문해 주세요." }
                ],
                chatInput: ""
            };
        },

        /**
         * modules.json 파일 경로를 반환한다. (OData 전환 시 참조용)
         */
        getDataPath: function () {
            return sDataPath;
        },

        /**
         * JSONModel을 생성하여 반환한다.
         */
        createModel: function () {
            return new JSONModel(this.getDashboardData());
        }
    };
});
