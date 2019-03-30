import {StatusCodes} from "bitcorn/system/exceptions/status-codes";
import {StatusRegistration} from "bitcorn/system/exceptions/status-registration";

export class StatusMessenger {
  public static createMessage(statusCode: number, className: string): void {

    // 2xx Success
    if (statusCode == StatusCodes.CREATED) {
      switch (className) {
        case StatusRegistration.CONTACT:
          StatusMessenger.showMessage("", "");
          break;
        default:
          break;
      }
    }
  }

  private static showMessage(message: string, type: string): void {
  }
}
