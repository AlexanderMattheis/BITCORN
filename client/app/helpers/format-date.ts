import {helper} from "@ember/component/helper";
import Symbols from "../system/defaults/symbols";

export function formatDate([milliseconds]: [number]): string {
  const date: Date = new Date(milliseconds);

  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;  // '+1' is correct
  const day: number = date.getDate();

  return year + Symbols.DATE_SEPARATOR + month + Symbols.DATE_SEPARATOR + day;
}

export default helper(formatDate);
