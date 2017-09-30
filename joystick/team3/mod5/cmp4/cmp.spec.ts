
import { Cmp9354Component } from './cmp';
describe('Cmp9354Component', () => {
  it('should add', () => {
    expect(new Cmp9354Component().add9354(1)).toBe(9355);
  });
});