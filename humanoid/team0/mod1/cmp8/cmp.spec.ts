
import { Cmp7018Component } from './cmp';
describe('Cmp7018Component', () => {
  it('should add', () => {
    expect(new Cmp7018Component().add7018(1)).toBe(7019);
  });
});