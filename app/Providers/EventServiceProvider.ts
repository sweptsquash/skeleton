/**
 * Event Service Provider
 *
 * Maps events to their listeners. When an event is dispatched,
 * all registered listeners will be called.
 *
 * @example
 * ```typescript
 * protected listen = {
 *   'UserRegistered': ['SendWelcomeEmail', 'LogRegistration'],
 *   'OrderPlaced': ['ProcessPayment'],
 * };
 * ```
 */

import { EventServiceProvider as BaseEventServiceProvider } from '@orchestr-sh/orchestr';

export class EventServiceProvider extends BaseEventServiceProvider {
  /**
   * The event to listener mappings for the application.
   */
  protected listen: Record<string, string | string[]> = {
    // 'UserRegistered': ['SendWelcomeEmail'],
  };

  /**
   * The subscriber classes to register.
   */
  protected subscribe: string[] = [
    //
  ];
}
