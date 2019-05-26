import Controller from "@ember/controller";
import {StatusCodes} from "bitcorn/system/exceptions/status-codes";
import Socket from "bitcorn/system/communication/socket";

export default class DownloadsGraphicsIndex extends Controller {
  public init(): void {
    super.init();
    this.setModel();
  }

  private setModel(): void {
    Socket.get("../api/graphics/vector-graphics", this.statusHandler, [this]);
  }

  private statusHandler(): void {
    let params: any[] = this as any;
    let statusCode: number = params[0];
    let response: string = params[1];
    let self: DownloadsGraphicsIndex = params[2];

    if (statusCode === StatusCodes.OK) {
      self.set("model", JSON.parse(response));
    } else {
      // TODO: show error message
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    "downloads/graphics/index": DownloadsGraphicsIndex;
  }
}
