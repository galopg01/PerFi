(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GenericTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const PAGE_SIZE_OPTIONS = [
    10,
    20,
    50,
    100
];
function GenericTable({ columns, data, pageSize = 10 }) {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pageSize);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    // Helper for pagination numbers (simple version)
    const getPages = ()=>{
        const pages = [];
        if (totalPages <= 5) {
            for(let i = 1; i <= totalPages; i++)pages.push(i);
        } else {
            if (page <= 3) {
                pages.push(1, 2, 3, 4, 5);
            } else if (page >= totalPages - 2) {
                for(let i = totalPages - 4; i <= totalPages; i++)pages.push(i);
            } else {
                for(let i = page - 2; i <= page + 2; i++)pages.push(i);
            }
        }
        return pages;
    };
    // Reset page if rowsPerPage changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "GenericTable.useEffect": ()=>{
            setPage(1);
        }
    }["GenericTable.useEffect"], [
        rowsPerPage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-x-auto shadow-md sm:rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-sm text-left bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "text-xs uppercase bg-background-light dark:bg-background-dark text-text-light dark:text-muted-dark border-b border-border-light dark:border-border-dark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "px-6 py-3 font-semibold text-center",
                                    children: col.label
                                }, col.key, false, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/table.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/table.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: paginatedData.map((row, i)=>{
                            const globalIndex = (page - 1) * rowsPerPage + i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors " + (globalIndex % 12 === 0 ? "bg-primary !text-text-dark" : i % 2 === 1 ? "text-muted-light dark:text-text-muted-dark bg-background-light dark:bg-background-dark" : "text-muted-light dark:text-text-muted-dark"),
                                children: columns.map((col, j)=>j === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "row",
                                        className: "px-6 py-2 font-medium whitespace-nowrap text-center",
                                        children: row[col.key]
                                    }, col.key, false, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-2 text-center",
                                        children: row[col.key]
                                    }, col.key, false, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 79,
                                        columnNumber: 21
                                    }, this))
                            }, i, false, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/table.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/table.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "w-full flex flex-col items-start justify-between border-x border-b border-border-light dark:border-border-dark p-4 space-y-3 md:flex-row md:items-center md:space-y-0",
                "aria-label": "Table navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ml-2 font-semibold text-xs text-muted-light dark:text-muted-dark flex items-center gap-1",
                                children: [
                                    "Rows per page:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "ml-1 w-20 rounded border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-xs text-text-light dark:text-text-dark px-2 py-1",
                                        value: rowsPerPage,
                                        onChange: (e)=>setRowsPerPage(Number(e.target.value)),
                                        children: PAGE_SIZE_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: opt,
                                                children: opt
                                            }, opt, false, {
                                                fileName: "[project]/app/components/table.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-normal text-muted-light dark:text-muted-dark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-text-light dark:text-text-dark",
                                        children: [
                                            (page - 1) * rowsPerPage + 1,
                                            "-",
                                            Math.min(page * rowsPerPage, data.length)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "of",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-text-light dark:text-text-dark",
                                        children: data.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/table.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "inline-flex -space-x-px text-sm rounded-lg overflow-hidden border border-border-light dark:border-border-dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage(1),
                                    disabled: page === 1,
                                    className: `flex items-center justify-center px-3 h-8 ms-0 leading-tight
                text-muted-light dark:text-muted-dark
                !bg-surface-light !dark:bg-surface-dark
                border border-e-0 border-border-light dark:border-border-dark
                rounded-s-lg
                hover:bg-background-light hover:text-text-light
                dark:hover:bg-background-dark dark:hover:text-text-dark
                ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`,
                                    "aria-label": "Primera página",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Primera"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15 19l-7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/table.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 19l-7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/table.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                    disabled: page === 1,
                                    className: `flex items-center justify-center px-3 h-8 leading-tight
                text-muted-light dark:text-muted-dark
                bg-surface-light dark:bg-surface-dark
                border border-border-light dark:border-border-dark
                hover:bg-background-light hover:text-text-light
                dark:hover:bg-background-dark dark:hover:text-text-dark
                ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`,
                                    "aria-label": "Anterior",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Anterior"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/table.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            getPages().map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPage(Number(p)),
                                        "aria-current": page === p ? "page" : undefined,
                                        className: `flex items-center justify-center px-3 h-8 leading-tight border border-border-light dark:border-border-dark
                  ${page === p ? "text-text-light border-primary font-bold" : "text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark hover:bg-background-light hover:text-text-light dark:hover:bg-background-dark dark:hover:text-text-dark"}`,
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/table.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                    disabled: page === totalPages,
                                    className: `flex items-center justify-center px-3 h-8 leading-tight
                text-muted-light dark:text-muted-dark
                bg-surface-light dark:bg-surface-dark
                border border-border-light dark:border-border-dark
                hover:bg-background-light hover:text-text-light
                dark:hover:bg-background-dark dark:hover:text-text-dark
                ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`,
                                    "aria-label": "Siguiente",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Siguiente"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/table.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage(totalPages),
                                    disabled: page === totalPages,
                                    className: `flex items-center justify-center px-3 h-8 leading-tight
                text-muted-light dark:text-muted-dark
                bg-surface-light dark:bg-surface-dark
                border border-s-0 border-border-light dark:border-border-dark
                rounded-e-lg
                hover:bg-background-light hover:text-text-light
                dark:hover:bg-background-dark dark:hover:text-text-dark
                ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`,
                                    "aria-label": "Última página",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Última"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/table.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M5 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/table.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/table.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/table.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/table.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/table.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/table.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/table.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(GenericTable, "ox6+qJJ4iBcAMTFyP+Rr8J9EbC8=");
_c = GenericTable;
var _c;
__turbopack_context__.k.register(_c, "GenericTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/amortization/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Amortization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Amortization() {
    _s();
    const [showTable, setShowTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-8 px-4 max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-primary dark:text-primary-dark",
                        children: "Tabla de amortización de préstamos"
                    }, void 0, false, {
                        fileName: "[project]/app/amortization/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-light dark:text-muted-dark text-lg mt-2",
                        children: "Introduce los datos de tu préstamo y obtén una tabla detallada de pagos mensuales."
                    }, void 0, false, {
                        fileName: "[project]/app/amortization/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn",
                onClick: ()=>setShowTable((prev)=>!prev),
                children: showTable ? "Ocultar tabla" : "Mostrar tabla"
            }, void 0, false, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            showTable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 26,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/app/amortization/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/amortization/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Amortization, "4pNb5yvTr8x/ykbdkkPHS33mgIs=");
_c = Amortization;
var _c;
__turbopack_context__.k.register(_c, "Amortization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_143ddff2._.js.map