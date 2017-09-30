
import { Cmp8932Component } from './cmp';
describe('Cmp8932Component', () => {
  it('should add', () => {
    expect(new Cmp8932Component().add8932(1)).toBe(8933);
  });
});