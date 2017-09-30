
import { Cmp7597Component } from './cmp';
describe('Cmp7597Component', () => {
  it('should add', () => {
    expect(new Cmp7597Component().add7597(1)).toBe(7598);
  });
});