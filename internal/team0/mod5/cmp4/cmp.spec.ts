
import { Cmp8054Component } from './cmp';
describe('Cmp8054Component', () => {
  it('should add', () => {
    expect(new Cmp8054Component().add8054(1)).toBe(8055);
  });
});