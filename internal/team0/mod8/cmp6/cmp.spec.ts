
import { Cmp8086Component } from './cmp';
describe('Cmp8086Component', () => {
  it('should add', () => {
    expect(new Cmp8086Component().add8086(1)).toBe(8087);
  });
});