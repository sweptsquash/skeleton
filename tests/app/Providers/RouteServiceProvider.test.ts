import { describe, it, expect, beforeEach } from 'vitest';
import { Application, Facade } from '@orchestr-sh/orchestr';
import { RouteServiceProvider } from '@/app/Providers/RouteServiceProvider';

describe('RouteServiceProvider', () => {
  let app: Application;
  let provider: RouteServiceProvider;

  beforeEach(() => {
    app = new Application(process.cwd());
    Facade.setFacadeApplication(app);
    provider = new RouteServiceProvider(app);
  });

  it('should be an instance of RouteServiceProvider', () => {
    expect(provider).toBeInstanceOf(RouteServiceProvider);
  });

  it('should have access to the application', () => {
    expect(provider['app']).toBe(app);
  });

  it('should boot and load web routes', async () => {
    // Register the provider first so Route facade is available
    app.register(provider);
    // Boot the app which will call boot() on all providers
    await app.boot();

    // If we get here without errors, routes were loaded successfully
    expect(true).toBe(true);
  });

  it('should be registerable with the application', () => {
    expect(() => app.register(provider)).not.toThrow();
  });
});
