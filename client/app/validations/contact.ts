// @ts-ignore
import {validateFormat, validateLength, validatePresence} from 'ember-changeset-validations/validators/index';

import Defaults from '../system/defaults';
import Regex from '../system/formatting/regex';

export default {
  email: [
    validatePresence(true),
    validateLength({min: Defaults.Lengths.MAIL}),
    validateFormat({regex: Regex.AllowedPattern.MAIL})
  ],
  message: [
    validatePresence(true),
    validateLength({min: Defaults.Lengths.MESSAGE}),
    validateFormat({regex: Regex.AllowedPattern.MESSAGE}),
  ]
};
