import { config } from './config.js';

const levels = ['debug', 'info', 'warn', 'error'] as const;
type Level = (typeof levels)[number];

function log(level: Level, message: string, meta?: Record<string, unknown>) {
  if (levels.indexOf(level) < levels.indexOf(config.logLevel as Level)) return;
  console.log(JSON.stringify({ level, message, time: new Date().toISOString(), ...meta }));
}

export const logger = {
  debug: (m: string, meta?: Record<string, unknown>) => log('debug', m, meta),
  info: (m: string, meta?: Record<string, unknown>) => log('info', m, meta),
  warn: (m: string, meta?: Record<string, unknown>) => log('warn', m, meta),
  error: (m: string, meta?: Record<string, unknown>) => log('error', m, meta),
};
