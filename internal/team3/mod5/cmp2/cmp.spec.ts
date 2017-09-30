
import { Cmp8352Component } from './cmp';
describe('Cmp8352Component', () => {
  it('should add', () => {
    expect(new Cmp8352Component().add8352(1)).toBe(8353);
  });
});