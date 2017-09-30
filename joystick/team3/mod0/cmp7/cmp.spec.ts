
import { Cmp9307Component } from './cmp';
describe('Cmp9307Component', () => {
  it('should add', () => {
    expect(new Cmp9307Component().add9307(1)).toBe(9308);
  });
});