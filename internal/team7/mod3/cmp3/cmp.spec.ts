
import { Cmp8733Component } from './cmp';
describe('Cmp8733Component', () => {
  it('should add', () => {
    expect(new Cmp8733Component().add8733(1)).toBe(8734);
  });
});