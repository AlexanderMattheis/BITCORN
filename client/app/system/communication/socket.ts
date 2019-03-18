export default class Socket {
  public static post(contentType: string, data: any, url: string) {
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', contentType);
    request.send(JSON.stringify(data));
  }
}
