
import { Cmp8028Component } from './cmp';
describe('Cmp8028Component', () => {
  it('should add', () => {
    expect(new Cmp8028Component().add8028(1)).toBe(8029);
  });
});