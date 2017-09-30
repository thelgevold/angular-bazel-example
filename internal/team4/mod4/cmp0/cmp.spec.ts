
import { Cmp8440Component } from './cmp';
describe('Cmp8440Component', () => {
  it('should add', () => {
    expect(new Cmp8440Component().add8440(1)).toBe(8441);
  });
});