
import { Cmp1729Component } from './cmp';
describe('Cmp1729Component', () => {
  it('should add', () => {
    expect(new Cmp1729Component().add1729(1)).toBe(1730);
  });
});