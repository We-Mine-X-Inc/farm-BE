"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueDivision = exports.revenueDifference = exports.revenueSum = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importDefault(require("assert"));
const INCONGRUENT_COIN_TYPE_MSG = "Revenue coinTypes must be equal.";
function revenueSum(augend, addend) {
    (0, assert_1.default)(augend.coinType == addend.coinType, generateCoinTypeError(augend.coinType, addend.coinType));
    return {
        amount: augend.amount + addend.amount,
        coinType: augend.coinType,
    };
}
exports.revenueSum = revenueSum;
function revenueDifference(minuend, subtrahend) {
    (0, assert_1.default)(minuend.coinType == subtrahend.coinType, generateCoinTypeError(minuend.coinType, subtrahend.coinType));
    return {
        amount: minuend.amount - subtrahend.amount,
        coinType: minuend.coinType,
    };
}
exports.revenueDifference = revenueDifference;
function revenueDivision(dividend, divisor) {
    (0, assert_1.default)(dividend.coinType == divisor.coinType, generateCoinTypeError(dividend.coinType, divisor.coinType));
}
exports.revenueDivision = revenueDivision;
function generateCoinTypeError(coinType1, coinType2) {
    return `${INCONGRUENT_COIN_TYPE_MSG} Type1: ${coinType1}, Type2: ${coinType2}.`;
}
//# sourceMappingURL=revenue-operations.js.map