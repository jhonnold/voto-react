import io from "socket.io-client";

class Socket {
  constructor() {
    this.isConnected = false;
  }

  connect(channel) {
    this.socket = io.connect(channel);
    this.isConnected = true;

    this.socket.on("SESSION_ACTIVATED", (res) => {
      console.log(res);
      // TODO Dispatch event here;
    });

    this.socket.on("VOTE", (res) => {
      console.log(res);
      // TODO Dispatch event here;
    });
  }

  disconnect() {
    if (this.isConnected) {
      this.isConnected = false;
      this.socket.disconnect();
    }
  }
}

export const socket = new Socket();
