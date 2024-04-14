import type { MarketingRequestModel } from "./model/request/MarketingRequestModel";

export interface MarketingInterfaceRepository {
  sendContactForm(requestModel: MarketingRequestModel): Promise<void>;
}
