
import { Cmp9652Component } from './cmp';
describe('Cmp9652Component', () => {
  it('should add', () => {
    expect(new Cmp9652Component().add9652(1)).toBe(9653);
  });
});