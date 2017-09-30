
import { Cmp8751Component } from './cmp';
describe('Cmp8751Component', () => {
  it('should add', () => {
    expect(new Cmp8751Component().add8751(1)).toBe(8752);
  });
});