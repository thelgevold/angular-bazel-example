
import { Cmp9130Component } from './cmp';
describe('Cmp9130Component', () => {
  it('should add', () => {
    expect(new Cmp9130Component().add9130(1)).toBe(9131);
  });
});