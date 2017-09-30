
import { Cmp1960Component } from './cmp';
describe('Cmp1960Component', () => {
  it('should add', () => {
    expect(new Cmp1960Component().add1960(1)).toBe(1961);
  });
});