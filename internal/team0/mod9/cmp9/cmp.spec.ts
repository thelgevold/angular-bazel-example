
import { Cmp8099Component } from './cmp';
describe('Cmp8099Component', () => {
  it('should add', () => {
    expect(new Cmp8099Component().add8099(1)).toBe(8100);
  });
});