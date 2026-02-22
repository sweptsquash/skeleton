import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DatabaseSeeder } from '@/database/seeders/DatabaseSeeder';

describe('DatabaseSeeder', () => {
  let seeder: DatabaseSeeder;

  beforeEach(() => {
    seeder = new DatabaseSeeder();
  });

  it('should be an instance of Seeder', () => {
    expect(seeder).toBeInstanceOf(DatabaseSeeder);
  });

  it('should have a run method', () => {
    expect(typeof seeder.run).toBe('function');
  });

  it('should run without errors', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await expect(seeder.run()).resolves.not.toThrow();

    expect(consoleSpy).toHaveBeenCalledWith('Database seeded successfully.');

    consoleSpy.mockRestore();
  });
});
