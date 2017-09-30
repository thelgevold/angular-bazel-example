
import { Cmp8455Component } from './cmp';
describe('Cmp8455Component', () => {
  it('should add', () => {
    expect(new Cmp8455Component().add8455(1)).toBe(8456);
  });
});