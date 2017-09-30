
import { Cmp8360Component } from './cmp';
describe('Cmp8360Component', () => {
  it('should add', () => {
    expect(new Cmp8360Component().add8360(1)).toBe(8361);
  });
});