import io from "socket.io-client";
import { store } from "../../redux/index";
import { activeSessions } from "../../redux/actions/sessionsActions";

class Socket {
  constructor() {
    this.isConnected = false;
  }

  connect(channel) {
    this.socket = io.connect(channel);
    this.isConnected = true;

    this.socket.on("user-response", (res) => {
      console.log(res);
      // TODO Dispatch event here;
    });

    this.socket.on("user-join", (res) => {
      console.log(res);
      // TODO Dispatch event here
    });

    this.socket.on("session-de-activated", (res) => {
      console.log(res);
      // TODO Dispatch event here
    });

    this.socket.on("session-active", () => {
      store.dispatch(activeSessions());
    });
  }

  subscribeToSessionFeed() {
    this.socket.emit("subscribe-to-feed-teacher");
  }

  subscribeToActiveSessionFeed() {
    this.socket.emit("subscribe-to-sessions-student");
  }

  disconnect() {
    if (this.isConnected) {
      this.isConnected = false;
      this.socket.disconnect();
    }
  }
}

export const socket = new Socket();
