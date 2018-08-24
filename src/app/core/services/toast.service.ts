/**
 * Internal
 */
import {Injectable} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable()
export class ToastService {

  constructor(public snackBar: MatSnackBar) {
  }

  /**
   * Uses MatSnackBar to pop-up all kind of Information for a user.
   * @param {string} title
   * @param {string} msg
   * @param {string} type
   * @param {number} timeout
   */
  public addToast(title: string, msg: string, type: string, timeout = 5000): void {
    const config = new MatSnackBarConfig();
    config.duration = timeout;
    this.snackBar.open(msg, type, config);
  }
}
