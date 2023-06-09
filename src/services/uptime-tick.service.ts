import { CreateUptimeTickRequest } from "wemine-apis";
import { UptimeTick } from "wemine-apis";
import uptimeTickModel from "@models/uptime-tick.model";
import { isEmpty } from "@utils/util";

/**
 * Exposes operations allowable on the UptimeTick database resource.
 */
export class UptimeTickService {
  public uptimeTicks = uptimeTickModel;

  public async findAllTicks(): Promise<UptimeTick[]> {
    return await this.uptimeTicks.find().lean();
  }

  public async findMostRecentTick(): Promise<UptimeTick | null> {
    return await this.uptimeTicks.findOne().sort({ datetime: -1 });
  }

  public async createUptimeTick(
    uptimeTickData: CreateUptimeTickRequest
  ): Promise<UptimeTick> {
    // Make more graceful by logging this error and configuring a corresponding alert.
    if (isEmpty(uptimeTickData)) throw new Error("Requires uptick data.");

    return await this.uptimeTicks.create({ ...uptimeTickData });
  }

  public async deleteAll(thresholdDate: Date): Promise<Number> {
    const deletionOutcome: any = await this.uptimeTicks.deleteMany({
      datetime: { $lte: thresholdDate },
    });

    return deletionOutcome.deletedCount;
  }
}
