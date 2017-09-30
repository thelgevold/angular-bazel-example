
import { Cmp8126Component } from './cmp';
describe('Cmp8126Component', () => {
  it('should add', () => {
    expect(new Cmp8126Component().add8126(1)).toBe(8127);
  });
});