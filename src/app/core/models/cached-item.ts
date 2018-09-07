export class CachedItem {

  /**
   * Cached item has to have a uniq key
   */
  key: string;

  /**
   * Date when cached item vas cached
   */
  added: Date;

  /**
   * Cached item
   */
  item: any;

  /**
   * How many seconds an object in cache is valid. If
   * it is older then this number of seconds, we don't
   * return it.
   */
  protected validSeconds = 300;

  constructor(key: string, item: any) {
    this.key = key;
    this.item = item;
    this.added = new Date();
  }

  /**
   * Returns true if current object has been cached
   * more then this.validSeconds ago and is not relevant
   * any more.
   */
  get hasExpired() {
    return (new Date()).getTime() - this.added.getTime() > this.validSeconds * 1000;
  }
}
