
import { Cmp8810Component } from './cmp';
describe('Cmp8810Component', () => {
  it('should add', () => {
    expect(new Cmp8810Component().add8810(1)).toBe(8811);
  });
});