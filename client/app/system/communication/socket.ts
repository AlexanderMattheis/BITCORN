export default class Socket {
  public static post(contentType: string, data: any, url: string, handler: Function, params: any[]) {
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", contentType);
    request.send(JSON.stringify(data));

    request.onload = function () {
      handler.call([request.status, ...params]);
    };
  }

}
