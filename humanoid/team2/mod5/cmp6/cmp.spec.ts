
import { Cmp7256Component } from './cmp';
describe('Cmp7256Component', () => {
  it('should add', () => {
    expect(new Cmp7256Component().add7256(1)).toBe(7257);
  });
});