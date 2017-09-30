
import { Cmp8676Component } from './cmp';
describe('Cmp8676Component', () => {
  it('should add', () => {
    expect(new Cmp8676Component().add8676(1)).toBe(8677);
  });
});