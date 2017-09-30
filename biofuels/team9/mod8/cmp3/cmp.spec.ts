
import { Cmp1983Component } from './cmp';
describe('Cmp1983Component', () => {
  it('should add', () => {
    expect(new Cmp1983Component().add1983(1)).toBe(1984);
  });
});