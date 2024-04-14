import { HttpMockAdapterFactory } from "~/utils/Http/HttpMockAdapterFactory";
import { MarkingHttpRepository } from "./MarketingHttpRepository";

const httpMock = HttpMockAdapterFactory.getInstance();

httpMock.onPost(
  import.meta.env.PUBLIC_BASE_URL +  "/marketing/contact-form",
  () => {
    return Promise.resolve({
      status: 200,
      response: null
    });
  }
);

export class UserMockRepository extends MarkingHttpRepository {}

