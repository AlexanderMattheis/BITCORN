import {helper} from "@ember/component/helper";
import {htmlSafe as safe} from "@ember/string";
import {SafeString} from "handlebars";

export function htmlSafe([text]: [string]): SafeString {
  return safe(text);
}

export default helper(htmlSafe);
