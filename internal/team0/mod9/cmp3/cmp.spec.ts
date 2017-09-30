
import { Cmp8093Component } from './cmp';
describe('Cmp8093Component', () => {
  it('should add', () => {
    expect(new Cmp8093Component().add8093(1)).toBe(8094);
  });
});