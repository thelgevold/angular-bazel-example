
import { Cmp1612Component } from './cmp';
describe('Cmp1612Component', () => {
  it('should add', () => {
    expect(new Cmp1612Component().add1612(1)).toBe(1613);
  });
});