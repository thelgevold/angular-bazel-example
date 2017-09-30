
import { Cmp8385Component } from './cmp';
describe('Cmp8385Component', () => {
  it('should add', () => {
    expect(new Cmp8385Component().add8385(1)).toBe(8386);
  });
});