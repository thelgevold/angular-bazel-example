
import { Cmp8100Component } from './cmp';
describe('Cmp8100Component', () => {
  it('should add', () => {
    expect(new Cmp8100Component().add8100(1)).toBe(8101);
  });
});