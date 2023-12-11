"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFacilityInfoModel = void 0;
const mongoose_1 = require("mongoose");
const facilityInfoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: Number,
        required: true,
    },
    estPowerUsageInKiloWatts: {
        type: Number,
        required: true,
    },
    estPowerCapacityInKiloWatts: {
        type: Number,
        required: true,
    },
    estPowerCostInMicros: {
        type: Number,
        required: true,
    },
    farenheitTemp: {
        type: Number,
        required: true,
    },
    isAutoManaged: {
        type: Boolean,
        required: true,
    },
});
function loadFacilityInfoModel(connection) {
    return (connection.models["FacilityInfo"] ||
        connection.model("FacilityInfo", facilityInfoSchema));
}
exports.loadFacilityInfoModel = loadFacilityInfoModel;
//# sourceMappingURL=facility-info.model.js.map