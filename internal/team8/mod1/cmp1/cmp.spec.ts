
import { Cmp8811Component } from './cmp';
describe('Cmp8811Component', () => {
  it('should add', () => {
    expect(new Cmp8811Component().add8811(1)).toBe(8812);
  });
});