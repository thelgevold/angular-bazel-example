
import { Cmp8016Component } from './cmp';
describe('Cmp8016Component', () => {
  it('should add', () => {
    expect(new Cmp8016Component().add8016(1)).toBe(8017);
  });
});