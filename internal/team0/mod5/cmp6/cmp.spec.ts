
import { Cmp8056Component } from './cmp';
describe('Cmp8056Component', () => {
  it('should add', () => {
    expect(new Cmp8056Component().add8056(1)).toBe(8057);
  });
});