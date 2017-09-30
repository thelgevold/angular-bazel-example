
import { Cmp8712Component } from './cmp';
describe('Cmp8712Component', () => {
  it('should add', () => {
    expect(new Cmp8712Component().add8712(1)).toBe(8713);
  });
});