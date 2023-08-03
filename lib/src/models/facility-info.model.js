"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const facilityInfoModel = mongoose_1.default.models["FacilityInfo"] ||
    (0, mongoose_1.model)("FacilityInfo", facilityInfoSchema);
exports.default = facilityInfoModel;
//# sourceMappingURL=facility-info.model.js.map