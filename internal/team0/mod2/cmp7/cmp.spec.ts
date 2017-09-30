
import { Cmp8027Component } from './cmp';
describe('Cmp8027Component', () => {
  it('should add', () => {
    expect(new Cmp8027Component().add8027(1)).toBe(8028);
  });
});