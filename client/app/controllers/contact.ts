import Controller from '@ember/controller';
import Defaults from "../system/defaults";
import Regex from "../system/regex";

export default class Contact extends Controller.extend({
  actions: {
    submit(): void {
      let form: (HTMLElement | null) = document.querySelector(".needs-validation");

      this.coverLegality("email-field", "d-block", 0);
      this.coverLegality("message-field", "d-block", 1);

      // test correctness
      let isLegalMail: boolean = this.isLegalMail(form, new RegExp(Regex.AllowedPattern.MAIL));
      let isLegalMessage: boolean = this.isLegalMessage(form, new RegExp(Regex.AllowedPattern.MESSAGE));

      this.uncoverLegality(isLegalMail, "email-field", "d-block", 0);
      this.uncoverLegality(isLegalMessage, "message-field", "d-block", 1);
    }
  },

  coverLegality(fieldId: string, messageClass: string, messageNumber: number) {
    let field: (HTMLInputElement | null) = document.querySelector("#" + fieldId);
    // @ts-ignore
    field.classList.remove("is-invalid");

    let messages: NodeListOf<HTMLDivElement> = document.querySelectorAll("." + messageClass);  // ordered list!
    messages[messageNumber].style.setProperty("display", "none", "important");
  },

  isLegalMail(form: (HTMLElement | null), allowedMailPattern: RegExp) {
    // @ts-ignore
    let mailField: HTMLInputElement = form[0];
    mailField.classList.remove("is-invalid");
    let mail: string = mailField.value;
    return allowedMailPattern.test(mail) && mail.length >= Defaults.Lengths.MAIL_ADDRESS;
  },

  isLegalMessage(form: (HTMLElement | null), allowedMessagePattern: RegExp) {
    // @ts-ignore
    let messageField: HTMLInputElement = form[1];
    messageField.classList.remove("is-invalid");
    let message: string = messageField.value;
    return allowedMessagePattern.test(message) && message.length >= Defaults.Lengths.MESSAGE;
  },

  uncoverLegality(isLegal: boolean, fieldId: string, messageClass: string, messageNumber: number) {
    if (!isLegal) {
      let field: (HTMLInputElement | null) = document.querySelector("#" + fieldId);
      // @ts-ignore
      field.classList.add("is-invalid");

      let messages: NodeListOf<HTMLDivElement> = document.querySelectorAll("." + messageClass);  // ordered list!
      messages[messageNumber].style.setProperty("display", "block", "important");
    }
  }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'contact': Contact;
  }
}
