
import { Cmp8859Component } from './cmp';
describe('Cmp8859Component', () => {
  it('should add', () => {
    expect(new Cmp8859Component().add8859(1)).toBe(8860);
  });
});