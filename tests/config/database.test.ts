import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import databaseConfig from '@/config/database';

describe('Database Config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should have default connection', () => {
    delete process.env.DB_CONNECTION;
    expect(databaseConfig.default).toBe('sqlite');
  });

  it('should use DB_CONNECTION from environment', async () => {
    process.env.DB_CONNECTION = 'mysql';
    const configModule = await import('@/config/database');
    expect(configModule.default.default).toBe('mysql');
  });

  it('should have sqlite connection configuration', () => {
    expect(databaseConfig.connections.sqlite).toBeDefined();
    expect(databaseConfig.connections.sqlite.adapter).toBe('drizzle');
    expect(databaseConfig.connections.sqlite.driver).toBe('better-sqlite3');
  });

  it('should have default database path', () => {
    delete process.env.DB_DATABASE;
    expect(databaseConfig.connections.sqlite.database).toBe('database/database.sqlite');
  });

  it('should use DB_DATABASE from environment', async () => {
    process.env.DB_DATABASE = 'custom.db';
    const configModule = await import('@/config/database');
    expect(configModule.default.connections.sqlite.database).toBe('custom.db');
  });
});
