
import { Cmp9810Component } from './cmp';
describe('Cmp9810Component', () => {
  it('should add', () => {
    expect(new Cmp9810Component().add9810(1)).toBe(9811);
  });
});