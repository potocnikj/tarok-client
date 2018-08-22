/**
 * Internal
 */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
/**
 * Models
 */
/**
 * Environment
 */
import {environment} from '../../../environments/environment';
/**
 * ENUMS
 */

@Injectable()
export class WebsocketService {
  private socket;
  private socketUri = environment.webSocketUri;

  public initSocket(): void {
    this.socket = new WebSocket(this.socketUri);
  }

  public send(message: any): void {
    this.socket.send(JSON.stringify({'message': message}));
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.onmessage = (msg) => observer.next(JSON.parse(msg.data));
    });
  }
}
