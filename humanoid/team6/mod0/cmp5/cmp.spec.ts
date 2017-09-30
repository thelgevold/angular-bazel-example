
import { Cmp7605Component } from './cmp';
describe('Cmp7605Component', () => {
  it('should add', () => {
    expect(new Cmp7605Component().add7605(1)).toBe(7606);
  });
});