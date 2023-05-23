"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uptimeTickSchema = new mongoose_1.Schema({
    datetime: {
        type: Date,
        required: true,
    },
});
const uptimeTickModel = (0, mongoose_1.model)("UptimeTick", uptimeTickSchema);
exports.default = uptimeTickModel;
//# sourceMappingURL=uptime-tick.model.js.map