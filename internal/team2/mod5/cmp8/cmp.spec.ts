
import { Cmp8258Component } from './cmp';
describe('Cmp8258Component', () => {
  it('should add', () => {
    expect(new Cmp8258Component().add8258(1)).toBe(8259);
  });
});