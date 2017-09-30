
import { Cmp8857Component } from './cmp';
describe('Cmp8857Component', () => {
  it('should add', () => {
    expect(new Cmp8857Component().add8857(1)).toBe(8858);
  });
});