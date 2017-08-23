import WebSocketBase from "./WebSocketService";

let initialTasks: Task[] = [];

class TaskSocketService extends WebSocketBase {
  constructor() {
    super();
    this.awaitingSubscribers = [];
    this.isConnected = false;
    this.socketIsOn = false;
  }

  onOpen(message) {
    this.isConnected = true;
    this.socketIsOn = true;
    this.awaitingSubscribers.forEach(fn => fn());
  }

  onConnected(callBcFn) {
    this.awaitingSubscribers.push(callBcFn);
  }

  onMessage({ data }) {
    let res = JSON.parse(data);
    if (!!res && !!res.message && !!res.message.message) {
      switch (res.message.message.action) {
        default:
          break;
      }
    }
  }

  onError(err) {
    this.socketIsOn = false;
    console.error(err);
  }

  onClose() {}

  subscribeTo(channelName, extraData = {}) {
    this.channelName = channelName;
    const defaultConnectParams = JSON.stringify({
      command: "subscribe",
      identifier: { channel: this.channelName },
    });
    this.ws.send(defaultConnectParams);

    setTimeout(() => {
      const connectParams = JSON.stringify({
        command: "message",
        identifier: { channel: this.channelName },
        data: { ...extraData, action: "subscribed" },
      });
      this.ws.send(connectParams);
    }, 500);
  }

  unSubscribeFrom(channelName, extraData) {
    const disconnectParams = JSON.stringify({
      command: "unsubscribed",
      identifier: { channel: channelName, ...extraData },
    });
    this.ws.send(disconnectParams);
  }

  unSubscribeFrom(channelName, extraData) {
    const disconnectParams = JSON.stringify({
      command: "message",
      identifier: { channel: channelName },
      data: { action: "unsubscribe" },
    });
    this.ws.send(disconnectParams);
  }

  disconnect() {
    this.ws.close(1000, "Disconnecting");
  }

  getProps(payload, actionName, channelName) {
    let props = {
      command: "message",
      data: { payload, action: actionName },
      identifier: { channel: channelName },
    };
    return JSON.stringify(props);
  }

  put(channelName, data) {
    let props = {
      command: "message",
      data: { message: data, action: "put" },
      identifier: { channel: channelName },
    };
  }
}

let socket = new TaskSocketService();

export default socket;
