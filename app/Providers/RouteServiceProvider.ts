/**
 * Route Service Provider
 *
 * Loads your application's route files.
 */

import { RouteServiceProvider as BaseRouteServiceProvider } from '@orchestr-sh/orchestr';

export class RouteServiceProvider extends BaseRouteServiceProvider {
  /**
   * Bootstrap any application services.
   */
  async boot(): Promise<void> {
    // Load web routes
    await import('../../routes/web');
  }
}
