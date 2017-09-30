
import { Cmp8915Component } from './cmp';
describe('Cmp8915Component', () => {
  it('should add', () => {
    expect(new Cmp8915Component().add8915(1)).toBe(8916);
  });
});