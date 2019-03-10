import Cookies from '../system/settings/cookies';
import Defaults from "../system/defaults";

export function initialize(): void {
  Cookies.isSnowing = getCookieValue(Defaults.Cookies.Particles.SNOW);
}

function getCookieValue(name: string): any {
  name = name + "=";
  const cookieParams: string[] = document.cookie.split(';');

  for (let i: number = 0; i < cookieParams.length; i++) {
    const param: string = cookieParams[i];

    if (param.indexOf(name) === 0) {
      return JSON.parse(param.substring(name.length, param.length));
    }
  }

  // @ts-ignore
  return undefined;
}

export default {
  before: 'snow-starter',
  initialize
};
