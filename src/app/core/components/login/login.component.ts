/**
 * Internal
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Models
 */
import { Authentication } from '../../models/authentication';
import { AccessToken } from '../../models/access-token';
/**
 * Services
 */
import { AuthenticationService } from '../../services/authentication.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Model for handling client's Input.
   */
  public authentication: Authentication;
  /**
   * Model for storing authorization token received by the server.
   */
  public accessToken: AccessToken;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.authentication = Authentication.init({teamId: '', passphrase: ''});
  }

  /**
   * Invoke Authentication HTTP Request.
   */
  public authenticate(): void {
    this.authenticationService
      .authenticate(this.authentication)
      .subscribe(
        rsp => this.loadAuthentication(rsp),
        error => this.httpService.handleError(error)
      )
  }

  /**
   * If server returns Non Error response, handle generated authorization token.
   */
  private loadAuthentication(rsp: any): void {
    console.log(rsp);
    this.accessToken = new AccessToken(rsp.data)
    this.authenticationService.storeAccessToken(this.accessToken);
    this.router.navigate(['/']);
  }
}
