import { Model } from '../../core/models/model';

export class Chart extends Model {
  public title: string;
  public type: string;
  public columnNames: Array<string>;
  public data: Array<any>;
  public options: Array<any>;
}
