import { expect, describe, it, afterEach, vi } from 'vitest';

import request, { fetchSuccessInfo } from '../src/utils/request';

describe('request', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sholud return success info', async () => {
    const spy = vi.spyOn(request, 'fetchSuccessInfo');
    expect(spy.getMockName()).toEqual('fetchSuccessInfo');

    let ret = await request.fetchSuccessInfo();
    expect(ret).toBe('success');

    spy.mockReturnValue(Promise.resolve('success-info'));
    ret = await request.fetchSuccessInfo();
    expect(ret).toBe('success-info');
  });

  it('sholud return mock success info', async () => {
    const mock = vi.fn().mockImplementation(fetchSuccessInfo);

    mock.mockImplementationOnce(() => Promise.resolve('success-info'));

    const ret = await mock();
    expect(ret).toEqual('success-info');
  });
});

const display = vi.fn(() => console.log('display'));
const displayDelay = (func: Function) => setTimeout(func, 2000);
describe('timer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sholud display msg after 2000 ms', () => {
    displayDelay(display);
    vi.runAllTimers();

    expect(display).toBeCalledTimes(1);
  });
});
