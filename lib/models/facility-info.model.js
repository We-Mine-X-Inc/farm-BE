"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const facilityInfoModel = (0, mongoose_1.model)("FacilityInfo", facilityInfoSchema);
exports.default = facilityInfoModel;
//# sourceMappingURL=facility-info.model.js.map