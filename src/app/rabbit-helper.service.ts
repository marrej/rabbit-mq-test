import { Injectable } from '@angular/core';
import { RxStomp } from "@stomp/rx-stomp";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RabbitHelperService {

  public stompWS: any = null;

  constructor() { }

  public init(): void {
    console.log('Initialized!');
    let rxStomp;

    const stompConfig = {
      // Typically login, passcode and vhost
      // Adjust these for your broker
      connectHeaders: {
        login: "guest",
        passcode: "guest"
      },

      // default stomp port for rabbitMQ, can be set via the rabbitMQ conf
      brokerURL: "ws://localhost:61613/ws",

      // This url is used for docker-compose connect whne NGINX is doing the pass
      // brokerURL: "ws://localhost:8090/ws",

      // Keep it off for production, it can be quit verbose
      // Skip this key to disable
      debug: function (str) {
        // console.log('STOMP: ' + str);
      },

      // If disconnected, it will retry after 200ms
      reconnectDelay: 200,
    };

    // Create an instance. The first RxStomp is the UMD module name and other is the class name
    rxStomp = new RxStomp();

    // You can set additional configuration here
    rxStomp.configure(stompConfig);

    console.log('Attempt to connect');
    // Attempt to connect
    rxStomp.activate();

    const rxJsSubscription = rxStomp.watch('/topic/chat').pipe(
      map((message: any) => {
      return JSON.parse(message.body);
        })).subscribe(function (payload) {
      console.log(payload);
    });
    this.stompWS = rxStomp;
  }

  public publishMessage(): void {
    if (this.stompWS != null) {
      console.log(this.stompWS.connected());
      this.stompWS.publish({destination: '/topic/chat', body: JSON.stringify({ pa: 'Ching'})});
    } else {
      console.log('Stomp not initialized');
    }
  }

}
