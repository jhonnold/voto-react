const PROTOCOLS: string[] = ["actioncable-v1-json", "actioncable-unsupported"];
const CONNECT_URL: string = "wss://localhost:8080/cable";

export default class WebSocketService {
  constructor() {
    this.defaultProps = {
      command: "message",
      identifier: { channel: this.channelName },
    };
    this.connectParams = {
      command: "subscribe",
      identifier: {
        channel: "TaskChannel",
      },
    };
    this.createSocket(CONNECT_URL);
  }

  createSocket(url) {
    let ws = (this.ws = new WebSocket(url, PROTOCOLS[0]));
    ws.onopen = this.onOpen.bind(this, "open");
    ws.onmessage = this.onMessage.bind(this);
    ws.onerror = this.onError.bind(this);
    ws.onclose = this.onClose.bind(this);
  }

  getRecord(recordObject, channelName) {
    let props = this.getProps(recordObject, "get_card", channelName);
    this.ws.send(props);
  }

  postRecord(recordObject, channelName) {
    let props = this.getProps(recordObject, "card_created", channelName);
    this.ws.send(props);
  }

  updateRecord(recordObject: Task | Object, channelName) {
    let props = this.getProps(recordObject, "card_updated", channelName);
    this.ws.send(props);
  }

  deleteRecord(recordObject: Task | Object, channelName) {
    let props = this.getProps(recordObject, "card_deleted", channelName);
    this.ws.send(props);
  }

  unsubscribe(channelName) {
    console.log(`Closing socket for ${channelName}`);
  }
}
