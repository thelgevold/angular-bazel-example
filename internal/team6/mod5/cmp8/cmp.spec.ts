
import { Cmp8658Component } from './cmp';
describe('Cmp8658Component', () => {
  it('should add', () => {
    expect(new Cmp8658Component().add8658(1)).toBe(8659);
  });
});