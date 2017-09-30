
import { Cmp8561Component } from './cmp';
describe('Cmp8561Component', () => {
  it('should add', () => {
    expect(new Cmp8561Component().add8561(1)).toBe(8562);
  });
});