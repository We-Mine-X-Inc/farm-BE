"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UptimeTickService = void 0;
const tslib_1 = require("tslib");
const uptime_tick_model_1 = tslib_1.__importDefault(require("../models/uptime-tick.model"));
const util_1 = require("../utils/util");
/**
 * Exposes operations allowable on the UptimeTick database resource.
 */
class UptimeTickService {
    constructor() {
        this.uptimeTicks = uptime_tick_model_1.default;
    }
    findAllTicks() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.uptimeTicks.find().lean();
        });
    }
    findMostRecentTick() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.uptimeTicks.findOne().sort({ datetime: -1 });
        });
    }
    createUptimeTick(uptimeTickData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Make more graceful by logging this error and configuring a corresponding alert.
            if ((0, util_1.isEmpty)(uptimeTickData))
                throw new Error("Requires uptick data.");
            return yield this.uptimeTicks.create(Object.assign({}, uptimeTickData));
        });
    }
    deleteAll(thresholdDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deletionOutcome = yield this.uptimeTicks.deleteMany({
                datetime: { $lte: thresholdDate },
            });
            return deletionOutcome.deletedCount;
        });
    }
}
exports.UptimeTickService = UptimeTickService;
//# sourceMappingURL=uptime-tick.service.js.map