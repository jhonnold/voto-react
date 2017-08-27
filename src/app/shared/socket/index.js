import io from "socket.io-client";

class Socket {
  connect(channel) {
    this.socket = io.connect(channel);

    socket.on('SESSION_ACTIVATED', (res) => {
      console.log(res);
      //TODO Dispatch event here;
    });

    socket.on('VOTE', (res) => {
      console.log(res);
      //TODO Dispatch event here;
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export let socket = new Socket();
