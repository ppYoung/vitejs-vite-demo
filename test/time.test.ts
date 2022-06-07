import { describe, test, expect } from 'vitest';

import { formatTime } from '../src/utils/time';

test('should validate date type', () => {
  expect(() => formatTime('abc')).toThrowError('Invalid Date');
});

describe('format', () => {
  test('should format default formatter correctly', () => {
    expect(formatTime('2022-05-01 00:00:00')).toEqual('2022-05-01');
  });

  test('should format `YYYY/MM/DD correctly`', () => {
    expect(formatTime('2022-05-01 00:00:00', 'YYYY/MM/DD')).toEqual(
      '2022/05/01'
    );
  });

  test('should format timestamp correctly', () => {
    const d = new Date('2022-05-01').getTime();
    expect(formatTime(d)).toEqual('2022-05-01');
  });

  test('should format unix timestamp correctly', () => {
    const d = new Date('2022-05-01').getTime() / 1000;
    expect(formatTime(d)).toEqual('2022-05-01');
  });
  s;
});
