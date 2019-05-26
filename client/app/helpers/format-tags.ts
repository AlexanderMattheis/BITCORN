import {helper} from "@ember/component/helper";
import Symbols from "../system/defaults/symbols";

export function formatTags([values]: [string]) {
  return values.split(Symbols.SEPARATOR).join(Symbols.TAGS_SEPARATOR);
}

export default helper(formatTags);
