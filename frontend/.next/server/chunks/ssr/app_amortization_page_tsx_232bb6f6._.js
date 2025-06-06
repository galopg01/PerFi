module.exports = {

"[project]/app/amortization/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Amortization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Amortization() {
    const [showTable, setShowTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-8 px-4 max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-primary dark:text-primary-dark",
                        children: "Bienvenido a Amortizacion"
                    }, void 0, false, {
                        fileName: "[project]/app/amortization/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-light dark:text-muted-dark text-lg mt-2",
                        children: "Calcula tu amortización y optimiza tu hipoteca con nuestras herramientas."
                    }, void 0, false, {
                        fileName: "[project]/app/amortization/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn",
                onClick: ()=>setShowTable((prev)=>!prev),
                children: showTable ? "Ocultar tabla" : "Mostrar tabla"
            }, void 0, false, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            showTable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: [
                    {
                        key: 'period',
                        label: 'Período'
                    },
                    {
                        key: 'payment',
                        label: 'Pago'
                    },
                    {
                        key: 'principal',
                        label: 'Principal'
                    },
                    {
                        key: 'interest',
                        label: 'Interés'
                    },
                    {
                        key: 'balance',
                        label: 'Capital restante'
                    }
                ],
                data: [
                    {
                        period: '1',
                        payment: '$500',
                        principal: '$400',
                        interest: '$100',
                        balance: '$9600'
                    },
                    {
                        period: '2',
                        payment: '$500',
                        principal: '$404',
                        interest: '$96',
                        balance: '$9196'
                    },
                    {
                        period: '3',
                        payment: '$500',
                        principal: '$408',
                        interest: '$92',
                        balance: '$8792'
                    },
                    {
                        period: '4',
                        payment: '$500',
                        principal: '$412',
                        interest: '$88',
                        balance: '$8380'
                    },
                    {
                        period: '5',
                        payment: '$500',
                        principal: '$416',
                        interest: '$84',
                        balance: '$7964'
                    },
                    {
                        period: '6',
                        payment: '$500',
                        principal: '$420',
                        interest: '$80',
                        balance: '$7544'
                    },
                    {
                        period: '7',
                        payment: '$500',
                        principal: '$424',
                        interest: '$76',
                        balance: '$7120'
                    },
                    {
                        period: '8',
                        payment: '$500',
                        principal: '$428',
                        interest: '$72',
                        balance: '$6692'
                    },
                    {
                        period: '9',
                        payment: '$500',
                        principal: '$432',
                        interest: '$68',
                        balance: '$6260'
                    },
                    {
                        period: '10',
                        payment: '$500',
                        principal: '$436',
                        interest: '$64',
                        balance: '$5824'
                    },
                    {
                        period: '11',
                        payment: '$500',
                        principal: '$440',
                        interest: '$60',
                        balance: '$5384'
                    },
                    {
                        period: '12',
                        payment: '$500',
                        principal: '$444',
                        interest: '$56',
                        balance: '$4940'
                    },
                    {
                        period: '13',
                        payment: '$500',
                        principal: '$448',
                        interest: '$52',
                        balance: '$4492'
                    },
                    {
                        period: '14',
                        payment: '$500',
                        principal: '$452',
                        interest: '$48',
                        balance: '$4040'
                    },
                    {
                        period: '15',
                        payment: '$500',
                        principal: '$456',
                        interest: '$44',
                        balance: '$3584'
                    },
                    {
                        period: '16',
                        payment: '$500',
                        principal: '$460',
                        interest: '$40',
                        balance: '$3124'
                    },
                    {
                        period: '17',
                        payment: '$500',
                        principal: '$464',
                        interest: '$36',
                        balance: '$2660'
                    },
                    {
                        period: '18',
                        payment: '$500',
                        principal: '$468',
                        interest: '$32',
                        balance: '$2192'
                    },
                    {
                        period: '19',
                        payment: '$500',
                        principal: '$472',
                        interest: '$28',
                        balance: '$1720'
                    },
                    {
                        period: '20',
                        payment: '$500',
                        principal: '$476',
                        interest: '$24',
                        balance: '$1244'
                    },
                    {
                        period: '21',
                        payment: '$500',
                        principal: '$480',
                        interest: '$20',
                        balance: '$764'
                    },
                    {
                        period: '22',
                        payment: '$500',
                        principal: '$484',
                        interest: '$16',
                        balance: '$280'
                    },
                    {
                        period: '23',
                        payment: '$500',
                        principal: '$488',
                        interest: '$12',
                        balance: '-$208'
                    },
                    {
                        period: '24',
                        payment: '$500',
                        principal: '$492',
                        interest: '$8',
                        balance: '-$700'
                    },
                    {
                        period: '25',
                        payment: '$500',
                        principal: '$496',
                        interest: '$4',
                        balance: '-$1196'
                    },
                    {
                        period: '26',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$1696'
                    },
                    {
                        period: '27',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$2196'
                    },
                    {
                        period: '28',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$2696'
                    },
                    {
                        period: '29',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$3196'
                    },
                    {
                        period: '30',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$3696'
                    },
                    {
                        period: '31',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$4196'
                    },
                    {
                        period: '32',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$4696'
                    },
                    {
                        period: '33',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$5196'
                    },
                    {
                        period: '34',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$5696'
                    },
                    {
                        period: '35',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$6196'
                    },
                    {
                        period: '36',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$6696'
                    },
                    {
                        period: '37',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$7196'
                    },
                    {
                        period: '38',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$7696'
                    },
                    {
                        period: '39',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$8196'
                    },
                    {
                        period: '40',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$8696'
                    },
                    {
                        period: '41',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$9196'
                    },
                    {
                        period: '42',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$9696'
                    },
                    {
                        period: '43',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$10196'
                    },
                    {
                        period: '44',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$10696'
                    },
                    {
                        period: '45',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$11196'
                    },
                    {
                        period: '46',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$11696'
                    },
                    {
                        period: '47',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$12196'
                    },
                    {
                        period: '48',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$12696'
                    },
                    {
                        period: '49',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$13196'
                    },
                    {
                        period: '50',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$13696'
                    },
                    {
                        period: '51',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$14196'
                    },
                    {
                        period: '52',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$14696'
                    },
                    {
                        period: '53',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$15196'
                    },
                    {
                        period: '54',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$15696'
                    },
                    {
                        period: '55',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$16196'
                    },
                    {
                        period: '56',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$16696'
                    },
                    {
                        period: '57',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$17196'
                    },
                    {
                        period: '58',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$17696'
                    },
                    {
                        period: '59',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$18196'
                    },
                    {
                        period: '60',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$18696'
                    },
                    {
                        period: '61',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$19196'
                    },
                    {
                        period: '62',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$19696'
                    },
                    {
                        period: '63',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$20196'
                    },
                    {
                        period: '64',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$20696'
                    },
                    {
                        period: '65',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$21196'
                    },
                    {
                        period: '66',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$21696'
                    },
                    {
                        period: '67',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$22196'
                    },
                    {
                        period: '68',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$22696'
                    },
                    {
                        period: '69',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$23196'
                    },
                    {
                        period: '70',
                        payment: '$500',
                        principal: '$500',
                        interest: '$0',
                        balance: '-$23696'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-light dark:text-muted-dark",
                    children: "Haz clic en el botón para mostrar la tabla de amortización."
                }, void 0, false, {
                    fileName: "[project]/app/amortization/page.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/amortization/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_amortization_page_tsx_232bb6f6._.js.map