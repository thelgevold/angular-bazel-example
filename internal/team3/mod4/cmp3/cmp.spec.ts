
import { Cmp8343Component } from './cmp';
describe('Cmp8343Component', () => {
  it('should add', () => {
    expect(new Cmp8343Component().add8343(1)).toBe(8344);
  });
});