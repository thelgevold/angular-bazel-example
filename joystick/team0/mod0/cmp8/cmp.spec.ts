
import { Cmp9008Component } from './cmp';
describe('Cmp9008Component', () => {
  it('should add', () => {
    expect(new Cmp9008Component().add9008(1)).toBe(9009);
  });
});