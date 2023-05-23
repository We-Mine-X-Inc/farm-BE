"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashRateSchema = void 0;
const wemine_apis_1 = require("wemine-apis");
exports.HashRateSchema = {
    unit: { type: Number, enum: wemine_apis_1.HashRateUnitType },
    quantity: { type: Number },
};
//# sourceMappingURL=hash-rate.model.js.map