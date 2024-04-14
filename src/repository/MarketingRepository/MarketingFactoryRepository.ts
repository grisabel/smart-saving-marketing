import type { MarketingInterfaceRepository } from "./MarketingInterfaceRepository";
import { MarkingHttpRepository } from "./MarketingHttpRepository";
import { UserMockRepository } from "./MarketingMockRepository";
import { HttpFactory } from "~/utils/Http/HttpFactory";
import { HttpMockAdapterFactory } from "~/utils/Http/HttpMockAdapterFactory";

export class MarketingFactoryRepository {
  private static instance: MarketingInterfaceRepository | null = null;

  static getInstance(): MarketingInterfaceRepository {
    if (!MarketingFactoryRepository.instance) {
      if ( import.meta.env.PUBLIC_MODE === "production") {
        const http = HttpFactory.getInstance();
        MarketingFactoryRepository.instance = new MarkingHttpRepository(http);
      } else {
        const httpMock = HttpMockAdapterFactory.getInstance();
        MarketingFactoryRepository.instance = new UserMockRepository(httpMock);
      }
    }
    return MarketingFactoryRepository.instance;
  }
}
