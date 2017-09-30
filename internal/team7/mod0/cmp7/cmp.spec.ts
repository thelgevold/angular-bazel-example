
import { Cmp8707Component } from './cmp';
describe('Cmp8707Component', () => {
  it('should add', () => {
    expect(new Cmp8707Component().add8707(1)).toBe(8708);
  });
});