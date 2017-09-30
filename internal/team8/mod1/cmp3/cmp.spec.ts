
import { Cmp8813Component } from './cmp';
describe('Cmp8813Component', () => {
  it('should add', () => {
    expect(new Cmp8813Component().add8813(1)).toBe(8814);
  });
});