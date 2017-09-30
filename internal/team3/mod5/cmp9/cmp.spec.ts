
import { Cmp8359Component } from './cmp';
describe('Cmp8359Component', () => {
  it('should add', () => {
    expect(new Cmp8359Component().add8359(1)).toBe(8360);
  });
});