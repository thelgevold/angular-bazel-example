
import { Cmp6512Component } from './cmp';
describe('Cmp6512Component', () => {
  it('should add', () => {
    expect(new Cmp6512Component().add6512(1)).toBe(6513);
  });
});