
import { Cmp8069Component } from './cmp';
describe('Cmp8069Component', () => {
  it('should add', () => {
    expect(new Cmp8069Component().add8069(1)).toBe(8070);
  });
});