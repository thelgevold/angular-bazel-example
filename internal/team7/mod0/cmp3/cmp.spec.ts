
import { Cmp8703Component } from './cmp';
describe('Cmp8703Component', () => {
  it('should add', () => {
    expect(new Cmp8703Component().add8703(1)).toBe(8704);
  });
});