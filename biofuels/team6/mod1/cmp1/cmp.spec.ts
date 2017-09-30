
import { Cmp1611Component } from './cmp';
describe('Cmp1611Component', () => {
  it('should add', () => {
    expect(new Cmp1611Component().add1611(1)).toBe(1612);
  });
});