import { Model } from './model';

export class Language extends Model {
  public language: string;
  public login: {
    title: string;
    teamId: string;
    pass: string;
    submit: string;
  }
}
