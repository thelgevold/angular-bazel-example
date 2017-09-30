
import { Cmp9275Component } from './cmp';
describe('Cmp9275Component', () => {
  it('should add', () => {
    expect(new Cmp9275Component().add9275(1)).toBe(9276);
  });
});