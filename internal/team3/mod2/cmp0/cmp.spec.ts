
import { Cmp8320Component } from './cmp';
describe('Cmp8320Component', () => {
  it('should add', () => {
    expect(new Cmp8320Component().add8320(1)).toBe(8321);
  });
});