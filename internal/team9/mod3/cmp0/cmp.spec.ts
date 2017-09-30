
import { Cmp8930Component } from './cmp';
describe('Cmp8930Component', () => {
  it('should add', () => {
    expect(new Cmp8930Component().add8930(1)).toBe(8931);
  });
});