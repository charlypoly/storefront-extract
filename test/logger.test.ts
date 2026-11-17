import { describe, expect, it, vi } from 'vitest';
import { logger } from '../src/logger.js';

describe('logger', () => {
  it('writes JSON lines', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.info('hello', { a: 1 });
    expect(JSON.parse(spy.mock.calls[0][0])).toMatchObject({ level: 'info', message: 'hello', a: 1 });
  });
});
