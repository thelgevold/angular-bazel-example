
import { Cmp8181Component } from './cmp';
describe('Cmp8181Component', () => {
  it('should add', () => {
    expect(new Cmp8181Component().add8181(1)).toBe(8182);
  });
});