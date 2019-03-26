// @ts-ignore
import {validateFormat, validateLength, validatePresence} from 'ember-changeset-validations/validators/index';

import Defaults from '../system/defaults';
import Regex from '../system/defaults/regex';

export default {
  email: [
    validatePresence(true),
    validateLength({min: Defaults.Lengths.Minimum.MAIL}),
    validateFormat({type: 'email'})
  ],
  message: [
    validatePresence(true),
    validateLength({min: Defaults.Lengths.Minimum.MESSAGE}),
    validateFormat({regex: Regex.AllowedPattern.MESSAGE}),
  ]
};
