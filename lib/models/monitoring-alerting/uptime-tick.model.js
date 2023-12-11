"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUptimeTickModel = void 0;
const mongoose_1 = require("mongoose");
const uptimeTickSchema = new mongoose_1.Schema({
    environmentConfigId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    datetime: {
        type: Date,
        required: true,
    },
});
function loadUptimeTickModel(connection) {
    return (connection.models["UptimeTick"] ||
        connection.model("UptimeTick", uptimeTickSchema));
}
exports.loadUptimeTickModel = loadUptimeTickModel;
//# sourceMappingURL=uptime-tick.model.js.map