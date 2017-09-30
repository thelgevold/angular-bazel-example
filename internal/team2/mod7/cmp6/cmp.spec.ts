
import { Cmp8276Component } from './cmp';
describe('Cmp8276Component', () => {
  it('should add', () => {
    expect(new Cmp8276Component().add8276(1)).toBe(8277);
  });
});