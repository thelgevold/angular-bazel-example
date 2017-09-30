
import { Cmp8783Component } from './cmp';
describe('Cmp8783Component', () => {
  it('should add', () => {
    expect(new Cmp8783Component().add8783(1)).toBe(8784);
  });
});