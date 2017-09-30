
import { Cmp8661Component } from './cmp';
describe('Cmp8661Component', () => {
  it('should add', () => {
    expect(new Cmp8661Component().add8661(1)).toBe(8662);
  });
});