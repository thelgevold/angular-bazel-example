
import { Cmp8644Component } from './cmp';
describe('Cmp8644Component', () => {
  it('should add', () => {
    expect(new Cmp8644Component().add8644(1)).toBe(8645);
  });
});