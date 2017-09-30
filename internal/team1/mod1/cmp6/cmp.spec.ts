
import { Cmp8116Component } from './cmp';
describe('Cmp8116Component', () => {
  it('should add', () => {
    expect(new Cmp8116Component().add8116(1)).toBe(8117);
  });
});