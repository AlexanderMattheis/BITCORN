import Cookies from "../system/settings/cookies";
import Defaults from "../system/defaults";

function getCookieValue(name: string): any {
  name = name + "=";
  const cookieParams: string[] = document.cookie.split(";");

  for (let i = 0; i < cookieParams.length; i++) {
    const param: string = cookieParams[i];

    if (param.indexOf(name) === 0) {
      return JSON.parse(param.substring(name.length, param.length));
    }
  }

  // @ts-ignore
  return undefined;
}

export function initialize(): void {
  Cookies.isSnowing = getCookieValue(Defaults.Cookies.Particles.SNOW);
}

export default {
  before: "snow-starter",
  initialize
};
