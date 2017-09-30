
import { Cmp8284Component } from './cmp';
describe('Cmp8284Component', () => {
  it('should add', () => {
    expect(new Cmp8284Component().add8284(1)).toBe(8285);
  });
});