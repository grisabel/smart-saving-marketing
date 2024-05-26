import { HttpInterfaceService } from "~/utils/Http/HttpInterfaceService";
import type { MarketingInterfaceRepository } from "./MarketingInterfaceRepository";
import type { MarketingRequestModel } from "./model/request/MarketingRequestModel";

export class MarkingHttpRepository implements MarketingInterfaceRepository {
  constructor(private http: HttpInterfaceService) {}
  
  sendContactForm(requestModel: MarketingRequestModel): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint: import.meta.env.PUBLIC_BASE_URL + "/marketing/contact-form",
          body: {
            name: requestModel.name,
            email: requestModel.email,
            subject: requestModel.subject,
            description: requestModel.description
          }
        })
        .then((response) => {
          try {
            switch (response.status) {
              case 200:
                resolve(response.json());
                break;

              default:
                reject();
                break;
            }
          } catch (error) {
            console.log("Error in response.json()");
            reject();
          }
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
          reject();
        });
    });
  }
}
