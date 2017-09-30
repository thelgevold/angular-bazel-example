
import { Cmp1835Component } from './cmp';
describe('Cmp1835Component', () => {
  it('should add', () => {
    expect(new Cmp1835Component().add1835(1)).toBe(1836);
  });
});