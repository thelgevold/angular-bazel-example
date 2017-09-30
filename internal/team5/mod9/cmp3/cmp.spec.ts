
import { Cmp8593Component } from './cmp';
describe('Cmp8593Component', () => {
  it('should add', () => {
    expect(new Cmp8593Component().add8593(1)).toBe(8594);
  });
});