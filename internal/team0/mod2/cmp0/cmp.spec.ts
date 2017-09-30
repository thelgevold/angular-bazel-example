
import { Cmp8020Component } from './cmp';
describe('Cmp8020Component', () => {
  it('should add', () => {
    expect(new Cmp8020Component().add8020(1)).toBe(8021);
  });
});