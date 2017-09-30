
import { Cmp9512Component } from './cmp';
describe('Cmp9512Component', () => {
  it('should add', () => {
    expect(new Cmp9512Component().add9512(1)).toBe(9513);
  });
});