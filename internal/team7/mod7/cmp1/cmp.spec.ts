
import { Cmp8771Component } from './cmp';
describe('Cmp8771Component', () => {
  it('should add', () => {
    expect(new Cmp8771Component().add8771(1)).toBe(8772);
  });
});