
import { Cmp8878Component } from './cmp';
describe('Cmp8878Component', () => {
  it('should add', () => {
    expect(new Cmp8878Component().add8878(1)).toBe(8879);
  });
});