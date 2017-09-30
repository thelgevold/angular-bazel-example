
import { Cmp8004Component } from './cmp';
describe('Cmp8004Component', () => {
  it('should add', () => {
    expect(new Cmp8004Component().add8004(1)).toBe(8005);
  });
});