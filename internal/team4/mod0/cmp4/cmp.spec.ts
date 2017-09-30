
import { Cmp8404Component } from './cmp';
describe('Cmp8404Component', () => {
  it('should add', () => {
    expect(new Cmp8404Component().add8404(1)).toBe(8405);
  });
});