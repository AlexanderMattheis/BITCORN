import {action} from '@ember-decorators/object';

import Controller from '@ember/controller';
import Defaults from "../system/defaults";
import Regex from "../system/regex";

export default class Contact extends Controller {
  @action
  submit(): void {
    const form: (HTMLElement | null) = document.querySelector(".needs-validation");

    this.coverLegality("email-field", "d-block", 0);
    this.coverLegality("message-field", "d-block", 1);

    // test correctness
    const isLegalMail: boolean = this.isLegalMail(form, new RegExp(Regex.AllowedPattern.MAIL));
    const isLegalMessage: boolean = this.isLegalMessage(form, new RegExp(Regex.AllowedPattern.MESSAGE));

    this.uncoverLegality(isLegalMail, "email-field", "d-block", 0);
    this.uncoverLegality(isLegalMessage, "message-field", "d-block", 1);
  }

  private coverLegality(fieldId: string, messageClass: string, messageNumber: number) {
    const field: (HTMLInputElement | null) = document.querySelector("#" + fieldId);
    // @ts-ignore
    field.classList.remove("is-invalid");

    const messages: NodeListOf<HTMLDivElement> = document.querySelectorAll("." + messageClass);  // ordered list!
    messages[messageNumber].style.setProperty("display", "none", "important");
  }

  private isLegalMail(form: (HTMLElement | null), allowedMailPattern: RegExp) {
    // @ts-ignore
    const mailField: HTMLInputElement = form[0];
    mailField.classList.remove("is-invalid");
    const mail: string = mailField.value;
    return allowedMailPattern.test(mail) && mail.length >= Defaults.Lengths.MAIL_ADDRESS;
  }

  private isLegalMessage(form: (HTMLElement | null), allowedMessagePattern: RegExp) {
    // @ts-ignore
    const messageField: HTMLInputElement = form[1];
    messageField.classList.remove("is-invalid");
    const message: string = messageField.value;
    return allowedMessagePattern.test(message) && message.length >= Defaults.Lengths.MESSAGE;
  }

  private uncoverLegality(isLegal: boolean, fieldId: string, messageClass: string, messageNumber: number) {
    if (!isLegal) {
      const field: (HTMLInputElement | null) = document.querySelector("#" + fieldId);
      // @ts-ignore
      field.classList.add("is-invalid");

      const messages: NodeListOf<HTMLDivElement> = document.querySelectorAll("." + messageClass);  // ordered list!
      messages[messageNumber].style.setProperty("display", "block", "important");
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'contact': Contact;
  }
}
