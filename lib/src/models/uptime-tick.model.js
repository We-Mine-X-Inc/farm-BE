"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const uptimeTickSchema = new mongoose_1.Schema({
    datetime: {
        type: Date,
        required: true,
    },
});
const uptimeTickModel = mongoose_1.default.models["UptimeTick"] ||
    (0, mongoose_1.model)("UptimeTick", uptimeTickSchema);
exports.default = uptimeTickModel;
//# sourceMappingURL=uptime-tick.model.js.map