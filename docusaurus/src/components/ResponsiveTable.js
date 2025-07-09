"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ResponsiveTable;
var react_1 = require("react");
function ResponsiveTable(_a) {
    var children = _a.children, className = _a.className;
    return (<div className={['responsive-table', className].filter(Boolean).join(' ')}>
      {children}
    </div>);
}
