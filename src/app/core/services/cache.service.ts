import { CachedItem } from '../models/cached-item';
/**
 * Generic cache service.
 *
 * You can cache any item with:
 *   cacheService.add(key, item);
 *
 * and get it back with:
 *   const item = cacheService.get(key);
 *
 * key = Unique string that defines your item. Like 'player-123', 'game-123'
 * item = your object that you wish to cache
 */
export class CacheService {

  /**
   * How many items do we cache. If user adds more,
   * we'll remove all that expired and if we still have more
   * than this many, we remove last ones.
   */
  protected maxItems = 20;

  /**
   * Here we keep items that we are caching.
   */
  private items: Array<CachedItem> = [];

  /**
   * To add item into our cache.
   */
  add(key: string, item: any): void {
    this.pushItem(key, item);
  }
  /**
   * Get item with given key. Returns null if it
   * doesn't exist.
   */
  get(key: string): any {
    const found = this.items.find(i => i.key === key);
    return found ? found.item : false;
  }

  private pushItem(key: string, item: any) {
    if (this.items.length >= this.maxItems) {
      const deleted = this.validItems.splice(this.maxItems - 1);
      deleted.forEach(f => f = null);
    }

    const existing = this.get(key);

    if (existing) {
      existing.item = item;
      return;
    }

    this.items.push(new CachedItem(key, item));
  }

  /**
   * A getter that returns all items that are not expired.
   */
  private get validItems(): Array<CachedItem> {
    return this.items.filter(cached => !cached.hasExpired);
  }
}
