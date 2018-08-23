import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
              private toastService: ToastService,
              private router: Router) {
  }

  public handleError(error: HttpErrorResponse): void {
    this.toastService.addToast(
      'Napaka',
       String(error.status) + ': ' + error.statusText,
      'error'
    );
  }
}
