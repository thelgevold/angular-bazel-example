
import { Cmp8274Component } from './cmp';
describe('Cmp8274Component', () => {
  it('should add', () => {
    expect(new Cmp8274Component().add8274(1)).toBe(8275);
  });
});