import { Model } from './model';

export class Language extends Model {
  public login: {
    title: string;
    teamId: string;
    pass: string;
    submit: string;
  }
}
