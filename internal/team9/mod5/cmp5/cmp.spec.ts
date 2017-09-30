
import { Cmp8955Component } from './cmp';
describe('Cmp8955Component', () => {
  it('should add', () => {
    expect(new Cmp8955Component().add8955(1)).toBe(8956);
  });
});