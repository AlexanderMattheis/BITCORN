import {ChangesetDef} from 'ember-changeset/types/index';

import {action} from '@ember-decorators/object';

import Controller from '@ember/controller';

import ContentTypes from '../system/communication/content-types';
import Socket from '../system/communication/socket';
import Validation from '../validations/contact';
import {StatusCodes} from "bitcorn/system/status-codes";

export default class Contact extends Controller.extend({Validation}) {
  @action
  submit(changeset: ChangesetDef): void {
    if (changeset.isInvalid || changeset.isPristine) {
      return;
    }

    this.post(changeset);
  }

  private post(changeset: ChangesetDef): void {
    Socket.post(ContentTypes.TEXT_PLAIN, {
      email: changeset.get('email'),
      message: changeset.get('message')
    }, 'api/contact', this.statusHandler, [changeset]);
  }

  private statusHandler(): void {
    let params: any[] = this as any;
    let statusCode: number = params[0];
    let changesetData: ChangesetDef = params[1];
    if (statusCode == StatusCodes.CREATED) {
      changesetData.rollback();
    } else {
      // show error message
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'contact': Contact;
  }
}
