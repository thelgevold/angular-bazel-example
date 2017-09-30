
import { Cmp9225Component } from './cmp';
describe('Cmp9225Component', () => {
  it('should add', () => {
    expect(new Cmp9225Component().add9225(1)).toBe(9226);
  });
});