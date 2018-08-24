/**
 * Internal
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { map } from "rxjs/internal/operators";
/**
 * Environment
 */
import { environment } from '../../../environments/environment';
/**
 * Models
 */
import { Language } from '../models/language';

@Injectable()
export class LanguageService {

  private languageUri = environment.languageUri;

  constructor(
    private http: HttpClient
  ) {
  }

  public get(language: string): Observable<Language> {
    return this.http.get(this.languageUri.concat('?language=').concat(language))
      .pipe(map(rsp => new Language(rsp)));
  }
}
