
import { Cmp8576Component } from './cmp';
describe('Cmp8576Component', () => {
  it('should add', () => {
    expect(new Cmp8576Component().add8576(1)).toBe(8577);
  });
});