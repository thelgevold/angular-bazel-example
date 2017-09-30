
import { Cmp1904Component } from './cmp';
describe('Cmp1904Component', () => {
  it('should add', () => {
    expect(new Cmp1904Component().add1904(1)).toBe(1905);
  });
});