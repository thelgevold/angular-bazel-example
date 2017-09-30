
import { Cmp1911Component } from './cmp';
describe('Cmp1911Component', () => {
  it('should add', () => {
    expect(new Cmp1911Component().add1911(1)).toBe(1912);
  });
});