
import { Cmp8902Component } from './cmp';
describe('Cmp8902Component', () => {
  it('should add', () => {
    expect(new Cmp8902Component().add8902(1)).toBe(8903);
  });
});