
import { Cmp8722Component } from './cmp';
describe('Cmp8722Component', () => {
  it('should add', () => {
    expect(new Cmp8722Component().add8722(1)).toBe(8723);
  });
});