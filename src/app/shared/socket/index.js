import io from "socket.io-client";
import { store } from "../../redux/index";
import { activeSessions } from "../../redux/actions/sessionsActions";
import addResponse from "../../redux/actions/chartActions";

class Socket {
  constructor() {
    this.isConnected = false;
  }

  connect(channel) {
    this.socket = io.connect({ path: channel });

    this.socket.on("connect", () => { this.isConnected = true; });

    this.socket.on("new-question", (questionId) => {
      console.log(`New question is now ${questionId}`);
    });

    this.socket.on("user-response", (res) => {
      console.log("Got a new user response!");
      console.log(res);
      store.dispatch(addResponse(res));
    });

    this.socket.on("session-de-activated", () => {
      console.log("A session has been deactivated");
      store.dispatch(activeSessions());
    });

    this.socket.on("session-active", () => {
      console.log("A session has been activated");
      store.dispatch(activeSessions());
    });

    return new Promise((resolve) => {
      const self = this;
      (function waitForConnect() {
        if (self.isConnected) return resolve();
        setTimeout(waitForConnect, 50);
      })();
    });
  }

  subscribeToSessionFeed() {
    this.socket.emit("subscribe-to-feed-teacher");
    console.log("emitted");
  }

  subscribeToActiveSessionFeed() {
    this.socket.emit("subscribe-to-sessions-student");
  }

  disconnect() {
    this.isConnected = false;
    this.socket.disconnect();
    console.log("Disconnected!");
  }
}

export const socket = new Socket();
