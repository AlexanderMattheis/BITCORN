import {ChangesetDef} from 'ember-changeset/types/index';

import {action} from '@ember-decorators/object';

import Controller from '@ember/controller';

import ContentTypes from '../system/communication/content-types';
import Socket from '../system/communication/socket';
import Validation from '../validations/contact';

export default class Contact extends Controller.extend({Validation}) {
  @action
  submit(changeset: ChangesetDef): void {
    if (changeset.isInvalid || changeset.isPristine) {
      console.log("invalid");
      return;
    }

    Socket.post(ContentTypes.TEXT_PLAIN,'valid', 'api/contact');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'contact': Contact;
  }
}
