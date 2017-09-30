
import { Cmp1622Component } from './cmp';
describe('Cmp1622Component', () => {
  it('should add', () => {
    expect(new Cmp1622Component().add1622(1)).toBe(1623);
  });
});