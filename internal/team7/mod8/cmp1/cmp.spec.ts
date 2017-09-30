
import { Cmp8781Component } from './cmp';
describe('Cmp8781Component', () => {
  it('should add', () => {
    expect(new Cmp8781Component().add8781(1)).toBe(8782);
  });
});