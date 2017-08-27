import io from "socket.io-client";

class Socket {
  connect(channel) {
    this.socket = io.connect(channel);

    this.socket.on('SESSION_ACTIVATED', (res) => {
      console.log(res);
      //TODO Dispatch event here;
    });

    this.socket.on('VOTE', (res) => {
      console.log(res);
      //TODO Dispatch event here;
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export let socket = new Socket();
