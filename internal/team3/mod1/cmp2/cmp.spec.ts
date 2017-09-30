
import { Cmp8312Component } from './cmp';
describe('Cmp8312Component', () => {
  it('should add', () => {
    expect(new Cmp8312Component().add8312(1)).toBe(8313);
  });
});