
import { Cmp9358Component } from './cmp';
describe('Cmp9358Component', () => {
  it('should add', () => {
    expect(new Cmp9358Component().add9358(1)).toBe(9359);
  });
});