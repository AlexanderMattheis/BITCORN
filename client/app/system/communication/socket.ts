export default class Socket {
  public static post(contentType: string, data: any, url: string, handler: Function, params: any[]) {
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", contentType);

    request.onload = (): void => {
      handler.call([request.status, ...params]);
    };

    request.send(JSON.stringify(data));
  }

  /**
   * Hint: the handler gets only executed if async is true
   */
  public static get(url: string, handler: Function, params: any[]): void {
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open("GET", url);

    request.onreadystatechange = (): void => {
      handler.call([request.status, request.responseText, ...params]);
    };

    request.send();
  }
}
